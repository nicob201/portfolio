// Projects. Thumbnails are cropped to 2:1 from the top, the same ratio the cards show.
// **text** in descriptions is highlighted in gold.
const THUMBNAIL = "https://res.cloudinary.com/dl73hi4ir/image/upload/c_fill,g_north,w_800,h_400,f_auto,q_auto";

const projectsData = [
  {
    id: "twitter-clone",
    title: { en: "Twitter/X clone", es: "Clon de Twitter/X" },
    tag: { en: "AI challenge", es: "Challenge de IA" },
    url: "https://github.com/nicob201/twitter-clone",
    image: `${THUMBNAIL}/v1780950467/604680006-9fbe1bfd-7b49-4a6c-95c2-4e4f930a0fe7_h8nvii.png`,
    description: {
      en: "Authentication, social interactions, image uploads and Docker deployment. Over **93% test coverage** on the backend.",
      es: "Autenticación, interacciones sociales, carga de imágenes y despliegue con Docker. Más de **93% de cobertura** de tests en el backend.",
    },
    stack: ["React", "Express", "TypeScript", "PostgreSQL", "Prisma"],
  },
  {
    id: "ecommerce-api",
    title: { en: "E-commerce API", es: "API de e-commerce" },
    tag: { en: "Backend", es: "Backend" },
    url: "https://github.com/nicob201/backend_API_ecommerce",
    image: `${THUMBNAIL}/v1737764156/backend-api_1_ppwh3y.png`,
    description: {
      en: "Complete REST API for an e-commerce store.",
      es: "API REST completa para un e-commerce.",
    },
    stack: ["Node.js", "MongoDB"],
  },
  {
    id: "atelier-forma",
    title: "Atelier Forma",
    tag: { en: "Website", es: "Sitio web" },
    url: "https://atelier-forma-one.vercel.app/",
    image: `${THUMBNAIL}/v1777075165/atelier-forma_e9i8ow.jpg`,
    description: {
      en: "Website for an architecture firm.",
      es: "Sitio para un estudio de arquitectura.",
    },
    stack: ["React"],
  },
  {
    id: "lumident",
    title: "Lumident",
    tag: { en: "Website", es: "Sitio web" },
    url: "https://lumident.pixerum.com/",
    image: `${THUMBNAIL}/v1769893091/lumidentweb_yj0wo9.png`,
    description: {
      en: "Professional website.",
      es: "Sitio web profesional.",
    },
    stack: ["WordPress", "Elementor"],
  },
];

export default projectsData;
