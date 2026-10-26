# Changelog

Jobs saved in the browser and `.json` job files from version 1.9 onward open unchanged in every later version, with the same totals.

---

## 2.2 — Requested on r/Estimators

### New
- **Handing from the floor plan** (asked by u/masterbuilder28).
  - The app reads the door swings drawn on the sheet: bezier and polyline quarter circles, plus the leaf line. The arc's center is the hinge and the leaf marks the open position.
  - It sets the hand of every door pinned on the sheet: LH or RH from the push side, LHR or RHR when the door swings out.
  - Pairs are recognized (LHRA / RHRA).
  - With the drawing scale set, a leaf that measures differently from the schedule is reported.
  - Clicking a door on its swing in *Count on plan* hands it as it is added.
  - *Show swings* draws what was read over the sheet.
- **Unit types and flips** (asked by u/masterbuilder28).
  - The doors tagged on an enlarged unit plan become that unit's doors.
  - Units are counted on the floor plans by their labels. A flip word (FLIP, MIRROR, REV, (R)) on or under the label counts as flipped. Units can also be clicked one by one; clicking a pin again flips it.
  - Typed extra counts cover units that are not on the sheets.
  - *Put on the job* writes one line per door for the units as drawn and one with the hand mirrored for the flipped units, multiplied out.
  - Edits made to those lines are kept when the counts change.
- **Hardware sets from the specification** (prompted by u/Significant-Sock-762).
  - Reads every set in a spec PDF: the heading, quantity, unit, item, catalog number, finish and maker. Maker abbreviations such as IVE, SCH, VON and LCN are expanded.
  - Puts the doors the spec lists on their set.
  - Fills or replaces sets with the same number, so `SET 01` and `HW-1` are treated as the same set.
  - Items furnished by others are priced at zero.
- **Electrified hardware report:**
  - Flags electric strikes, power transfers, power supplies, card readers, keypads, mag locks, auto operators, request-to-exit, door position switches and low-voltage ratings.
  - Lists them set by set and door by door in *Plans › Hardware sets*.
  - Exports them as *Electrified hardware, low voltage CSV*.
- A PDF whose first useful page is a hardware specification opens straight in *Hardware sets*.
- Electric strikes, power transfers, readers, mag locks and operators are now recognized by name when hardware is imported.

## 2.1 — Reading drawings, each door its own glass, exact sizes

### New
- **Door schedule from the PDF.**
  - The app finds the schedule page and the table from its header row.
  - Two-row headers are joined (DOOR / FRAME / DETAILS over WD, HT, THK).
  - Remarks that wrap onto a second line join their row.
  - Pairs written as `(2) 3'-0"` read as pairs.
  - Drag a box on the sheet to read only part of it. The columns are drawn over the sheet.
  - Fix any cell with a click and untick rows to leave them out.
  - *Read every page like this* adds the pages that carry the same schedule.
  - Reading again updates the openings already on the job instead of duplicating them.
  - Hardware sets named on the schedule but missing from the job are started empty.
  - An architect's door type that is an SDI design letter (F, N, V, HG, FG…) sets the door design.
