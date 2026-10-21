/* End-to-end check of takeoff.html in headless Chromium.
   Usage: node tests/e2e.mjs [path/to/takeoff.html] [path/to/pdfjs-dist/package]
   Walks every page, runs every export and checks the files, and drives the main workflows.
   pdf.js is served from a local pdfjs-dist copy when one is given (the app loads it from cdnjs). */
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { createRequire } from 'module';

const file = path.resolve(process.argv[2] || 'takeoff.html');
const pdfjsDir = process.argv[3] && fs.existsSync(path.resolve(process.argv[3], 'build/pdf.min.js')) ? path.resolve(process.argv[3]) : '';
if (!pdfjsDir) console.log('pdfjs-dist not found: the plan takeoff checks are skipped');
const out = fs.mkdtempSync(path.join(os.tmpdir(), 'takeoff-e2e-'));
const errors = [], fails = [];
const ok = (cond, msg) => { if (!cond) { fails.push(msg); console.log('  FAIL', msg); } else console.log('  ok  ', msg); };

let pdfParse = null;
if (pdfjsDir) {
  const require = createRequire(import.meta.url);
  pdfParse = require(path.join(pdfjsDir, 'legacy/build/pdf.js'));
}

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, acceptDownloads: true });
if (pdfjsDir) {
  await ctx.route('**/pdf.js/3.11.174/pdf.min.js', r => r.fulfill({ path: path.join(pdfjsDir, 'build/pdf.min.js'), contentType: 'application/javascript' }));
  await ctx.route('**/pdf.js/3.11.174/pdf.worker.min.js', r => r.fulfill({ path: path.join(pdfjsDir, 'build/pdf.worker.min.js'), contentType: 'application/javascript' }));
}
await ctx.route('**/fonts.googleapis.com/**', r => r.fulfill({ body: '', contentType: 'text/css' }));
const page = await ctx.newPage();
page.on('pageerror', e => errors.push('pageerror: ' + e.message));
page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
page.on('dialog', d => d.accept(d.type() === 'prompt' ? "10'-0\"" : undefined));
await page.goto('file://' + file);
await page.waitForTimeout(600);
const ev = (fn, arg) => page.evaluate(fn, arg);

console.log('1. every page renders');
const views = await ev(() => NAV.map(n => n[0]));
for (const v of views) {
  await ev(v => showView(v), v);
  await page.waitForTimeout(80);
  const txt = await ev(v => document.getElementById('view-' + v).innerText.length, v);
  ok(txt > 40, 'view ' + v + ' has content');
}

console.log('2. every export downloads a sound file');
async function grab(cmd, retry) {
  await page.waitForTimeout(250);                      // Chromium drops a download fired too soon after the last one
  let dl;
  try { [dl] = await Promise.all([page.waitForEvent('download', { timeout: 8000 }), ev(c => runCmd(c), cmd)]); }
  catch (e) { if (retry) throw e; return grab(cmd, true); }
  const p = path.join(out, dl.suggestedFilename());
  await dl.saveAs(p);
  return p;
}
const exportsList = ['quotePdf', 'submittal', 'catalogPdf', 'xlsx', 'takeoffPdf', 'dhiPdf', 'recapPdf', 'bpFrame', 'bpDoor', 'bpShop', 'bpWeld',
  'combPdf', 'combXlsx', 'takeoffCsv', 'scheduleCsv', 'catalogCsv', 'keyPdf', 'keyCsv', 'poPdf', 'poCsv', 'd10Csv', 'save'];
const pdfPages = {};
for (const c of exportsList) {
  try {
    const p = await grab(c);
    const buf = fs.readFileSync(p);
    if (/\.pdf$/.test(p)) {
      ok(buf.slice(0, 5).toString() === '%PDF-', c + ' is a PDF');
      if (pdfParse) {
        const doc = await pdfParse.getDocument({ data: new Uint8Array(buf), verbosity: 0 }).promise;
        pdfPages[c] = doc.numPages;
        const pg = await doc.getPage(1); const tc = await pg.getTextContent();
        ok(doc.numPages > 0 && tc.items.length > 5, c + ' parses, ' + doc.numPages + ' pages, text on page 1');
      }
    } else if (/\.xlsx$/.test(p)) ok(buf.slice(0, 2).toString() === 'PK' && buf.length > 2000, c + ' is a zip workbook');
    else ok(buf.length > 20, c + ' wrote ' + buf.length + ' bytes');
  } catch (e) { ok(false, c + ' threw: ' + e.message); }
}

