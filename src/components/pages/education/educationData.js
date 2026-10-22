// Education. The Gantt axis is fixed on purpose: when a new course goes past it,
// extend timelineRange by hand so the existing bars never shift on their own.
export const timelineRange = { from: 2021, to: 2026 };

const CERTIFICATES = "https://res.cloudinary.com/dl73hi4ir/image/upload";

// Chronological order. start/end are "YYYY-MM"; same month = a single point.
const educationItems = [
  {
    id: "web-development",
    title: { en: "Web Development", es: "Desarrollo Web" },
    school: "CoderHouse",
    start: "2021-06",
    end: "2021-09",
    link: `${CERTIFICATES}/v1731900259/web-dev-certificate_fxsnjk.png`,
    linkKind: "certificate",
  },
  {
    id: "sql",
    title: "SQL",
    school: "CoderHouse",
    start: "2022-03",
    end: "2022-06",
    link: `${CERTIFICATES}/v1731900256/sql-certificate_cmzrnw.png`,
    linkKind: "certificate",
  },
  {
    id: "python",
    title: "Python",
    school: "CoderHouse",
    start: "2022-08",
    end: "2022-11",
    link: `${CERTIFICATES}/v1731900258/python-certificate_htcmgz.png`,
    linkKind: "certificate",
  },
  {
    id: "javascript",
    title: "JavaScript",
    school: "CoderHouse",
    start: "2023-12",
    end: "2024-03",
    link: `${CERTIFICATES}/v1731900261/javascript-certificate_ubtkhx.png`,
    linkKind: "certificate",
  },
  {
    id: "english",
    title: { en: "English C2, Proficient level", es: "Inglés C2, nivel Proficient" },
    school: "EF SET",
    start: "2024-01",
    end: "2024-01",
    link: "https://www.efset.org/cert/GvMKoR",
    linkKind: "certificate",
  },
  {
    id: "backend",
    title: { en: "Backend Programming", es: "Programación Backend" },
    school: "CoderHouse",
    start: "2024-03",
    end: "2024-09",
    link: `${CERTIFICATES}/v1731900299/backend-certificate_bsey4g.png`,
    linkKind: "certificate",
  },
  {
    id: "react",
    title: "React.js",
    school: "CoderHouse",
    start: "2024-09",
    end: "2024-11",
    link: `${CERTIFICATES}/v1737660441/ReactJs_oi1pvd.png`,
    linkKind: "certificate",
  },
  {
    id: "programming-degree",
    title: {
      en: "Higher Technical Degree in Programming",
      es: "Tecnicatura Superior en Programación",
    },
    school: "Teclab",
    start: "2024-08",
    end: "2026-09",
    link: "https://drive.google.com/file/d/1gcUYmTAuti92dZN_JJwAcWVemUBBpPqr/view?usp=sharing",
    linkKind: "degree",
    featured: true,
  },
  {
    id: "wordpress",
    title: {
      en: "Web Design and Development with WordPress",
      es: "Diseño y Desarrollo Web con WordPress",
    },
    school: "Mac Web",
    start: "2025-11",
    end: "2025-11",
    link: "https://drive.google.com/file/d/1RMpPGTveVM5MiaJ93XsHuTqX0ZytELEA/view?usp=sharing",
    linkKind: "certificate",
  },
];

export default educationItems;
