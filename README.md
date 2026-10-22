# Portfolio — Nicolás Boscasso

Portfolio personal desarrollado con **React + Vite**.

🔗 **Live:** [nicolas-boscasso.vercel.app](https://nicolas-boscasso.vercel.app/) · 💼 [LinkedIn](https://www.linkedin.com/in/nicolas-boscasso/) · 📧 [nicolasboscasso@gmail.com](mailto:nicolasboscasso@gmail.com)

## Stack

- **React 18** + **Vite**
- **Sass**, con los colores y las fuentes como variables CSS en `src/index.scss`
- Fuentes de Google Fonts: Anta, Instrument Sans, Geist Mono y Caveat
- **Vercel Analytics**
- Tests con `node:test`, sin dependencias extra

## Características

- Diseño oscuro y responsive, desde 360 px de ancho
- Bilingüe ES / EN con `Context API`: el idioma sale de `?lang=`, de `localStorage` o del navegador
- Hora local de Córdoba en la barra y en el footer
- Línea de tiempo de estudios con eje fijo (`timelineRange` en `educationData.js`)
- Versiones anteriores del portfolio accesibles desde el footer

## Dónde está el contenido

| Sección | Archivo |
| --- | --- |
| Textos de la interfaz | `src/context/translations.js` |
| Mail, redes y CV | `src/data/contactData.js` |
| Trabajo | `src/components/pages/work/workData.js` |
| Proyectos | `src/components/pages/projects/projectsData.js` |
| Estudios | `src/components/pages/education/educationData.js` |
| Versiones | `src/components/layout/footer/versionsData.js` |

En las descripciones, `**texto**` se muestra destacado.

Los proyectos van **del más nuevo al más viejo**: agregá los nuevos arriba de todo en `projectsData.js`. La sección muestra 4 por página y el paginado aparece solo cuando hay más de 4.

## Instalación

```bash
git clone https://github.com/nicob201/portfolio.git
cd portfolio
npm install
npm run dev
```

Abrir [http://localhost:5173](http://localhost:5173).

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run preview` | Preview del build |
| `npm run lint` | ESLint |
| `npm test` | Tests (`node --test`) |

## Versiones

La versión actual se sirve en `/`. Las anteriores quedan congeladas como builds estáticos en `public/<versión>/`, y su código está en el tag de git del mismo nombre.

Para archivar la versión actual antes de publicar una nueva (ejemplo con v2):

```bash
git tag v2 && git push origin v2
git worktree add ../portfolio-v2 v2
cd ../portfolio-v2 && npm install && npx vite build --base=/v2/ --outDir ../portfolio/public/v2
```

Después:
- agregar `/v2` y `/v2/` en `vercel.json`, antes de la regla general
- sumar la entrada a `versionsData.js`
- ignorar `public/v2` en `eslint.config.js`

## Deploy

Desplegado en **Vercel**: https://nicolas-boscasso.vercel.app/
