# Análisis de la competencia: Comsense, PRO-TECH y Software for Hardware

Fecha: octubre 2026 · Aplica a: Opening Takeoff 2.0 (`takeoff.html`)

Los tres son los paquetes que usan los distribuidores de puertas, marcos y herrajes (División 08) en EE. UU. y Canadá. Todos cubren también lo que el distribuidor vende de División 10 (accesorios de baño, gabinetes de extintores, lockers, señalización) como líneas de catálogo. Esta nota resume qué hace cada uno, en qué es mejor, y qué se tomó de ellos para la versión 2.0.

> **Cómo se hizo la investigación.** Las páginas de los fabricantes (advantive.com, pro-techsoftware.com, softwareforhardware.com) y el foro commdoor.com no se pudieron abrir directamente desde este entorno (bloqueo de DNS del proxy). Lo que sigue sale de los resultados de búsqueda que resumen esas páginas, de directorios de software y de comentarios de usuarios. Son afirmaciones de marketing de cada proveedor, no pruebas propias. Las fuentes están al final.

---

## 1. Comsense (Advantive)

**Qué es.** Un ERP completo para distribuidores de aberturas arquitectónicas: estimación, detallado, compras, inventario y contabilidad en un solo sistema. Fundado en 1989, comprado por Advantive en septiembre de 2024. Incluye *Comsense Spec Writer* para escribir especificaciones de herrajes.

**Funciones principales**
- Más de **120 listas de precios electrónicas** de fabricantes ("90 % o más de precisión de precios cuando los catálogos se mantienen").
- **Importar** los schedules de puertas y los juegos de herrajes del arquitecto.
- **Estimación por lotes** de proyectos.
- **Heading builder**: arma los encabezados a partir de atributos (juego de herrajes, puerta, marco, datos de la abertura).
- **Default prep**: aplica preparaciones repetitivas a puertas y marcos de una sola vez; coordina las preparaciones de puerta, marco y herraje **incluso a través de órdenes de cambio**.
- **Elevaciones de marco** dibujadas que generan una **lista de materiales con costo**.
- Órdenes de compra desde el mismo sistema.

**En qué es mejor**
- Profundidad: es el único de los tres que es un ERP de punta a punta (inventario, contabilidad).
- Coordinación de preparaciones entre puerta, marco y herraje a lo largo de las revisiones.
- Volumen de listas de precios.

**Debilidades mencionadas**
- Curva de aprendizaje alta; un usuario comenta que algunos todavía hacen las preparaciones en papel porque cargarlas es lento.
- Pocas reseñas públicas (Capterra: 2 reseñas, 2.0/5).

## 2. PRO-TECH (ASSA ABLOY / EDSS)

**Qué es.** Software para distribuidores de puertas y herrajes de ASSA ABLOY. Se ofrece instalado o en la nube como **PRO-TECH V8**, o sólo en la nube como **PRO-TECH TITAN**.

**Funciones principales**
- Genera **estimaciones y schedules** de puertas, marcos y herrajes; *door schedule creator* para cualquier cantidad de puertas.
- **Juegos de herrajes** estandarizados que se asignan a las aberturas de todo el proyecto.
- **Keying**: reportes de llaves e índice de keying dentro del paquete de submittal.
- **Listas de precios** del fabricante y propias; TITAN agrega listas en tiempo real con datos de producto, precios de lista e imágenes.
- **Elevaciones**: V8 tiene dibujo automático ("Elevation Power") con precio exacto; TITAN usa APOGEE, con renders 3D a partir de cientos de plantillas.
- Reportes de schedules, keying y costo de material; integraciones contables.

**En qué es mejor**
- Herramienta de elevaciones (dibujo automático y plantillas).
- Integración natural con productos ASSA ABLOY.
- Más económico que los otros dos según comentarios de usuarios.

**Debilidades mencionadas**
- "Un poco torpe" según un usuario del foro; pensado sobre todo para distribuidores ASSA ABLOY.

## 3. Software for Hardware (SFH, unidad de Univerus)

**Qué es.** Software de estimación y gestión de proyectos para distribuidores de puertas, marcos y herrajes de EE. UU. y Canadá. Univerus lo compró en octubre de 2023.

