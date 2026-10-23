# Competitive analysis: Comsense, PRO-TECH and Software for Hardware

These are the three packages door, frame and hardware distributors (Division 08) use in the US and Canada. All three also cover what a distributor sells in Division 10 (toilet accessories, extinguisher cabinets, lockers, signage) as catalog lines. This note summarizes what each does, where it is strongest, and what Opening Takeoff took from them.

> **How this was researched.** The vendors' own sites could not be opened directly from the research environment. What follows comes from search results summarizing those pages, software directories and user comments. These are vendor claims, not our own tests.

---

## 1. Comsense (Advantive)

**What it is.** A full ERP for architectural-opening distributors: estimating, detailing, purchasing, inventory and accounting in one system. Founded in 1989 and acquired by Advantive in September 2024. Includes *Comsense Spec Writer* for hardware specifications.

**Main features**
- More than **120 electronic manufacturer price books**.
- Imports architects' door schedules and hardware sets.
- Batch estimating.
- **Heading builder** that assembles headings from attributes (hardware set, door, frame, opening data).
- **Default prep** that applies repetitive preps to doors and frames at once, and coordinates door, frame and hardware preps **across change orders**.
- Drawn **frame elevations** that produce a costed bill of materials.
- Purchase orders from the same system.

**Strengths:** end-to-end ERP depth (inventory, accounting), prep coordination across revisions, the volume of price books.
**Reported weaknesses:** a steep learning curve (one user says some still do preps on paper because loading them is slow), and few public reviews.

## 2. PRO-TECH (ASSA ABLOY / EDSS)

**What it is.** Software for door and hardware distributors from ASSA ABLOY, installed or cloud as **PRO-TECH V8**, or cloud-only as **PRO-TECH TITAN**.

**Main features**
- Estimates and schedules for doors, frames and hardware, and a door schedule creator.
- Standardized **hardware sets** assigned across the project.
- **Keying** reports and a keying index in the submittal.
- Manufacturer and in-house **price books**. TITAN adds real-time price books with product data and images.
- **Elevations:** V8 has automatic drawing ("Elevation Power") with exact pricing. TITAN uses APOGEE for 3D renders from hundreds of templates.

**Strengths:** the elevation tools, natural integration with ASSA ABLOY products, and a lower price than the other two according to users.
**Reported weaknesses:** "a bit clunky" according to one forum user, and aimed mainly at ASSA ABLOY distributors.

## 3. Software for Hardware (SFH, a Univerus company)

**What it is.** Estimating and project-management software for door, frame and hardware distributors in the US and Canada. Acquired by Univerus in October 2023.

**Main features**
- **Enter once:** one data entry produces quotes, hardware schedules, keying and division schedules, and submittal packages.
- A door and frame **elevation tool** with no CAD needed.
- Built-in price books: 100+ hardware, 9 accessories and 10 hollow metal.
- Project tracking for contract and counter work.
- Integrations with **SAP Business One** (2024) and **Allegion Overtur**.

**Strengths:** the single-entry document package, the Overtur and ERP integrations, and Division 10 accessory price books.

---

## 4. Comparison

| Feature | Comsense | PRO-TECH | SFH | **Opening Takeoff** |
|---|---|---|---|---|
| Live code checks per opening (NFPA 80, SDI, ANSI, accessibility) | — | — | — | ✔ |
| **Door schedule read off the PDF drawings** | import | — | via Overtur | ✔ |
| **Doors placed on the floor plan by their tags** | — | — | — | ✔ |
| Count and measure on the plan (scale, calibration, LF) | — | — | — | ✔ |
| Drawn elevations | ✔ | ✔✔ | ✔ | ✔ (pairs, sidelites, transoms, borrowed lites, lites by door design, swing, automatic scale) |
| Hardware sets and DHI schedule | ✔ | ✔ | ✔ | ✔ |
| Keying | ✔ | ✔ | ✔ | ✔ |
| Price books with multipliers | ✔✔ | ✔ | ✔ | ✔ (multipliers and Excel/CSV import) |
| Division 10 | catalog | catalog | ✔ | ✔ |
| Change orders against a baseline | ✔ | — | ✔ | ✔ |
| Purchase orders by vendor | ✔ | — | ✔ | ✔ |
| Submittal in one PDF | ✔ | ✔ | ✔ | ✔ |
| Curries order lines, shop plan, cut list, label log | — | — | — | ✔ |
| Frame calculator (face lap, MO/RO, clear width, swing) | — | — | — | ✔ |
| Inventory and accounting (ERP) | ✔ | ✔ | via SAP | ✗ (out of scope) |
| Multi-user / cloud | ✔ | ✔ (TITAN) | ✔ | ✗ (job files) |
| Installation | server | installed or cloud | installed or cloud | none, one HTML file |

## 5. Roadmap ideas from this comparison

- **Cloud and multi-user** (TITAN, SFH). This needs a server; today a job is a file.
- **Live manufacturer price books** (TITAN). Today they are imported from Excel or CSV.
- **Import from Allegion Overtur / ASSA ABLOY Openings Studio** (SFH): read their export as another schedule.
- **OCR for scanned drawings**, so schedules without a text layer can be read too.
- **3D or template elevations** (TITAN / APOGEE).
- **Manufacturer cut sheets** inside the submittal.

## Sources

- [Comsense — Advantive](https://www.advantive.com/products/comsense/) · [Comsense Enterprise features](https://www.comsenseinc.com/comsense-enterprise-feature-list/) · [Capterra reviews](https://www.capterra.ae/software/180972/comsense-enterprise)
- [PRO-TECH](https://www.pro-techsoftware.com/en) · [V8](https://www.pro-techsoftware.com/en/products/version-8) · [TITAN](https://www.pro-techsoftware.com/en/products/pro-tech-titan) · [EDSS at Curries](https://www.curries.com/en/customer-resources/edss)
- [Software for Hardware](https://www.softwareforhardware.com/) · [Univerus](https://www.univerus.com/software-for-hardware) · [SAP Business One integration](https://markets.financialcontent.com/ms.intelvalue/article/getnews-2024-11-11-software-for-hardware-and-blue-ocean-systems-announce-sap-business-one-integration) · [Allegion Overtur integration](https://internationalsecurityjournal.com/?p=34630)
- CommDoor forum: [Best software to use?](https://www.commdoor.com/index.php/forum/comsense-estimating-detailing-software/66-best-software-to-use) · [About PRO-TECH](https://www.commdoor.com/index.php/forum/pro-tech-estimating-detailing-software/54-about-pro-tech)
