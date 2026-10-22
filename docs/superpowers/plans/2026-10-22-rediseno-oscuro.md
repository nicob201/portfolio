# Rediseño oscuro (v2) — plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reemplazar la UI del portfolio por el diseño V2 aprobado, oscuro, bilingüe y responsive, manteniendo la v1 en `/v1/`.

**Architecture:**
- Misma app React + Vite. Se reescriben los componentes de `components/layout` y `components/pages`, uno por sección, con su `.scss` al lado.
- El contenido vive en archivos `*Data.js` con textos `{ en, es }`, y las cadenas de la interfaz en `context/translations.js`.
- La lógica no trivial (posiciones del Gantt, fechas, negritas en los textos) va en módulos JS puros con tests `node:test`.

**Tech Stack:** React 18, Vite 5, Sass, @vercel/analytics, `node --test` (sin dependencias nuevas).

**Spec:** `docs/superpowers/specs/2026-10-22-rediseno-oscuro-design.md`

## Global Constraints

- Colores, solo como variables CSS: `--bg #160C28`, `--bg-raised #1A1030`, `--bg-deep #0B0618`, `--ink #E1EFE6`, `--ink-soft #C5CCCB`, `--muted #AEB7B3`, `--line #2E2247`, `--line-strong #4A3B66`, `--line-button #3A2E55`, `--gold #EFCB68`, `--hatch rgba(239,203,104,.2)`.
- Fuentes: Anta (display), Instrument Sans 400/500/600 (texto), Geist Mono 400/500/600 (etiquetas), Caveat 600 (una sola nota).
- Contenedor de 1200 px de ancho máximo con `padding-inline: clamp(16px, 4vw, 48px)`. Sin scroll horizontal desde 360 px.
- Foco con contorno dorado de 2 px y zonas táctiles de al menos 44 px. Las animaciones se apagan con `prefers-reduced-motion: reduce`.
- No se agregan dependencias. Se eliminan `bootstrap`, `emailjs-com`, `react-google-recaptcha` y `react-icons`.
- `npm run lint`, `npm test` y `npm run build` tienen que pasar limpios al final de cada tarea.

## Review Focus

1. **Mobile a 360–390 px:** el nombre gigante, "HABLEMOS.", el mail grande y la etiqueta de la foto no pueden desbordar. Se verifica con capturas en la tarea 6.
2. **Copiar sin permiso de portapapeles** (contexto sin https, navegador que lo niega): el botón tiene que mostrar el error, no quedarse colgado. Lo cubre `useCopyToClipboard`, que atrapa el rechazo (tarea 1).
3. **"Hoy" fuera del eje** (fecha posterior a 2026): no se dibuja. Test en la tarea 4.
4. **Cambio de idioma:** fechas, cifras (`42.000` / `42,000`) y textos alternativos cambian juntos. Test de `formatPeriod` en la tarea 4. Las cifras usan `toLocaleString`.
5. **`/v1/` en Vercel:** la regla que manda todo a `/` no tiene que comérsela. Se verifica en el preview (tarea 6).

---

### Task 1: Base — tokens, fuentes, idioma, hooks, limpieza de dependencias

**Files:**
- Modify: `package.json` (sacar las 4 dependencias; agregar `"test": "node --test"`), `index.html` (preconnect, `<link>` de Google Fonts, `<meta name="theme-color" content="#160C28">`), `src/main.jsx` (sacar el JS de Bootstrap), `src/index.scss` (reescrito: reset, `:root` con los tokens, `body`, `a`, `:focus-visible`, `.wrap`, scroll suave condicionado, `[id]{scroll-margin-top:96px}`), `src/context/LanguageContext.jsx` (usar `translations.js`; exponer `setLanguage`)
- Create: `src/context/translations.js`, `src/data/contactData.js`, `src/hooks/useCordobaTime.js`, `src/hooks/useCopyToClipboard.js`, `src/utils/emphasis.js`, `src/utils/emphasis.test.js`, `src/components/common/Emphasis.jsx`
- Delete: `src/styles/_breakpoints.scss`, `src/styles/_mixins.scss`, `.env.example`

