// Work. **text** in descriptions is rendered bold.
const CLOUDINARY = "https://res.cloudinary.com/dl73hi4ir/image/upload";

export const workItems = [
  {
    id: "docuauto",
    whenHighlight: { en: "In production", es: "En producción" },
    when: { en: "8 months", es: "8 meses" },
    title: "DocuAuto",
    url: "https://www.docuauto.com",
    description: {
      en: "A vehicle maintenance SaaS I built on my own: product, database, backend, frontend, payments and deploy. Users and fleet managers keep track of vehicles, maintenance, expenses, documents and **verified public reports**, with **recurring subscriptions** through MercadoPago.",
      es: "Un SaaS de mantenimiento vehicular que construí solo: producto, base de datos, backend, frontend, pagos y deploy. Usuarios y gestores de flota llevan vehículos, mantenimientos, gastos, documentos y **reportes públicos verificados**, con **suscripciones recurrentes** vía MercadoPago.",
    },
    where: {
      en: ["Own product", "Next.js · Supabase"],
      es: ["Producto propio", "Next.js · Supabase"],
    },
    featured: {
      metrics: [
        { value: 42000, prefix: "~", label: { en: "Lines of TypeScript", es: "Líneas de TypeScript" } },
        { value: 48, label: { en: "Routes", es: "Rutas" } },
        { value: 31, label: { en: "Migrations", es: "Migraciones" } },
        { value: 27, label: { en: "RLS policies", es: "Políticas RLS" } },
        { value: 808, label: { en: "Automated tests", es: "Tests automáticos" } },
      ],
      gallery: [
        {
          src: `${CLOUDINARY}/f_auto,q_auto,w_1400/v1786996819/image_dirhqj.jpg`,
          width: 1600,
          height: 870,
          alt: {
            en: "DocuAuto landing page: when was your last service?",
            es: "Landing de DocuAuto: ¿Cuándo fue el último service?",
          },
          caption: { en: "Landing page", es: "Landing" },
        },
        {
          src: `${CLOUDINARY}/f_auto,q_auto,w_800/v1788666028/image_1_rwuccn.jpg`,
          width: 1600,
          height: 870,
          alt: { en: "DocuAuto expense reports", es: "Reportes de gastos de DocuAuto" },
          caption: { en: "Expense reports", es: "Reportes de gastos" },
        },
        {
          src: `${CLOUDINARY}/f_auto,q_auto,w_800/v1788666046/image_3_ione5o.jpg`,
          width: 1600,
          height: 870,
          alt: {
            en: "Maintenance history of a vehicle in DocuAuto",
            es: "Historial de mantenimiento de un vehículo en DocuAuto",
          },
          caption: { en: "Maintenance history", es: "Historial de mantenimiento" },
        },
      ],
      siteLabel: "docuauto.com",
      caseStudyUrl: "https://github.com/nicob201/docuauto-case-study",
      challenge: {
        en: "Integrating MercadoPago's subscription API. The docs don't explain how the subscriber's email binds to the preapproval, so the account paying and the account inside the app could drift apart. I settled it by encoding user, plan and billing cycle into the external reference, and by verifying every webhook signature with a constant-time HMAC comparison, so each notification resolves to exactly one account.",
        es: "Integrar la API de suscripciones de MercadoPago. La documentación no explica cómo se vincula el email del suscriptor con la preaprobación, así que la cuenta que pagaba y la cuenta dentro de la app podían terminar siendo distintas. Lo resolví codificando usuario, plan y ciclo de facturación en la referencia externa, y verificando la firma de cada webhook con una comparación HMAC de tiempo constante, para que cada notificación resuelva a una única cuenta.",
      },
    },
  },
  {
    id: "aster",
    when: { en: "2024 → now", es: "2024 → hoy" },
    title: "Aster Estudio",
    url: "https://asterestudio.com/",
    description: {
      en: "Web studio I run with a designer. We take client sites end to end: scope, build, deploy and handover. Delivered on WordPress when the client needs to edit content themselves, and coded from scratch when the project calls for it.",
      es: "Estudio web que llevo junto a una diseñadora. Tomamos sitios de clientes de punta a punta: relevamiento, desarrollo, deploy y entrega. Los resolvemos en WordPress cuando el cliente necesita editar el contenido por su cuenta, y con código propio cuando el proyecto lo pide.",
    },
    clients: [
      { label: "Estudio Arqci", url: "https://arqci.com.ar/" },
      { label: "Gea Logistics", url: "https://gealogistics.net/" },
    ],
    where: {
      en: ["Co-founder", "WordPress · Custom code"],
      es: ["Socio fundador", "WordPress · A medida"],
    },
  },
];