**Funciones principales**
- **Una sola carga de datos** produce cotizaciones, schedules de herrajes, schedules de keying y de división, y paquetes de submittal.
- **Herramienta de elevaciones** de puertas y marcos sin necesidad de CAD, para cotizar, someter y fabricar.
- Listas de precios integradas: más de 100 de herrajes, 9 de accesorios y 10 de metal hueco.
- Seguimiento de proyectos complejos, para contratos y para mostrador.
- Integraciones: **SAP Business One** (2024) y **Allegion Overtur** (los datos de diseño de Overtur se exportan a SFH sin volver a escribirlos).

**En qué es mejor**
- "Entrar una vez": todo el paquete de documentos sale de la misma captura.
- Integración con Overtur (especificación de Allegion) y con un ERP.
- Listas de accesorios (División 10) además de herrajes y metal hueco.

---

## 4. Comparación con Opening Takeoff

| Función | Comsense | PRO-TECH | SFH | Takeoff 1.9 | **Takeoff 2.0** |
|---|---|---|---|---|---|
| Captura de aberturas con chequeos de norma (NFPA 80, SDI, ANSI) | — | — | — | ✔ | ✔ |
| Elevaciones dibujadas | ✔ | ✔✔ | ✔ | ✔ | ✔✔ (pares, sidelites, transoms, borrowed lites, marca de giro, escala automática, vista ampliada, SVG) |
| Juegos de herrajes y schedule DHI | ✔ | ✔ | ✔ | ✔ | ✔ |
| **Keying / schedule de llaves** | ✔ | ✔ | ✔ | ✗ | **✔ nuevo** |
| **Listas de precios con multiplicador** | ✔✔ | ✔ | ✔ | ✗ | **✔ nuevo** (multiplicadores e importación de listas) |
| **División 10** (accesorios, extintores, lockers, señalización, protección de muros) | catálogo | catálogo | ✔ (listas de accesorios) | ✗ | **✔ nuevo** |
| **Órdenes de cambio con suma/resta contra una base** | ✔ (preps entre COs) | — | ✔ | ✗ | **✔ nuevo** |
| **Órdenes de compra por proveedor** | ✔ | — | ✔ | ✗ | **✔ nuevo** |
| Importar schedule del arquitecto (PDF/Excel/CSV) | ✔ | — | ✔ (Overtur) | ✔ | ✔ |
| **Conteo y medición sobre el plano** | — | — | — | conteo básico | **✔ conteo de aberturas y Div 10, escala, calibración, medición en LF** |
| Submittal en un PDF | ✔ | ✔ | ✔ | ✔ | ✔ (+ keying) |
| Líneas de pedido Curries, plan de taller, lista de corte, etiquetas | — | — | — | ✔ | ✔ |
| Inventario y contabilidad (ERP) | ✔ | ✔ | vía SAP | ✗ | ✗ (fuera de alcance) |
| Multiusuario / nube | ✔ | ✔ (TITAN) | ✔ | ✗ | ✗ (archivo único) |
| Instalación | servidor | instalado o nube | instalado/nube | ninguna | ninguna |

**Ventajas propias de Opening Takeoff** que ninguno de los tres anuncia: chequeos de conflicto en vivo (NFPA 80, SDI, anclajes vs. muro, garganta vs. muro), líneas de pedido Curries generadas, plan de taller por abertura con cadena de bisagras, lista de corte de marcos, registro de etiquetas UL/WHI, cotización en lenguaje claro para el cliente, funciona sin internet en un solo archivo, y en el teléfono.

## 5. Qué se agregó en la 2.0 a partir de este análisis

