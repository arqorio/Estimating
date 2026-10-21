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
