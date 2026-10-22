# Rediseño oscuro del portfolio (v2)

Fecha: 2026-10-22 · Rama: `rediseno-oscuro` · Maqueta aprobada: artboard **"Versión 2 — más georgi"** del canvas https://claude.ai/artifact/Ub5NCi9bRE4VxSy8YEHTRS

## Intención

El portfolio actual (v1) alterna secciones claras y oscuras, usa Bootstrap y cada sección se ve igual a la anterior. La v2 toma como inspiración la estructura editorial de georgi5.com (hojas técnicas, reloj local, redes gigantes, cierre sobre el horizonte) y la combina con la identidad de Nicolás: el violeta `#160C28`, el dorado `#EFCB68` y la tipografía Anta. El objetivo es que un reclutador o un cliente vea en segundos que Nicolás construye productos reales (DocuAuto) y lo contacte.

## Objetivos

- En desktop la página se ve como la maqueta V2, incluidos los ajustes posteriores: métricas en dorado, proyectos alineados con imágenes 2:1.
- Cada sección tiene un formato propio: hoja técnica, galería, Gantt, frase grande, filas de redes.
- Es responsive y se usa bien desde 360 px de ancho, sin scroll horizontal.
- Es bilingüe ES/EN, con la misma lógica de idioma que hoy: `?lang=` primero, después `localStorage` y por último el idioma del navegador.
- El footer lista las versiones del portfolio y la v1 se puede abrir en `/v1/`.
- Mantiene la calidad del código: componentes chicos, datos separados de la vista, sin dependencias muertas y `npm run lint` y `npm run build` limpios.

## Fuera de alcance

- El cursor propio, el intro de "hola" en varios idiomas y la tarjeta que viaja con el scroll de georgi5.
- El formulario de contacto (EmailJS + reCAPTCHA). El contacto pasa a ser el mail con botón de copiar más las redes.
- La sección Skills: el stack se muestra dentro de cada trabajo y proyecto.
- Un modo claro: la página es oscura.

## Lo que haría fracasar el rediseño

- Copiar los elementos que son identidad de georgi (el sol, su intro, sus notas manuscritas con flechas). Solo hay una nota manuscrita y es de Nicolás.
- Que en mobile algo se corte, desborde o quede ilegible.
- Romper la v1: tiene que seguir andando en `/v1/`, incluido su formulario.

## Restricciones

- Stack: React 18 + Vite + Sass, como hoy. `@vercel/analytics` se mantiene.
- Deploy en Vercel, con un solo proyecto y una sola URL. La v1 se sirve como estático desde `public/v1/` (compilada con `vite build --base=/v1/` desde el tag `v1`), con rewrites explícitos en `vercel.json`.
- `main` no se toca hasta que Nicolás apruebe el preview.

## Decisiones tomadas

### Tokens

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#160C28` | fondo |
| `--bg-raised` | `#1A1030` | marco de la foto |
| `--bg-deep` | `#0B0618` | silueta y footer |
| `--ink` | `#E1EFE6` | texto principal |
| `--ink-soft` | `#C5CCCB` | bajadas, links sutiles |
| `--muted` | `#AEB7B3` | texto secundario, etiquetas |
| `--line` | `#2E2247` | divisores |
| `--line-strong` | `#4A3B66` | bordes de hojas y láminas |
| `--line-button` | `#3A2E55` | borde de botón secundario y pastilla |
| `--gold` | `#EFCB68` | acento, métricas, cruces, foco |
| `--hatch` | `rgba(239,203,104,.2)` | rayado diagonal |

Fuentes (Google Fonts, cargadas con `<link>` y `preconnect`):
- **Anta**: nombre, títulos, cifras y nombres de redes.
- **Instrument Sans** (400/500/600): texto.
- **Geist Mono** (400/500/600): etiquetas, fechas, botones, metadatos.
- **Caveat** (600): solo la nota "desde Córdoba, Argentina".

### Secciones (en orden)

1. **Barra fija:** nombre · punto dorado + "Córdoba, HH:MM" (hora real de `America/Argentina/Cordoba`, centrada; se oculta por debajo de 720 px) · "Escribime" · selector ES / EN (dos botones con `aria-pressed`) · botón "CV" dorado.
2. **Hero:**
   - Izquierda: foto en un marco con esquinas doradas arriba-izquierda y abajo-derecha, y la etiqueta "Disponible para trabajo remoto y freelance".
   - Derecha, en este orden: la línea "Ingeniería & producto digital / Córdoba" en mono mayúscula, el nombre "Nicolás Boscasso" en Anta mayúscula, la bajada "Desarrollador full-stack. Hago el producto entero, de la base de datos al deploy.", los botones "Escribime un correo ↗" (mailto) y "Copiar mail" (copia de verdad y avisa con `aria-live`), y una línea de links: LinkedIn ↗ • GitHub ↗ • Ver proyectos ↓.