1. **Keying** (los tres): sistema de llaves, keysets en jerarquía GMK › MK › llave de cambio, cilindros contados desde los juegos de herrajes, llaves por keyset, asignación automática por nivel o por juego, schedule en PDF/CSV con bloque de aprobación del dueño, incluido en el submittal y en el Excel.
2. **Listas de precios** (Comsense/SFH): multiplicador por fabricante, precio de lista en cada herraje y línea de Div 10, costo = lista × multiplicador, importar listas de Excel/CSV, elegir productos de la lista en cualquier juego, recotizar el trabajo en un clic.
3. **División 10** (SFH y lo que pide el usuario): página de especialidades por sección CSI con lista inicial, mano de obra y margen propios, en la cotización, el resumen, el Excel, el catálogo y las órdenes de compra; se puede contar y medir sobre el plano.
4. **Órdenes de cambio** (Comsense/SFH): base de precios guardada, comparación línea por línea (agregado, cambiado, eliminado), PDF de orden de cambio con contrato original, neto y contrato revisado.
5. **Compras** (Comsense/SFH): una orden de compra por proveedor, con asignación fabricante → distribuidor.
6. **Planos** (PRO-TECH/SFH dibujan; nadie mide): las hojas 11×17 se dibujan desde el mismo layout que el plan de taller y eligen escala y grilla para llenar la hoja; conteo y medición sobre el PDF.

## 6. Lo que queda para después (hoja de ruta)

- **Nube y multiusuario** (TITAN, SFH): requiere un servidor; hoy es un archivo por trabajo.
- **Listas de precios de fabricantes en vivo** (TITAN): hoy se importan de Excel/CSV.
- **Importación desde Allegion Overtur / ASSA ABLOY Openings Studio** (SFH): leer su exportación como un schedule más.
- **Elevaciones 3D o con plantillas** (TITAN/APOGEE).
- **Hojas técnicas del fabricante** dentro del submittal (ya estaba pendiente en la 1.7).
- **Inventario y contabilidad** (Comsense): fuera del alcance de una herramienta de cotización.

## Fuentes

- [Comsense: Intelligent ERP software for architectural openings — Advantive](https://www.advantive.com/products/comsense/)
- [Comsense: Software for Architectural Opening Distribution — Advantive](https://www.advantive.com/?p=5575)
- [Comsense Enterprise Software Features — comsenseinc.com](https://www.comsenseinc.com/comsense-enterprise-feature-list/)
- [Comsense Enterprise — comsenseinc.com](https://www.comsenseinc.com/products/enterprise/)
- [Comsense by Advantive — SoftwareOne](https://platform.softwareone.com/product/comsense/PCP-2356-2904)
- [Comsense Enterprise Reviews — Capterra](https://www.capterra.ae/software/180972/comsense-enterprise)
- [Comsense — CB Insights](https://www.cbinsights.com/company/comsense)
- [SDC Products Available on Comsense](https://www.sdcsecurity.com/comsense)
- [PRO-TECH: Software for Door and Hardware Distributors](https://www.pro-techsoftware.com/en)
- [PRO-TECH: products](https://www.pro-techsoftware.com/en/products) · [PRO-TECH V8](https://www.pro-techsoftware.com/en/products/version-8) · [PRO-TECH TITAN](https://www.pro-techsoftware.com/en/products/pro-tech-titan) · [Features](https://www.pro-techsoftware.com/en/features)
- [EDSS — Curries customer resources](https://www.curries.com/en/customer-resources/edss)
- [Software for Hardware](https://www.softwareforhardware.com/) · [Solutions overview](https://www.softwareforhardware.com/solutions-overview)
- [Door Project Management Software — Univerus](https://www.univerus.com/software-for-hardware)
- [Software for Hardware and Blue Ocean Systems announce SAP Business One integration](https://markets.financialcontent.com/ms.intelvalue/article/getnews-2024-11-11-software-for-hardware-and-blue-ocean-systems-announce-sap-business-one-integration)
- [Allegion announces Overtur integration with Software for Hardware](https://internationalsecurityjournal.com/?p=34630)
- [Univerus comparison — Slashdot](https://slashdot.org/software/comparison/SimplyDepo-vs-Univerus/)
- Foro CommDoor: [Best software to use?](https://www.commdoor.com/index.php/forum/comsense-estimating-detailing-software/66-best-software-to-use) · [About PRO-TECH](https://www.commdoor.com/index.php/forum/pro-tech-estimating-detailing-software/54-about-pro-tech) · [Comsense Estimating](https://www.commdoor.com/index.php/forum/comsense-estimating-detailing-software/31-comsense-estimating)
