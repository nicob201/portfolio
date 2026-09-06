import { createContext, useState, useEffect, useContext } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    navbar: {
      home: "Home",
      skills: "Skills",
      education: "Education",
      projects: "Projects",
      contact: "Contact",
    },
    about: {
      title: "FullStack\nDeveloper",
      description: "Welcome! I'm a web developer specializing in creating dynamic and efficient websites. Through my code, I turn challenges into innovative digital solutions. Feel free to explore my portfolio and discover me!",
      button: "Let's talk!",
    },
    skills: {
      title: "My Skills",
      subtitle: "(I'm learning more)",
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
    },
  },
  es: {
    navbar: {
      home: "Inicio",
      skills: "Habilidades",
      education: "Educación",
      projects: "Proyectos",
      contact: "Contacto",
    },
    about: {
      title: "Desarrollador\nFullStack",
      description: "¡Bienvenido! Soy un desarrollador web especializado en crear sitios web dinámicos y eficientes. A través de mi código, convierto desafíos en soluciones digitales innovadoras. Te invito a navegar por mi portafolio y descubrirme",
      button: "¡Hablemos!",
    },
    skills: {
      title: "Mis Habilidades",
      subtitle: "(Estoy aprendiendo más)",
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
      resumeCta: "O... DESCARGA MI CURRICULUM AQUÍ",
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