console.log('3. job totals agree everywhere');
const tot = await ev(() => { const T = jobTotals(); return { total: T.total, sub: T.sub, quote: quoteTotals().total, d10: T.div10.sell }; });
ok(Math.abs(tot.total - tot.quote) < 0.01, 'quote total equals recap total (' + Math.round(tot.total) + ')');
ok(tot.d10 > 0, 'sample job carries Division 10 into the totals');

console.log('4. company details are kept');
await ev(() => showView('project'));
await page.fill('#c_name', 'Martinez Doors & Hardware');
await page.waitForTimeout(100);
const co = await ev(() => JSON.parse(localStorage.getItem('takeoff.company.v1') || '{}').name);
ok(co === 'Martinez Doors & Hardware', 'company name saved');

console.log('5. quick entry, run of openings, unique marks');
await ev(() => showView('takeoff'));
const n0 = await ev(() => S.openings.length);
await page.fill('#quickBar [data-q="size"]', '3070');
await page.fill('#quickBar [data-q="rep"]', '3');
await page.click('#quickBar button[type=submit]');
await page.waitForTimeout(150);
ok((await ev(() => S.openings.length)) === n0 + 3, 'three openings added');
await ev(() => { const ids = S.openings.slice(-2).map(o => o.id); duplicateOpenings(ids); });
const dupMarks = await ev(() => { const m = S.openings.map(o => o.mark); return m.length - new Set(m).size; });
ok(dupMarks === 0, 'duplicating two openings keeps every mark unique');
await ev(() => undo());
ok((await ev(() => S.openings.length)) === n0 + 3, 'undo removes the duplicates');

console.log('6. checks catch a missing hardware set');
const miss = await ev(() => { const o = S.openings[1]; o.hwSet = 'HW-99'; JOB_REV++; return checks(o).some(c => c.t === 'Hardware set missing'); });
ok(miss, 'opening on a deleted set is flagged');
await ev(() => { S.openings[1].hwSet = 'HW-1'; persist(); });

console.log('7. costs follow scope');
const scope = await ev(() => { const o = S.openings[0]; const a = costs(o).frame; o.frameScope = 'NIC'; const b = costs(o).frame; o.frameScope = 'NEW'; return [a, b]; });
ok(scope[0] > 0 && scope[1] === 0, 'a frame not in contract is not priced');

console.log('8. drawings for every view, every opening, no NaN');
const nan = await ev(() => { let bad = 0; S.openings.forEach(o => { ['elev', 'frame', 'door'].forEach(m => { if (/NaN|undefined/.test(svgElevation(o, m))) bad++; });
  if (/NaN/.test(svgHingeChart(o))) bad++; if (/NaN/.test(svgSection(o))) bad++; }); return bad; });
ok(nan === 0, 'no NaN in any drawing');
const contNan = await ev(() => { const o = Object.assign(blankOpening(), { hingeQty: 'CONT', hingePrep: 'CH', mark: 'T1' }); return /NaN/.test(svgElevation(o, 'elev')); });
ok(!contNan, 'continuous hinge elevation draws');
await ev(() => { selectOpening(S.openings[2].id); runCmd('enlarge'); });
ok(await ev(() => !document.getElementById('modal').hidden && !!document.querySelector('.bigdraw svg')), 'enlarged drawing opens');
await ev(() => closeModal());

console.log('9. Division 10');
await ev(() => showView('div10'));
const d0 = await ev(() => S.div10.length);
await page.selectOption('#d10Lib', 'L|11');
await page.waitForTimeout(100);
ok((await ev(() => S.div10.length)) === d0 + 1, 'item added from the list');

console.log('10. price book reprices');
const pb = await ev(() => { PB.mult.Hager = 0.5; savePB(); const s = S.sets[0], it = s.items[0]; it.mfr = 'Hager'; it.list = 40; priceItem(it); return it.cost; });
ok(pb === 20, 'list 40 × 0.5 = 20');