**Interfaces:**
- Produces:
  - `useLanguage(): { language: 'es'|'en', setLanguage(lang), toggleLanguage(), t }`
  - `useCordobaTime(): string` ("HH:MM" en `America/Argentina/Cordoba`, se refresca cada 15 s)
  - `useCopyToClipboard(text: string, resetMs = 2500): { status: 'idle'|'copied'|'error', copy(): Promise<void> }`
  - `splitEmphasis(text: string): Array<{ text: string, strong: boolean }>` (separa por `**`)
  - `<Emphasis text as="b"|"mark" className? />`
  - `contactData = { email, linkedin: { url, handle }, github: { url, handle }, whatsapp: { url, handle }, resumeUrl: { en, es } }`

- [ ] **Step 1: Test** en `src/utils/emphasis.test.js`:
  - `splitEmphasis('a **b** c')` es `[{text:'a ',strong:false},{text:'b',strong:true},{text:' c',strong:false}]`.
  - `splitEmphasis('sin marcas')` es `[{text:'sin marcas',strong:false}]`.
  - Los fragmentos vacíos se descartan.
- [ ] **Step 2:** `npm test`. Falla porque el módulo no existe.
- [ ] **Step 3:** implementar `splitEmphasis`, después el resto de los archivos de la tarea. `App.jsx` renderiza por ahora solo `Navbar` y `Footer` viejos, hasta que existan los nuevos. Correr `npm uninstall bootstrap emailjs-com react-google-recaptcha react-icons`.
- [ ] **Step 4:** `npm test && npm run lint && npm run build`. Los tres pasan.
- [ ] **Step 5:** commit `feat: set up v2 design tokens, fonts, i18n strings and shared hooks`.

### Task 2: Barra, Hero y la hoja de Trabajo

**Files:**
- Rewrite: `src/components/layout/navbar/Navbar.jsx`, `navbar.scss`
- Create:
  - `src/components/pages/hero/Hero.jsx`, `hero.scss`
  - `src/components/common/Sheet.jsx`, `sheet.scss`
  - `src/components/common/SectionHeader.jsx`, `section-header.scss`
  - `src/components/pages/work/Work.jsx`, `work.scss`, `workData.js`
- Delete: `src/components/pages/experience/`, `src/components/common/button/`

**Interfaces:**
- Consumes: la tarea 1.
- Produces:
  - `<Sheet as="section"|"aside" corners="all"|"diagonal" ...rest>`: dibuja las cruces y la franja rayada.
  - `<SectionHeader id title note inset? />`: `h2.section-title` + `p.section-note`. Con `inset`, el padding interno es el de la hoja.
  - `workItems: Array<{ id, when: {en,es}, whenHighlight?: {en,es}, title, url, description: {en,es}, where: {en: string[], es: string[]}, featured?: { metrics: Array<{ value: number, prefix?: string, label: {en,es} }>, gallery: Array<{ src, width, height, alt: {en,es}, caption: {en,es} }>, caseStudyUrl, challenge: {en,es} }, clients?: Array<{ label, url }> }>`

- [ ] **Step 1:** barra: `grid 1fr auto 1fr`, reloj centrado (oculto por debajo de 720 px), ES/EN con `aria-pressed` llamando a `setLanguage`, CV con `resumeUrl[language]`.
- [ ] **Step 2:** hero según el spec, con el botón copiar conectado a `useCopyToClipboard(contactData.email)` y su estado anunciado con `aria-live="polite"`.
- [ ] **Step 3:** Trabajo. DocuAuto: cifras en dorado con `value.toLocaleString(language === 'es' ? 'es-AR' : 'en-US')`, lámina de 3 imágenes, recuadro de links y `<details>`. Aster Estudio con sus clientes.
- [ ] **Step 4:** `npm run lint && npm run build` pasan. Commit `feat: add top bar, hero and work sheet`.

### Task 3: Proyectos

**Files:**
- Create: `src/components/pages/projects/Projects.jsx`, `projects.scss`, `projectsData.js`
- Delete: `src/components/pages/myProjects/`

**Interfaces:** `projectsData: Array<{ id, title: string|{en,es}, tag: {en,es}, url, image, width, height, description: {en,es} (con **negritas**), stack: string[] }>`. Las negritas se renderizan en dorado.

- [ ] **Step 1:** grilla `repeat(auto-fit, minmax(min(100%, 400px), 1fr))` sobre fondo rayado. Imágenes `aspect-ratio: 2/1; object-fit: cover; object-position: top` y `loading="lazy"`.
- [ ] **Step 2:** lint + build. Commit `feat: add projects gallery`.

### Task 4: Estudios (Gantt)