3. **Trabajo:** hoja técnica con cruces en las 4 esquinas, franja rayada, encabezado con título gigante y nota, y filas `cuándo | qué | dónde`.
   - **DocuAuto** es la fila destacada:
     - título enorme
     - descripción
     - tabla de 5 cifras en dorado (~42.000 líneas, 48 rutas, 31 migraciones, 27 RLS, 808 tests)
     - lámina rayada con 3 capturas y su leyenda (Landing, Reportes de gastos, Historial de mantenimiento)
     - recuadro "docuauto.com | Caso de estudio"
     - desplegable `<details>` con "El problema más difícil"
   - **Aster Estudio:** fila normal con clientes linkeados.
4. **Proyectos:** galería de 2×2 alineada sobre fondo rayado, con imágenes 2:1 cortadas desde arriba. Cada tarjeta lleva etiqueta dorada, título ↗, descripción (las cifras en dorado) y stack en mono.
5. **Estudios:** Gantt con eje **fijo** 2021–2026, escrito en los datos.
   - Las barras se posicionan por mes de inicio y de fin. Los estudios de un solo mes se marcan con un rombo.
   - La Tecnicatura va destacada (título en Anta y barra más gruesa).
   - La marca "Hoy" se calcula con la fecha actual y solo se muestra si cae dentro del eje.
   - Cuando Nicolás agregue un estudio, extiende el eje a mano.
6. **Sobre mí:** frase grande en Anta con resaltador dorado en dos fragmentos, nota manuscrita "desde Córdoba, Argentina", un párrafo y un recuadro punteado como placeholder para el texto personal (lo escribe Nicolás). Al costado, una hoja chica con datos: Base, Huso, Idiomas, Modalidad y Stack.
7. **Encontrame:** filas de redes con el nombre gigante en Anta, usuario en mono y ↗. Al pasar el mouse se pintan de dorado de izquierda a derecha. Debajo, el recuadro con el mail y el botón "Copiar", que se rellena de dorado al copiar.
8. **Footer:**
   - "HABLEMOS." gigante (mailto), hundido detrás de la silueta de las sierras de Córdoba (relleno `--bg-deep` con borde dorado).
   - Lista de versiones: v1 → `/v1/`, v2 marcada como actual.
   - © 2026, la hora de Córdoba y "Volver arriba ↑".

### Comportamiento

- Hover y foco: links dorados, `:focus-visible` con un contorno dorado de 2 px y zonas táctiles de al menos 44 px.
- Animación: solo los barridos de las redes y del botón Copiar, que respetan `prefers-reduced-motion`.
- El scroll suave a las anclas solo se activa sin `reduced-motion`. Las anclas tienen `scroll-margin-top` para no quedar debajo de la barra.

### Datos

- Todo el contenido vive en archivos `*Data.js`, con los textos en `{ en, es }` como hoy.
- Las cadenas de la interfaz están en un archivo de traducciones.
- La hora y el copiado se resuelven en dos hooks compartidos.

## Lo que queda en manos del que construye

- La estructura de carpetas y los nombres de los componentes, siguiendo el patrón actual de `components/layout` y `components/pages`.
- Los textos en inglés de las cadenas nuevas.
- Los detalles responsive por debajo de 900 px, siempre que no haya desbordes y se mantenga la jerarquía.
- Qué dependencias se borran: Bootstrap, EmailJS, reCAPTCHA y react-icons dejan de usarse.

## Decisiones menores tomadas por el constructor

- Las imágenes salen de las URLs de Cloudinary que ya están en los datos, con `f_auto,q_auto` y un ancho acorde. La foto del hero es la misma de hoy, recortada a 4:5 con `g_face`.
- "Ver proyectos ↓" apunta a `#trabajo`, como en la maqueta.
- El footer muestra la v1 como "2024", el año del primer commit, y la v2 como "2026".
- Los `<title>` y las meta de `index.html` se mantienen. Solo se agregan las fuentes y el `theme-color`.

## Pendiente de Nicolás antes de mergear

- Revisar el preview de Vercel, incluido `/v1/`. (El texto de "Sobre mí" y las fechas de Aster Estudio ya están confirmados.)
