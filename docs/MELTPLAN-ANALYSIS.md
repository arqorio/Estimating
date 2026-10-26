# MeltPlan: what it is, how it works, and what it means for Opening Takeoff

*October 2026. Written after a commenter on r/Estimators asked whether anyone had tried MeltPlan for door, frame and hardware takeoffs.*

> **How this was researched.** MeltPlan's own site could not be opened from the research environment. Everything below comes from search results that quote or summarize the vendor's pages, plus AEC tool directories and funding reports. Accuracy and speed figures are **vendor claims**; no independent benchmark, customer case study or public review was found.

---

## 1. What MeltPlan is

MeltPlan is a Berkeley-based **AI preconstruction platform for general contractors**. It raised a $10M seed round led by Bessemer Venture Partners ($14M total), and reports a team of roughly 11–100 people. It is **not a door, frame and hardware product**. It works across every trade on a GC's bid, and Division 08 is one of many.

It sells five products:

| Product | What it does | How it does it |
|---|---|---|
| **Melt Review** | Reads the drawings and specs and flags conflicts, inconsistencies, missing requirements and changes between revisions. Checks each SD/DD/CD set against design criteria across architecture, structure, MEP and civil. | AI over the drawing set and project manual. Compiles "precon reports": sole-source items, mockups, testing requirements. Claims to replace 20–40 hours of manual spec reading per project. It stops before the RFI: it does not log, route or answer RFIs. A licensed reviewer confirms each flag, since some are false positives from poor scans. |
| **Melt Takeoff** | Quantity takeoff from the plan set, structured in MasterFormat or UniFormat. | "The model proposes, a verifier confirms": AI vision plus onshore senior estimators who check the result. Reported at $1k–$5k per project by size. |
| **Melt Bid** | Writes scope documents, levels subcontractor proposals, and surfaces gaps, exclusions and alternates. | Compares each bid with the others and with the bid documents to find work nobody priced, exclusions and overlaps between trades. Works in a web app and Excel kept in sync. Claims a bid level in about two minutes. Post-bid only: it does not help subs bid. |
| **Melt Code** | Building code answers for the project, with the clause cited. | Compliance paths by occupancy, construction type and fire ratings. Claims 95%+ on building inspector exams (self-reported). |
| **Melt Schedule** | Scheduling. | No detail found. |

Pricing reports conflict. The vendor FAQ says it prices by the square footage of projects run, with unlimited users. One review site lists $19–$59 a month, and another lists $1k–$5k per project for takeoff. The accuracy claim is 95%+ (93–98% in a funding report).

## 2. How it compares with what a door distributor needs

MeltPlan is built for the **GC's** problem: many trades, many subs, one bid. A Division 08 distributor has the opposite problem: **one trade, in great depth**. That means every opening sized, rated, prepped, handed, hardware-scheduled, keyed and priced, with the shop paperwork behind it.

| | MeltPlan | Opening Takeoff |
|---|---|---|
| Who it is for | General contractors, all trades | Door, frame and hardware distributors and estimators, Div 08 and Div 10 |
| Takeoff depth for doors | Counts and quantities by MasterFormat section | Every opening: size, configuration, rating and label, hand, wall, anchors, jamb depth, preps, lites, hardware set, keying, price |
| How it reads drawings | Cloud AI plus human verifiers | In the browser: the PDF text layer and linework (schedule reader, door tags, swing arcs for handing), checked by the estimator |
| Spec reading | AI over the whole project manual | The Div 08 and 10 sections: hardware sets, plus the requirements that change price or paperwork (new in 2.6) |
| Conflict checking | Drawings ↔ specs, all disciplines | Schedule ↔ hardware ↔ plans ↔ spec ↔ code, for doors only (new in 2.6), plus per-opening NFPA 80, SDI, ANSI and accessibility checks |
| Bid leveling | Subcontractor proposals | Not applicable to a supplier; supplier quotes are a possible future feature |
| Shop and supply output | None | Curries order lines, shop plans, elevations, cut lists, label log, purchase orders, submittals, keying schedule |
| Where your plans go | Uploaded to the vendor's cloud | Nowhere; nothing leaves the computer |
| Cost | Per project or square foot | Free, one file |

**Bottom line:** MeltPlan does not compete with a door estimating tool. It is upstream of it: a GC might use it to read the job, then still send Division 08 to a hardware distributor. Its most useful lessons for us are in **Melt Review** (cross-check the documents, list the requirements that cost money, catch addendum changes) and **Melt Bid** (spell out exclusions and scope gaps). Its weakness for our trade is depth: a quantity of "doors" is not a quote.

