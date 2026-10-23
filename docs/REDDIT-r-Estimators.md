# Post para r/Estimators

> Antes de publicar: revisa las reglas de r/Estimators sobre autopromoción (muchos subs piden flair o que el post no sea solo publicidad). El texto está escrito como "busco feedback", que es lo que mejor recibe Reddit. Cambia lo que esté entre [corchetes].

---

**Título**

I estimate Div 08 and got tired of re-typing door schedules, so I built a free browser takeoff tool. Looking for feedback from other door/frame/hardware estimators

---

**Cuerpo**

I do doors, frames and hardware estimating (some Div 10 too). Most of my time wasn't the pricing, it was re-typing the architect's door schedule, checking every opening against NFPA 80 / SDI by eye, and redrawing frame elevations for the shop.

So I built a tool for my own work and it's at the point where I'd like other estimators to beat it up.

**What it does**

- **Reads the door schedule off the PDF set.** It finds the schedule page and handles two-row headers (DOOR / FRAME / DETAILS over WD, HT, THK), wrapped remarks and pairs written as (2) 3'-0". You can drag a box around just the part you want. You check the columns, fix any cell, and it creates the openings. If you read it again after an addendum, it updates the openings instead of duplicating them.
- **Finds the door tags on the floor plans.** One click pins every scheduled door where its tag is drawn. It picks the door tag over a room number with the same text, and it lists tags on the sheet that aren't in your schedule.
- **Counts and measures on the plan.** Click doors and Div 10 items, set the scale or calibrate, and measure corner guard and crash rail in LF.
- **Checks every opening as you enter it:**
  - Fire label vs. closer, glazing, louvers and undercut
  - Throat vs. wall thickness, anchors vs. wall type
  - Hinge count on tall doors
  - 32" clear width and the 43" lite height on accessible doors
  - Door dragging once the floor finish or threshold goes in
- **Draws each opening:**
  - Frame and door elevations to scale, with the right lite for each door design (narrow, vision, half glass, full glass, louver)
  - Jamb section and hinge/strike locations from the Curries or Steelcraft chart
  - 11x17 elevation sheets and a shop plan per opening with the lite cutout dimensioned
- **Frame calculator.** Measure the hole and see the face lap at each jamb and the head, MO/RO, net door size, clear width and a plan view of the swing.
- **Prices it:**
  - Hardware sets with a price book and manufacturer multipliers
  - Labor, shop prep and freight
  - Markups by category
  - One totals engine for the quote, recap and Excel
- **Paperwork:** customer quotation in plain English, submittal package, keying schedule, change orders against a saved baseline, POs by vendor, and Curries order lines.

It's one HTML file. Nothing to install, it runs offline in Chrome or Edge, and your plans never leave your computer. No account, no subscription.

**What it isn't:** an ERP. No inventory or accounting, and it's single-user (the job saves as a file you can put on a shared drive). It doesn't OCR scanned drawings yet. If the PDF has no text layer you count by clicking.

**What I'd love feedback on**

1. How do your architects' door schedules look? If you have one it can't read, tell me how the columns are laid out (no need to share the drawings).
2. What do you still do by hand in Comsense / PRO-TECH / SFH (or Excel) that you wish was automatic?
3. Div 10 folks: what would make counting accessories and partitions faster?

Demo: [link]
Screenshots: [link to the images]

Happy to answer questions. Roast it.

---

## Notas para publicar

- **Imágenes que conviene subir (en este orden):**
  1. El schedule leído sobre la hoja (pantalla de *Plans* con el recuadro y las columnas).
  2. Las puertas ubicadas en el plano después de *Find door tags*.
  3. Una hoja de taller (shop plan) en PDF.
  4. La hoja 11x17 de elevaciones de puertas con cristales distintos.
  5. La calculadora con la vista de planta y giro.
- **No publiques** planos de un cliente ni datos de un trabajo real. Usa el trabajo de ejemplo (*File › Load the sample job*) o el PDF de prueba `tests/fixtures/drawings.pdf`.
- **Responde** los comentarios durante las primeras 2–3 horas; ahí se decide si el post sube.
- **Si preguntan por el precio:** decide antes qué vas a contestar (gratis, beta, de pago más adelante) para no improvisar.
