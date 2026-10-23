# Opening Takeoff 2.1

Herramienta de takeoff y cotización para **puertas, marcos y herrajes (División 08)** y **especialidades (División 10)**.
Es un solo archivo, `takeoff.html`: se abre en Chrome, Edge o Safari, no se instala nada y funciona sin internet
(sólo leer un PDF de planos baja pdf.js la primera vez).

## Qué hace

| Paso | Página | Resultado |
|---|---|---|
| Set up | Job info, Clients, **Price book** | Datos del trabajo y de la empresa, márgenes, multiplicadores por fabricante |
| Take off · Div 08 | **Plans**, Openings, Hardware, **Keying** | Door schedule leído del PDF y puertas ubicadas en el plano por su tag; aberturas dibujadas (cristal según el diseño) y verificadas; juegos de herrajes; sistema de llaves |
| Take off · Div 10 | **Specialties** | Accesorios, particiones, extintores, lockers, señalización, protección de muros |
| Review | Takeoff sheet, Recap, **Purchasing**, Shop | Cantidades, costos y márgenes; órdenes de compra por proveedor; trabajo de taller, lista de corte, etiquetas |
| Send | Quotation, Submittal, **Change orders**, Catalog | Cotización al cliente, paquete de submittal, órdenes de cambio con suma/resta, catálogo con preguntas |

En **negrita** lo nuevo de la 2.0. Detalle de la 2.0 y la 2.1 en [docs/CAMBIOS-2.0.md](docs/CAMBIOS-2.0.md); el análisis de Comsense,
PRO-TECH y Software for Hardware que motivó los cambios está en [docs/ANALISIS-COMPETENCIA.md](docs/ANALISIS-COMPETENCIA.md).

## Uso

1. Abrir `takeoff.html`. La primera vez carga un trabajo de ejemplo y la guía.
2. **File › Start a new empty job**, completar **Job info** (incluida la empresa, que imprime en todo).
3. Cargar aberturas: abrir el PDF de planos en **Plans** (lee el door schedule y ubica las puertas en el plano), entrada rápida, *Batch add*, Excel/CSV o clic en el plano.
4. Juegos de herrajes en **Hardware**; llaves en **Keying**; Div 10 en **Specialties**.
5. Todo se exporta desde **Export** (arriba a la derecha): PDF, Excel y CSV.

El trabajo se guarda solo en el navegador; **File › Save job file** guarda un `.json` para la carpeta compartida.
Los trabajos y archivos de la versión 1.9 abren sin cambios.

Texto para presentar el programa en Reddit: [docs/REDDIT-r-Estimators.md](docs/REDDIT-r-Estimators.md).

## Pruebas

```bash
npm install          # playwright y pdfjs-dist, sólo para las pruebas
npm test             # recorre todas las páginas y exportaciones en Chromium sin ventana
```

`tests/e2e.mjs` valida cada PDF y Excel que exporta la app, los totales, la entrada rápida, los chequeos,
keying, Div 10, lista de precios, órdenes de cambio, compras, el conteo y la medición sobre un PDF, la recarga y el teléfono.

---
Desarrollado por Orelio Martinez Chow. Versión de desarrollo interna — no publicada.