**Files:**
- Create: `src/components/pages/education/timeline.js`, `timeline.test.js`, `Education.jsx`, `education.scss`
- Modify: `src/components/pages/education/educationData.js` (forma nueva)
- Delete: `EducationContainer.jsx`

**Interfaces:**
- `timelineRange = { from: 2021, to: 2026 }` (exportado desde `educationData.js`)
- `educationItems: Array<{ id, title: string|{en,es}, school, start: 'YYYY-MM', end: 'YYYY-MM', link, linkKind: 'certificate'|'degree', featured?: boolean }>`
- `barPosition(start, end, range): { left: number, width: number }`, en %. El ancho es de al menos un mes, inclusive.
- `todayPosition(range, date = new Date()): number | null`
- `formatPeriod(start, end, language): string`, con abreviaturas propias (es: Ene … Dic; en: Jan … Dec).

- [ ] **Step 1: Tests** en `timeline.test.js`, con `range = {from:2021,to:2026}`:
  - `barPosition('2021-06','2021-09',range)` da `left≈6.944`, `width≈5.556`.
  - `barPosition('2024-08','2026-09',range)` da `left≈59.722`, `width≈36.111`.
  - `todayPosition(range, new Date(2026,9,22))` está entre 96.5 y 97.
  - `todayPosition(range, new Date(2027,1,1))` es `null`.
  - `formatPeriod('2021-06','2021-09','es')` es `'Jun–Sep 2021'`.
  - `formatPeriod('2023-12','2024-03','es')` es `'Dic 2023–Mar 2024'`.
  - `formatPeriod('2024-01','2024-01','en')` es `'Jan 2024'`.
- [ ] **Step 2:** `npm test`. Falla.
- [ ] **Step 3:** implementar `timeline.js`, los datos (las 9 entradas del spec) y `Education.jsx`:
  - escala de años generada desde el `range`
  - barra o rombo según `start === end`
  - la marca "Hoy" solo si `todayPosition` no es `null`
- [ ] **Step 4:** `npm test && npm run lint && npm run build`. Commit `feat: add education gantt timeline`.

### Task 5: Sobre mí, Encontrame y Footer con versiones

**Files:**
- Rewrite: `src/components/pages/about/About.jsx`, `about.scss`, `src/components/layout/footer/Footer.jsx`, `footer.scss`
- Create: `src/components/pages/contact/Contact.jsx`, `src/components/layout/footer/versionsData.js`
- Rewrite: `src/components/pages/contact/contact.scss`
- Delete: `src/components/pages/contact/ContactContainer.jsx`, `src/components/pages/skills/`
- Modify: `src/App.jsx` (orden final: Navbar, `<main>` con Hero, Work, Projects, Education, About, Contact; después Footer y Analytics)

**Interfaces:** `versions: Array<{ id: 'v1'|'v2', year: number, href?: string, current?: boolean }>`, con v1 2024 `'/v1/'` y v2 2026 actual.

- [ ] **Step 1:** About:
  - frase con `<Emphasis as="mark">`
  - nota en Caveat
  - placeholder punteado
  - `<Sheet as="aside" corners="diagonal">` con un `<dl>` de 5 datos
- [ ] **Step 2:** Contact: filas `.social-row` con barrido `::before scaleX` y el recuadro del mail con un botón Copiar que se rellena cuando `status === 'copied'`.
- [ ] **Step 3:** Footer:
  - "HABLEMOS." en `clamp(48px, 14vw, 210px)` con la silueta SVG encima (`preserveAspectRatio="none"`, alto `clamp(70px, 9vw, 140px)`, `aria-hidden`)
  - lista de versiones
  - fila final con ©, reloj y "Volver arriba ↑"
- [ ] **Step 4:** lint + build. Commit `feat: add about, contact and versioned footer`.

### Task 6: Verificación, docs y publicación

**Files:** Modify `README.md` (stack nuevo, versiones, sin EmailJS).

- [ ] **Step 1:** `npm run build && npx vite preview --port 4173`. Capturas con Chrome headless a 1440 y 390 px de ancho. Revisarlas contra la maqueta y que no haya desbordes. Corregir lo que aparezca.
- [ ] **Step 2:** comprobar `http://localhost:4173/v1/`: carga la v1 con sus estilos.
- [ ] **Step 3:** actualizar el README. Commit `docs: update README for v2`.
- [ ] **Step 4:** `git push -u origin rediseno-oscuro`, abrir el PR y revisar en el preview de Vercel tanto `/` como `/v1/`.