console.log('11. keying');
await ev(() => showView('keying'));
const ky = await ev(() => { const s = keyingSummary(); return { locked: s.locked.length, cyl: s.cyl, sets: S.keying.keysets.length }; });
ok(ky.locked >= 3 && ky.cyl >= 3 && ky.sets >= 3, 'locked openings and cylinders counted (' + ky.cyl + ' cylinders)');
await page.click('#ksAutoKD');
await page.waitForTimeout(100);
ok((await ev(() => keyingSummary().unassigned.length)) === 0, 'auto keying leaves no locked door without a keyset');

console.log('12. change orders');
await ev(() => showView('changes'));
await page.click('#coSave0');
await ev(() => { S.openings[0].qty = 3; persist(); renderChanges(); });
const co2 = await ev(() => compareToBaseline(activeBaseline()));
ok(co2.rows.length >= 1 && co2.net > 0, 'raising a quantity prices as an add (' + Math.round(co2.net) + ')');
try { const p = await grab('coPdf'); ok(fs.readFileSync(p).slice(0, 5).toString() === '%PDF-', 'change order PDF'); } catch (e) { ok(false, 'coPdf threw ' + e.message); }

console.log('13. purchasing');
const po = await ev(() => purchaseOrders().map(p => p.vendor));
ok(po.length >= 3, 'purchase orders by vendor: ' + po.join(', '));

if (pdfjsDir) {
  console.log('14. plan takeoff on a PDF');
  const planPdf = path.join(out, Object.keys(pdfPages).length ? fs.readdirSync(out).find(f => /_FRAME_elevations\.pdf$/.test(f)) : '');
  await ev(() => showView('import'));
  await page.setInputFiles('#impFile', planPdf);
  await page.waitForTimeout(1500);
  await page.click('[data-impmode="count"]');
  await page.waitForTimeout(1500);
  const before = await ev(() => S.openings.length);
  const box = await page.locator('#impCanvas').boundingBox();
  ok(!!box && box.width > 200, 'plan page drawn');
  await page.mouse.click(box.x + 120, box.y + 120);
  await page.waitForTimeout(200);
  ok((await ev(() => S.openings.length)) === before + 1, 'click on the plan adds an opening');
  ok((await ev(() => document.querySelectorAll('#impOverlay g').length)) >= 1, 'pin drawn');
  await page.click('[data-ptool="d10"]');
  await page.selectOption('#impD10', 'L|6');
  const dl0 = await ev(() => S.div10.length);
  await page.mouse.click(box.x + 200, box.y + 160);
  await page.mouse.click(box.x + 220, box.y + 160);
  await page.waitForTimeout(200);
  ok((await ev(n => { const r = S.div10[S.div10.length - 1]; return S.div10.length === n + 1 && r.qty === 2 && r.pins.length === 2; }, dl0)), 'two clicks count two accessories');
  await page.selectOption('#impScale', '1.333333');
  await page.click('[data-ptool="measure"]');
  await page.selectOption('#impD10', { index: 0 });
  await page.mouse.click(box.x + 100, box.y + 300);
  await page.mouse.click(box.x + 172, box.y + 300);
  await page.waitForTimeout(200);
  const len = await ev(() => IMP.lastLen);
  ok(len > 0, 'measured a run: ' + len.toFixed(1) + ' in');
  await page.click('#impUndoPin');
  await ev(() => showView('takeoff'));
}

console.log('15. reload keeps the job');
const before2 = await ev(() => ({ n: S.openings.length, d: S.div10.length, k: S.keying.keysets.length, b: S.baselines.length }));
await page.waitForTimeout(700);
await page.reload(); await page.waitForTimeout(700);
const after2 = await ev(() => ({ n: S.openings.length, d: S.div10.length, k: S.keying.keysets.length, b: S.baselines.length }));
ok(JSON.stringify(before2) === JSON.stringify(after2), 'openings, Division 10, keying and baselines survive a reload');

console.log('16. phone layout');
await page.setViewportSize({ width: 390, height: 844 });
await page.waitForTimeout(300);
ok(await ev(() => document.body.classList.contains('phone')), 'phone mode on a narrow screen');
const overflow = await ev(() => document.documentElement.scrollWidth - window.innerWidth);
ok(overflow <= 1, 'no sideways scroll on the phone');

console.log('\nconsole and page errors:', errors.length ? '\n  ' + errors.join('\n  ') : 'none');
await browser.close();
const failed = fails.length + errors.length;
console.log(failed ? `\n${fails.length} checks failed, ${errors.length} errors` : '\nall checks passed');
process.exit(failed ? 1 : 0);
