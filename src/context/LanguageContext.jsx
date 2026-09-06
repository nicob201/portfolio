import { createContext, useState, useEffect, useContext } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    navbar: {
      home: "Home",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume",
    },
    about: {
      title: "FullStack\nDeveloper",
      description: "Full-stack developer based in Córdoba, Argentina. I designed, built and shipped DocuAuto — a vehicle maintenance SaaS running in production with recurring subscriptions and payments. I work with React, Next.js, Node and PostgreSQL, and I learn whatever the problem needs. Available for remote roles and freelance work.",
      button: "Let's talk!",
    },
    experience: {
      title: "Experience",
      present: "Present",
    },
    caseStudy: {
      role: "Role",
      timeframe: "Timeframe",
      stack: "Stack",
      highlights: "Highlights",
      challenge: "Hardest problem",
      visitSite: "Visit site",
      screenshot: "Screenshot of",
    },
    skills: {
      title: "My Skills",
      cta: "View My Work",
    },
    education: {
      title: "Education",
      inProgress: "In Progress",
      downloadPdf: "View certificate:",
    },
    projects: {
      title: "Projects",
      viewDemo: "View Demo",
    },
    contact: {
      title: "Get in touch!",
      phoneLabel: "PHONE NUMBER",
      emailLabel: "E-MAIL",
      form: {
        namePlaceholder: "Name",
        emailPlaceholder: "Enter your email here",
        messagePlaceholder: "Your message here",
        sendBtn: "SEND",
        sendingBtn: "SENDING...",
      },
      successMsg: "Message sent! I'll contact you soon!",
      errorMsg: "Oops! Something went wrong. Please try again later.",
      captchaMsg: "Please confirm you are not a robot.",
      resumeCta: "OR... DOWNLOAD MY RESUME HERE!",
      resumeUrl: "https://drive.google.com/file/d/1bouD__fWg2Mhrqu4xLSE23KLxeKVvMVW/view?usp=sharing",
    },
  },
  es: {
    navbar: {
      home: "Inicio",
      experience: "Experiencia",
      skills: "Habilidades",
      education: "Educación",
      projects: "Proyectos",
      contact: "Contacto",
      resume: "CV",
    },
    about: {
      title: "Desarrollador\nFullStack",
      description: "Desarrollador full-stack en Córdoba, Argentina. Diseñé, construí y publiqué DocuAuto: un SaaS de gestión de mantenimiento vehicular en producción, con suscripciones y pagos recurrentes. Trabajo con React, Next.js, Node y PostgreSQL, y aprendo lo que el problema necesite. Disponible para trabajo remoto y freelance.",
      button: "¡Hablemos!",
    },
    experience: {
      title: "Experiencia",
      present: "Presente",
    },
    caseStudy: {
      role: "Rol",
      timeframe: "Duración",
      stack: "Stack",
      highlights: "Lo que incluye",
      challenge: "El problema más difícil",
      visitSite: "Ver el sitio",
      screenshot: "Captura de",
    },
    skills: {
      title: "Mis Habilidades",
      cta: "Ver Mis Proyectos",
    },
    education: {
      title: "Educación",
      inProgress: "En Progreso",
      downloadPdf: "Ver certificado:",
    },
    projects: {
      title: "Proyectos",
      viewDemo: "Ver Demo",
    },
    contact: {
      title: "Contacto",
      phoneLabel: "NÚMERO DE TELÉFONO",
      emailLabel: "CORREO ELECTRÓNICO",
      form: {
        namePlaceholder: "Nombre",
        emailPlaceholder: "Ingresa tu correo aquí",
        messagePlaceholder: "Tu mensaje aquí",
        sendBtn: "ENVIAR",
        sendingBtn: "ENVIANDO...",
      },
      successMsg: "¡Mensaje enviado! ¡Te contactaré pronto!",
      errorMsg: "¡Ups! Algo salió mal. Por favor, intentá de nuevo más tarde.",
      captchaMsg: "Por favor confirmá que no sos un robot.",
      resumeCta: "O... DESCARGÁ MI CURRICULUM ACÁ!",
      resumeUrl: "https://drive.google.com/file/d/1TjldMaHFweHnuQgNvHO1yy4RctBxKEPr/view?usp=sharing",
    },
  },
};

const getInitialLanguage = () => {
  // 1. ?lang= in the URL wins, so the language is shareable
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (fromUrl === "en" || fromUrl === "es") return fromUrl;

  // 2. then whatever the visitor picked last time
  const stored = localStorage.getItem("language");
  if (stored === "en" || stored === "es") return stored;

  // 3. otherwise follow the browser
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;

    // Keep ?lang= in sync so the current view can be copy-pasted
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState({}, "", url);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  const value = {
    language,
    toggleLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