## 3. What we took from it (version 2.6)

1. **Spec requirements report** (from Melt Review's "precon reports"). The Div 08 and 10 sections are read for the sentences that change the price or the paperwork. They are filed under:
   - substitutions and basis of design
   - qualifications and standards (AHC/DHI, BHMA grade, UL 10C)
   - submittals
   - keying and cores
   - warranty
   - extra materials
   - mockups, testing and inspection
   - furnished only or by others
   - electrified and low voltage
   - delivery
   - finishes

   They are kept with the job, and the ones ticked are added to the quotation notes with their section number.
2. **Coordination review** (from Melt Review's conflict checks, limited to our trade). It lists every finding with the doors involved and a ready-to-send question for the architect, and exports to CSV:
   - **Schedule ↔ hardware:** missing sets, empty sets, unused sets, doors with no set.
   - **Schedule ↔ plans:** scheduled doors not on any plan, plan tags not on the schedule, a hand on the schedule that differs from the swing drawn on the plan.
   - **Hardware ↔ preps:** electric strikes without a strike prep, electrified locks without a power transfer or raceway.
   - **Hardware ↔ other trades:** low-voltage wiring and power by Division 26/28.
   - **Rating ↔ hardware:** rated doors with no closer or no latch.
   - **Rating ↔ wall:** see item 3.
   - **Duplicate marks.**
3. **Door rating from the wall** (from Melt Code). Each opening can say which wall it sits in (fire wall, fire barrier, shaft or exit enclosure, corridor, fire partition, smoke barrier, exterior) and the wall's rating. The door is then checked against IBC Table 716.1(2): for example, a 2 hr fire barrier needs a 90 min door and a 1 hr corridor needs a 20 min door with smoke and draft control.
4. **Addendum compare** (from Melt Review's revision changes). Reading the door schedule again after an addendum now records what changed on each door (size, rating, hand, set…). It shows in the coordination review, so nothing changes silently.
5. **Qualifications from the job** (from Melt Bid's scope gaps and exclusions). One click writes inclusions, exclusions and clarifications into the quotation from what is actually in the job. For example:
   - labels on the rated openings
   - construction cores when the job is keyed
   - Division 26/28 wiring when there is electrified hardware
   - installation excluded when no labor is priced
   - NFPA 80 inspection excluded on rated work
   - field-verified and custom openings called out
   - the drawing date and addenda

## 4. What we did not take, and why

- **Cloud AI with paid verifiers.** That means sending client drawings to a third party, a running cost, and an account. Opening Takeoff's checks are rules an estimator can read and argue with. The reading is shown on the sheet and confirmed before anything is created, which follows the same "model proposes, estimator confirms" principle without the cloud.
- **Bid leveling of subcontractors.** A supplier does not receive subcontractor bids. Leveling *supplier* quotes (two hardware houses or two door makers on the same openings) could be a later feature.
- **Melt Schedule.** This is project scheduling, outside estimating.

## 5. Sources

- [MeltPlan (vendor site)](https://www.meltplan.com/) · [Melt Takeoff](https://www.meltplan.com/takeoff) · [Melt Bid](https://www.meltplan.com/bid) · [Design review](https://www.meltplan.com/design-review)
- MeltPlan glossary: [AI drawing review in precon](https://www.meltplan.com/glossary/ai-drawing-review-precon) · [AI for scope gap detection](https://www.meltplan.com/glossary/ai-scope-gap-detection) · [AI for MEP drawings review](https://www.meltplan.com/glossary/ai-mep-drawings-review) · [AI for RFI response](https://www.meltplan.com/glossary/ai-rfi-response)
- [Inside MeltPlan: AI built for preconstruction (AEC+Tech)](https://www.aecplustech.com/blog/inside-meltplan-ai-built-for-preconstruction) · [AEC+Tech tool listing](https://www.aecplustech.com/tools/meltplan)
- [Data Driven AEC: MeltPlan](https://datadrivenaec.com/tools/meltplan) · [Melt Bid](https://datadrivenaec.com/tools/melt-bid)
- [TAMradar: MeltPlan raises $10M seed](https://www.tamradar.com/funding-rounds/meltplan-seed-10m) · [Dealroom profile](https://dealroom.co/companies/meltplan/)
- [AI Review Rating: MeltPlan pricing](https://aireviewrating.com/tools/meltplan) · [Future Tools](https://futuretools.io/tools/meltplan) · [Architizer listing](https://tech.architizer.com/listing/meltplan.html)
- Door-specific AI tools seen in the same searches: [Bild AI Division 8](https://d8.bild.ai/division-8)