- **Door tags on the plans.** *Find door tags on this sheet* pins each scheduled door where its tag is drawn and prefers the tag over a room number with the same text. It lists tags on the sheet that are not on the job and adds them in one click.
- **Plans workflow in three steps:** read the schedule, place the doors on the plans, count Division 10. Arrows step through the pages, and a PDF opens in schedule or count mode depending on what the page holds.
- **Lites, louvers and panels from the door design.**
  - Vision, narrow lite, half glass, full glass and sized glass use the maker's standard size and location when no size is typed.
  - Stacked lites, louvers, embossed panels and the dutch-door split are drawn too.
  - Wired, tempered, laminated, insulated, fire-rated and polycarbonate glass each look different.
  - New fields per opening: number of lites, top of door to top of glass, lock / hinge / center side, edge distance and louver height.
  - New field in **Job info**: the kit allowance (cutout = visible glass + 1½" by default).
  - One engine draws the lites everywhere: the screen, the 11×17 sheets, the shop plan and the calculator.
- **Exact sizes.**
  - The door as cut, including unequal pairs.
  - Clear width at 90°.
  - Clearance under the door once the floor finish or threshold is in (new fields).
  - Maximum cut-off, and the lite cutout and glass size.
  - Shown beside the opening drawing, on the shop plan and in the calculator.
- **New checks:**
  - The door drags on the floor finish or threshold.
  - More than ¾" under a fire door (NFPA 80).
  - Under 32" clear on an accessible door.
  - A threshold over ½".
  - On an accessible door, a lite whose bottom is above 43".
  - A lite that hits the lockset or leaves less than 3½" of stile.
- **Shop plan:**
  - Dimensions the lite from the top and from the edge.
  - Prints the visible glass, cutout, glass type and clear width.
  - The work order gives the exact cutout.
- **Calculator:** door design, glass size and type, floor finish and threshold, with the recommended undercut.

### Fixed
- Every door with glass was drawn the same, with one rectangle centered 60" above the floor. A door design without a typed size drew no glass at all.
- The Curries face code read FLUSH on a narrow-lite or half-glass door when no size was typed.
- The shop plan gave both leaves of an unequal pair the same width.
- The PDF reader mixed every word on the sheet (notes, title block, other tables) into columns by position, and misread two-row headers, wrapped remarks and pair widths.
- The sheet number was taken from the first sheet-like text, often a detail callout such as `5/A-501`. It now comes from the title block.
- Opening a second PDF could reuse the text of the first one.

---

## 2.0.1 — Frame calculator rebuilt

### Fixed
- The net leaf height ignored the ⅛" head clearance (6'-11¼" instead of 6'-11⅛").
- The net leaf width on a pair ignored the ⅛" meeting-edge gap.
- The maximum cut-off was ⅛" off and ignored the real hinge length.
- **Elevation drawing:**
  - Hinges were not to scale.
  - The strike and its label sat on the leaf edge.
  - Labels ran over the wall, the dashed opening box ran over the frame, and the undercut label ran over the floor line.
  - No strike was drawn on pairs.
- Every keystroke redrew the inputs and reformatted what was being typed (`3-0` became `3"`).
- The full hinge chart mixed feet-inches with inches.

### New
- The calculator builds a real opening, so it shares the sizes, hardware locations and checks with the rest of the app.
- Configurations: single, pair, one or two sidelites, transom and combinations. Inputs for profile, wall thickness (throat check), hinge size and degree of swing.
- **Five drawings:**
  - Dimensioned elevation: the hole as measured against the hole the frame needs, and the face lap at each jamb.
  - Plan with the door swing by hand and degree, and the clear width, flagged under 32".
  - Jamb section, hinge locations, and frame with anchors.
- A result strip, Curries order lines with Copy, *Copy the numbers*, a shop plan PDF, *New opening* from the numbers, and load from or apply to the selected opening with every field.

---

## 2.0 — Keying, Division 10, price book, change orders, purchasing

### New
- **Specialties (Division 10):**
  - Toilet compartments and accessories, extinguishers and cabinets, lockers, signage, wall protection, markerboards, mailboxes, shelving and flagpoles, by CSI section.
  - Quantity, unit, list, cost, hours and their own markup.
  - Carried on the quotation, recap, takeoff sheet, Excel workbook, catalog, purchase orders and change orders.
- **Keying:**
  - Hierarchical keysets (GMK › MK › change key) with a keyset per opening, also in the panel and in bulk edit.
  - Cylinders counted from the hardware sets.
  - Auto-keying by level or by set.
  - PDF and CSV, included in the submittal and the workbook, with a *No keyset* check.
- **Price book:**
  - Multipliers by manufacturer and a list-price column in the hardware sets.
  - Excel/CSV price list import, and price-book products in every set and Div 10 picker.
  - *Reprice this job*.
- **Change orders:** saved price baselines, a line-by-line comparison (added, changed, removed) and a change-order PDF with a signature block.
- **Purchasing:** one purchase order per vendor with a manufacturer-to-distributor map. PDF per vendor or all of them, and CSV.
- **Plans:**
  - Tools for openings, Division 10 and measuring.
  - A drawing scale or two-click calibration, and zoom.
  - A count legend per page and *Remove last*.
- **Drawings:** any drawing opens full size and saves as SVG. The elevation shows the swing mark.
- **Menu** regrouped: Set up · Take off Div 08 · Take off Div 10 · Review · Send · Help.

### Fixed
- Company details were never saved, so every PDF printed "YOUR COMPANY NAME".
- Feet-inch rounding: 35.97" printed as `2'-11 15/16"` instead of `3'-0"`.
- A fractional width produced Curries size codes such as `212`.
- A continuous hinge produced `NaN` in the elevation, and hinges are now drawn at their real length.
- Frame, door and hardware were priced even when the scope was NIC, by others, existing or removal.
- Tax only appeared on the quotation, so the recap, takeoff sheet, workbook and bid recap showed a different total. There is now one totals engine.
- Shop, field-measure and delivery hours were charged but missing from the summaries.
- An opening whose hardware set had been deleted gave no warning and priced $0 of hardware.
- Duplicating openings or quick entry could repeat a mark, with no warning.
- The Curries import put the 4" header into the jamb face.
- The frame anchor total ignored sidelite jambs.
- **Calculator:**
  - A single RH door was drawn hinged left.
  - A 7' pair showed four hinges per leaf.
  - *Use these numbers* set a wall type that does not exist.
- Adding a pair from the phone left the second leaf at 0.
- Renaming a hardware set to a number already in use merged the two sets.
- **11×17 sheets:**
  - Pairs were hinged on one leaf only.
  - Sidelites were always drawn on the left.
  - Divided transoms and borrowed lites were not drawn.
  - Drawings sat small in a corner.
- The weld sheet had no hinges on the second leaf of a pair and always used 4½" hinges.
- Plan count pins were lost on reload and did not follow undo.
- The keying column on the order sheet was empty.
- Several toolbar and tab layout problems.
