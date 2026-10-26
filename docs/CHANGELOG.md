# Changelog

Jobs saved in the browser and `.json` job files from version 1.9 onward open unchanged in every later version, with the same totals.

---

## 2.6 — Ideas from MeltPlan, for doors

See [MELTPLAN-ANALYSIS.md](MELTPLAN-ANALYSIS.md) for the study.

### New
- **Coordination review** (Review › Coordination), with a question for the architect per finding, *Copy all as questions* and CSV. It checks:
  - **Schedule ↔ hardware:** missing, empty and unused sets; doors with no set.
  - **Schedule ↔ plans:** doors not on any plan, plan tags not on the schedule, and a hand that differs from the swing on the plan.
  - **Hardware ↔ preps:** electric strikes without a strike prep, electrified locks without a power transfer or raceway.
  - **Hardware ↔ other trades:** low-voltage work by Division 26/28.
  - **Rating ↔ hardware:** rated doors with no closer or no latch.
  - **Rating ↔ wall.**
  - **Duplicate marks.**
  - **The last addendum's changes.**
- **Spec requirements** are read with the hardware sets from the Division 08, 10 and 28 sections and sorted into eleven categories. The ticked ones go into the quotation notes with their section number.
- **Wall it sits in / wall rating** fields on each opening, checked against IBC Table 716.1(2). A door in a smoke barrier or rated corridor without smoke and draft control is flagged.
- **Addendum compare:** reading the door schedule again logs each changed field on each door.
- **Qualifications from the job:** inclusions, exclusions and clarifications written into the quotation from what the job holds.

## 2.5 — The frame calculator on a phone

### Fixed
- **Sizes could not be typed on a phone.** The fields opened the phone's number keyboard, which has no dash, slash or foot mark, so `3-0`, `36 1/2` and `3'-0"` could not be entered.
- **The results were out of sight.** They sat about 2.5 screens below the inputs, and the page was 4.7 screens long.

### New
- **Dimension keypad:** digits, a foot key, fractions from 1/16 to 7/8, ±1/16 nudges, Clear, Next and Done. Every key updates the numbers, and the bottom bar slides away while the keypad is open.
- **Results pinned at the top:** MO or RO, net door, clear width (green or red against 32"), and the face lap or frame overall.
- **Door · Hole · Frame tabs**, each showing its current values, instead of one long page.
- **One-tap sizes:** widths 2'-4" to 4'-0", pairs to 6'-8", heights 6'-8", 7'-0" and 8'-0".
- **Measure at several points** (desktop and phone):
  - Width at the top, middle and bottom; height at each jamb; both diagonals.
  - The frame is sized to the smallest width and height.
  - Out of plumb, out of level and out of square are flagged with the amount.
- **Share the numbers** through the phone's share sheet, with the clipboard as a fallback.
- **Recent:** *Keep this one* stores a calculation. Sharing, making the shop plan PDF or making a new opening keeps it too. The last ten are listed under *Recent* to load again.
- **Larger action buttons** for touch.

## 2.4 — The phone

### New
- **Home screen**, the first screen on a phone:
  - Job card with the bid-date countdown, quoted total, openings, leaves and the split by category.
  - The issues, with a tap to the next one.
  - Six quick actions: add opening, size a frame, find a door, plans, quote PDF and save the job.
  - Progress rings for hardware assigned, checks clear and doors placed on a plan.
  - The latest openings.
- **Openings as cards:** mark, size, type, hand, rooms, rating, set and issues. Cards are drawn a screenful at a time as you scroll.
- **Gestures:** swipe across an opening's header for the next or previous door; swipe in from the left edge to close it. The opening slides in, and sheets slide up with a grab handle.
- **Bottom bar:** Home · Openings · a raised **+** · Calc · More, with an active indicator and a light vibration on tap where the phone supports it.
- **Compact top bar:** the job name gets the room; search, file and export become icons.
- **Install support:** theme color and add-to-home-screen tags; the notch and home indicator areas are kept clear (`viewport-fit=cover`, safe-area insets).

### Fixed
- **Tables overflowing:** on Keying, Purchasing and the Recap, the tables and two-column layouts ran off the screen with no way to scroll. Wide tables now scroll inside their card, and two-column layouts stack.
- **Openings list:** the phone showed the desktop table cut off at the edge.
- **The job name** was cut to a few letters by the File, Export and search buttons.
- **Sideways phones:** a phone held sideways switched to the desktop layout.
- **Slow changes:** every change to an opening redrew the full openings list hidden behind it. The list now redraws when the opening is closed, and the top bar updates once per frame. On a phone with the CPU slowed 4× and 300 openings, a change went from 1.0–1.4 s to about 0.25 s, and the list draw from 1.0 s to 0.19 s.
- **Tap delay:** removed the double-tap delay and added a press response to buttons and cards.

## 2.3 — Finding and reading the door schedule

### Fixed
- **The search only looked at the first 40 pages.** In a large set the schedule sheet was never reached, so the file opened on a floor plan. The score also counted every 4-digit number, so busy plans outscored the schedule. On a 60-sheet test set the old search took 120 s and landed on the wrong sheet; it now opens the right sheet in about 0.6 s and finishes the whole set in about 1.5 s.
- **Each page's text was read twice** (once to search, once to read) and again on every page change. Each page is now read once per file and shared by the search, the schedule reader, the tag finder and the spec reader.
- **A sheet with the schedule in side-by-side blocks** was read as one wide table, mixing the blocks with each other and with any window or finish schedule on the same lines.
- **Only the first tab of an Excel workbook was read.**

### New
- **Search order:** the bookmarks first, then every sheet from the back of the set. The schedule opens on its first sheet as soon as it is found, while the search continues.
- **Sheet buttons:** every sheet with a door schedule is listed with its sheet number and door count. *Read all* reads the schedule across all its sheets.
- **Tables on a sheet:**
  - Each table is told apart by the title over it and by its mark column starting over.
  - The door schedule blocks are read together. Window, room finish, equipment and other schedules, frame type legends and general notes are skipped.
- **Row checks:** rows must carry a real door mark (101, 101A, A101, 1-101A, B2.14), so note numbers, totals and headings are dropped.
- **Sideways sheets:** sheets plotted sideways are turned upright to read and to show.
- **Excel workbooks:** every tab is scored and the door schedule tab opens. Tabs are a click away, and merged headings are carried into each column.
- **More from the columns:** a TYPE column with SGL / PR sets the configuration, and a hand in the remarks is used when there is no hand column.

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
