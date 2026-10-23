# Opening Takeoff 2.0 — cambios

Base: *Takeoff 1.9 - Dev. build.html* (carpeta Estimating de Google Drive, 13 oct 2026).
Los trabajos guardados en el navegador con la 1.9 y los archivos de trabajo `.json` de la 1.9 abren sin cambios en la 2.0 (probado: mismos totales).

## Errores corregidos

| # | Dónde | Qué pasaba | Arreglo |
|---|---|---|---|
| 1 | Job info › Your company | Los campos de la empresa no tenían quien los escuchara: **nunca se guardaban** y todos los PDF salían con "YOUR COMPANY NAME". | Se guardan al escribir. |
| 2 | Medidas | `ftin` no redondeaba: 35.97" salía `2'-11 15/16"` en vez de `3'-0"`. | Redondeo al 1/16 antes de escribir pies y pulgadas. |
| 3 | Código de tamaño Curries | Un ancho fraccionario (35.6") daba códigos como `212` (2 pies 12 pulgadas). | Pulgadas enteras primero. |
| 4 | Dibujo | Con bisagra continua la elevación generaba `NaN` en el SVG (errores en consola). | Protegido; además las bisagras usan su largo real (4-1/2 o 5"). |
| 5 | Precios | Marco, puerta o herraje se cobraban aunque el alcance fuera NIC, por otros, existente o retiro. | No se cobra lo que no se suministra. |
| 6 | Totales | El impuesto sólo estaba en la cotización: el resumen, la hoja de takeoff, el Excel y el bid recap daban otro total. | Un solo cálculo (`jobTotals`) para todo. |
| 7 | Totales | Las horas de taller, medición y entrega se cobraban pero no aparecían en los resúmenes (sólo instalación). | Todas las horas en todos los resúmenes. |
| 8 | Chequeos | Una abertura con un juego de herrajes borrado no avisaba nada y cotizaba $0 de herraje. | Error "Hardware set missing". |
| 9 | Marcas | Duplicar varias aberturas o la entrada rápida podían repetir marcas (p. ej. dos "102"); no había aviso. | Siempre la siguiente marca libre + aviso "Duplicate mark". |
| 10 | Importar formulario Curries | La columna "4" Face Header" ponía la **cara del marco** en 3" en lugar del cabezal de 4". | Ahora pone el cabezal de 4". |
| 11 | Lista de marcos | El total de anclajes ignoraba los parales de los sidelites. | Cuenta todos los parales. |
| 12 | Calculadora | Una puerta RH sencilla se dibujaba con bisagras a la izquierda; un par de 7' mostraba 4 bisagras por hoja; "Use these numbers" ponía el muro "DRYWALL" (no existe en la lista) y no quitaba la configuración de par. | Corregido; además pasa acero, rating, mano y fabricante. |
| 13 | Teléfono | Agregar un par 6070 desde el teléfono dejaba la hoja 2 en 0 ("Missing leaf"). | Divide el ancho entre las dos hojas. |
| 14 | Hardware | Renombrar un juego con un número ya usado mezclaba los dos juegos. | Se rechaza con aviso. |
| 15 | Hojas 11×17 | Los pares tenían bisagras en una sola hoja y la cerradura en el marco en vez de en el montante de encuentro; sidelites siempre a la izquierda; transoms divididos y borrowed lites no se dibujaban; dibujos pequeños en una esquina. | Reescrito desde el layout del plan de taller; escala y grilla automáticas. |
| 16 | Hoja de soldadura | Pares sin bisagras en la segunda hoja; marcadas con 4-1/2" aunque la bisagra fuera de 5"; strike dibujado en pares y en aberturas sin cerradura. | Bisagras en las dos jambas del par, largo real, strike sólo en puertas sencillas con cerradura. |
| 17 | Plano | Los pines del conteo se perdían al recargar y no seguían al deshacer. | Se guardan en cada línea y se dibujan desde ahí. |
| 18 | Excel › Order sheet | La columna de keying del juego salía vacía (campo inexistente). | Resume el keying de los ítems. |
| 19 | Interfaz | Los filtros de la barra de aberturas se cortaban ("W…"); las pestañas del panel se cortaban ("Commen…"); las cajas de juegos de herrajes y las del teléfono no tenían el estilo de los campos. | Se acomodan en dos líneas, las pestañas desplazan, todos los campos con el mismo estilo. |
| 20 | Pasos | Los encabezados "Step 1… Step 7" no coincidían con el menú. | Reemplazados por la sección. |

## Nuevo

- **Specialties (Div 10)** — página por sección CSI con lista inicial (particiones, accesorios, extintores y gabinetes, lockers, señalización, protección de muros, pizarras, buzones, estanterías, astas); cantidad, unidad (EA, LF, SF…), lista, costo, horas y margen de Div 10. En cotización, resumen, hoja de takeoff, Excel, catálogo, órdenes de compra y órdenes de cambio.
- **Keying** — sistema, keysets jerárquicos, keyset por abertura (también en el panel y en edición masiva), cilindros contados de los juegos, asignación automática, PDF y CSV, en el submittal y en el Excel; aviso "No keyset".
- **Price book** — multiplicadores por fabricante, columna LIST en los juegos, importación de listas Excel/CSV, productos de la lista en el selector de cada juego y de Div 10, "Reprice this job".
- **Change orders** — bases de precio guardadas en el archivo, comparación línea por línea, PDF de orden de cambio con firma.
- **Purchasing** — órdenes de compra por proveedor con asignación fabricante → distribuidor, PDF por proveedor o todas, CSV.
- **Plans** — herramientas Openings / Division 10 / Measure, escala del dibujo o calibración en dos clics, zoom, leyenda de conteos por página, "Remove last".
- **Dibujos** — botón para ver cualquier dibujo a pantalla completa y guardarlo como SVG; marca de giro en la elevación.
- **Menú** reorganizado: Set up · Take off Div 08 · Take off Div 10 · Review · Send · Help.
- **Pruebas** — `tests/e2e.mjs` recorre todas las páginas, todas las exportaciones (valida cada PDF y Excel) y los flujos principales.

## Calculadora de marcos (2.0.1)

**Errores corregidos**

| Qué pasaba | Arreglo |
|---|---|
| La hoja neta ignoraba la holgura de 1/8" bajo el cabezal (6'-11 1/4" en vez de 6'-11 1/8"). | Alto neto = nominal − 1/8 − undercut. |
| En pares el ancho neto no restaba el 1/8" del encuentro (no coincidía con el plan de taller). | (nominal − 3/8) / 2. |
| El "máximo a cortar" estaba 1/8" corrido y no usaba el largo real de la bisagra. | Desde la bisagra inferior de la puerta, con su largo real. |
| Elevación: bisagras de tamaño fijo, no a escala; la cerradura y su texto encima del borde de la hoja; letras sobre el muro; el rectángulo del vano encima del marco; el "UC" sobre la línea de piso; en pares no se dibujaba la cerradura. | Elevación reescrita a escala desde el mismo layout del plan de taller. |
| Al escribir, cada tecla redibujaba los campos y reformateaba el texto ("3-0" se volvía 3"). | El campo no se toca mientras se escribe; se formatea al salir. |
| "Chart in full" mezclaba pies-pulgadas con pulgadas y la fila de bisagras mezclaba columnas. | Pulgadas en todo el cuadro; fila del alto actual resaltada. |

**Nuevo**

- La calculadora arma una abertura real, así que usa los mismos cálculos que el resto de la app (derive, ubicaciones de herrajes, chequeos).
- Configuraciones: sencilla, par, con sidelite (uno o dos), con transom y combinadas. Perfil, espesor de muro (chequea la garganta), tamaño de bisagra y grados de apertura.
- Cinco vistas: **Elevación** acotada (vano medido vs. el que pide el marco, solape de la cara en cada jamba), **Planta y giro** (muro, jambas en corte, arco de la hoja según mano y grados, ancho libre con aviso bajo 32"), **Corte de jamba**, **Ubicación de bisagras**, **Marco y anclajes**. Botón para verla en grande.
- Franja de resultados con colores (vano, marco, hoja neta, ancho libre, solape de cara).
- Líneas de pedido Curries con botón Copiar; **Copiar los números** para un correo o mensaje; **Plan de taller PDF**; **Nueva abertura** con estos números; cargar y aplicar a la abertura seleccionada pasan todos los campos.

## 2.1 — lectura de planos, cristales por puerta, medidas exactas

**Errores corregidos**

| Qué pasaba | Arreglo |
|---|---|
| Todas las puertas con cristal se dibujaban igual: un rectángulo centrado a 60" del piso, aunque el diseño fuera mirilla angosta, media vista o vidrio completo. Con el diseño puesto y sin medida escrita no salía ningún cristal. | Un solo cálculo por diseño (V, N, HG, FG, G, L, FL, E, D) con la medida estándar de Curries y su ubicación, usado por la pantalla, las hojas 11×17, la hoja de taller y la calculadora. |
| El tipo de vidrio no se veía en el dibujo. | Alambrado, templado, laminado, insulado, cortafuego y policarbonato se dibujan distinto. |
| El código de vista Curries salía FLUSH en una puerta N o HG sin medida escrita. | Usa la medida estándar del diseño (FNV 6"x27", HG 24"x30", FG 24"x64", FV 12"x12"). |
| La hoja de taller daba el mismo ancho a las dos hojas de un par desigual. | Cada hoja con su medida. |
| El lector de PDF mezclaba todo el texto de la hoja (notas, rótulo, otras tablas) en columnas por posición. Los encabezados de dos filas, los comentarios en dos renglones y los pares "(2) 3'-0"" se leían mal. | Lector nuevo (ver abajo). |
| El número de hoja tomaba el primer texto con forma de hoja, a menudo una llamada de detalle (5/A-501). | Lo toma del rótulo, abajo a la derecha. |
| Al abrir un segundo PDF se podían usar los textos del archivo anterior. | Se limpian al abrir cada archivo. |

**Nuevo**

- **Leer el door schedule del PDF.** Encuentra la página y la tabla solo. Entiende encabezados de dos filas, uniendo DOOR / FRAME / DETAILS con WD, HT, THK. Junta los comentarios que siguen en otro renglón y lee los pares escritos "(2) 3'-0"".
  - Se arrastra un recuadro sobre la hoja para leer solo esa parte.
  - Las columnas se ven sobre el plano.
  - Se corrige cualquier celda con un clic y se quitan filas.
  - *Read every page like this* agrega las páginas que tienen el mismo schedule.
  - Al leerlo otra vez actualiza las aberturas existentes en lugar de duplicarlas.
  - Crea vacíos los juegos de herrajes que el schedule nombra y el trabajo no tiene.
  - Si el tipo de puerta es una letra SDI (F, N, V, HG, FG…), pone el diseño.
- **Ubicar las puertas en el plano.** *Find door tags on this sheet* pone cada puerta del schedule donde está su tag. Si un número de cuarto dice lo mismo, elige el tag de puerta. También lista los tags del plano que no están en el trabajo y permite agregarlos.
- **Flujo en 3 pasos** en Plans: leer el schedule, ubicar en los planos, contar Div 10. Flechas para cambiar de página.
- **Cristales por puerta.** Campos nuevos:
  - Cantidad de cristales apilados.
  - Distancia de la parte de arriba de la puerta al cristal.
  - Lado (centro, cerradura, bisagra) y distancia al borde.
  - Altura de la rejilla.
  - En Job info, la holgura del marco del cristal (recorte = vidrio visible + 1-1/2" por defecto).
- **Medidas exactas** (`doorSize`):
  - Puerta cortada, también en pares desiguales.
  - Ancho libre a 90°, con la puerta abierta y el tope.
  - Holgura bajo la puerta con el piso terminado o el umbral (campos nuevos).
  - Corte máximo.
  - Recorte y vidrio del cristal.
  - Se ven junto al dibujo de la abertura, en la hoja de taller y en la calculadora.
- **Chequeos nuevos:**
  - La puerta roza el piso o el umbral.
  - Holgura de más de 3/4" en puertas cortafuego (NFPA 80).
  - Ancho libre menor a 32" en puertas accesibles.
  - Umbral de más de 1/2".
  - Cristal accesible con el borde de abajo arriba de 43".
  - El cristal choca con la cerradura o deja menos de 3-1/2" de larguero.
- **Hoja de taller:**
  - Acota el cristal: desde arriba y desde el borde.
  - Da el vidrio visible, el recorte y el tipo de vidrio.
  - Muestra el ancho libre.
  - La orden de trabajo da el recorte exacto.
- **Calculadora:** diseño de la puerta, medida y tipo de vidrio, piso terminado y umbral; recomienda el undercut.
- **Pruebas:** `tests/fixtures/drawings.pdf` (un plano y un door schedule) prueba la lectura, los tags y la actualización. También hay pruebas de cristales y medidas.
