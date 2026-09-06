// Projects data
const projectsData = [
  {
    title: "DocuAuto",
    description: {
      en: "Vehicle maintenance management SaaS. It enables users and fleet managers to track vehicles, maintenance, expenses, documents, and verified public reports. Next.js 16, React 19, Supabase, and MercadoPago.",
      es: "SaaS de gestión de mantenimiento vehicular. Permite a usuarios y gestores de flota llevar registro de vehículos, mantenimientos, gastos, documentos y reportes públicos verificados. Next.js 16, React 19, Supabase y MercadoPago.",
    },
    image: "https://res.cloudinary.com/dl73hi4ir/image/upload/f_auto,q_auto,w_1200/v1786996819/image_dirhqj.jpg",
    demoLink: "https://www.docuauto.com",
    featured: true,
    role: {
      en: "Solo: product, database, backend, frontend, payments and deploy",
      es: "En solitario: producto, base de datos, backend, frontend, pagos y deploy",
    },
    timeframe: { en: "7 months · live", es: "7 meses · en producción" },
    stack:
      "Next.js 16 · React 19 · TypeScript · Supabase (PostgreSQL + RLS) · MercadoPago · Tailwind · Vitest",
    highlights: {
      en: [
        "48 routes: dashboard, fleet management, public verifiable reports, admin panel, blog and a workshop-facing area",
        "31 database migrations and 27 row-level security policies, backed by integration tests asserting one account cannot read another's data",
        "808 automated tests; lint, typecheck, tests and build run from a single command",
        "Recurring subscriptions, cron-scheduled expiry alerts, PDF and spreadsheet exports",
      ],
      es: [
        "48 rutas: dashboard, gestión de flota, reportes públicos verificables, panel de administración, blog y un área para talleres",
        "31 migraciones de base de datos y 27 políticas de row-level security, con tests de integración que verifican que una cuenta no pueda leer los datos de otra",
        "808 tests automatizados; lint, typecheck, tests y build corren con un solo comando",
        "Suscripciones recurrentes, alertas de vencimiento por cron, exportación a PDF y planilla",
      ],
    },
    challenge: {
      en: "Integrating MercadoPago's subscription API. The docs don't explain how the subscriber's email binds to the preapproval, so the account paying and the account inside the app could drift apart. I settled it by encoding user, plan and billing cycle into the external reference, and by verifying every webhook signature with a constant-time HMAC comparison, so each notification resolves to exactly one account.",
      es: "Integrar la API de suscripciones de MercadoPago. La documentación no explica cómo se vincula el email del suscriptor con la preaprobación, así que la cuenta que pagaba y la cuenta dentro de la app podían terminar siendo distintas. Lo resolví codificando usuario, plan y ciclo de facturación en la referencia externa, y verificando la firma de cada webhook con una comparación HMAC de tiempo constante, para que cada notificación resuelva a una única cuenta.",
    },
  },
  {
    title: "Twitter/X Clone - AI Verified Challenge",
    description: {
      en: "Full-stack Twitter/X clone developed as part of an AI-assisted engineering challenge. Built with React, Express, TypeScript, PostgreSQL and Prisma, featuring authentication, social interactions, image uploads, automated testing, Docker deployment and 93%+ backend test coverage.",
      es: "Clon full-stack de Twitter/X desarrollado para un challenge de ingeniería asistida por IA. Construido con React, Express, TypeScript, PostgreSQL y Prisma, incluyendo autenticación, interacciones sociales, carga de imágenes, testing automatizado, despliegue con Docker y más de 93% de cobertura de tests en backend.",
    },
    image: "https://res.cloudinary.com/dl73hi4ir/image/upload/f_auto,q_auto,w_800/v1780950467/604680006-9fbe1bfd-7b49-4a6c-95c2-4e4f930a0fe7_h8nvii.png",
    demoLink: "https://github.com/nicob201/twitter-clone",
  },
  {
    title: "Backend API - Node.js",
    description: {
      en: "Complete Backend API Restfull for ecommerce, built with Node.js and MongoDB",
      es: "API Backend Restfull completa para ecommerce, construida con Node.js y MongoDB",
    },
    image:
      "https://res.cloudinary.com/dl73hi4ir/image/upload/f_auto,q_auto,w_800/v1737764156/backend-api_1_ppwh3y.png",
    demoLink: "https://github.com/nicob201/backend_API_ecommerce.git",
  },
  {
    title: "Professional Website - React.js",
    description: {
      en: "Architectural firm website built with React.js",
      es: "Sitio web profesional construido con React.js",
    },
    image:
      "https://res.cloudinary.com/dl73hi4ir/image/upload/f_auto,q_auto,w_800/v1777075165/atelier-forma_e9i8ow.jpg",
    demoLink: "https://atelier-forma-one.vercel.app/",
  },
  {
    title: "Lumident Web",
    description: {
      en: "Professional website built with WordPress & Elementor",
      es: "Sitio web profesional construido con WordPress y Elementor",
    },
    image:
      "https://res.cloudinary.com/dl73hi4ir/image/upload/f_auto,q_auto,w_800/v1769893091/lumidentweb_yj0wo9.png",
    demoLink: "https://lumident.pixerum.com/",
  },
];

export default projectsData;
