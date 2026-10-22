import { useState, useEffect } from "react";
import { LanguageContext } from "./languageContextValue";
import { translations } from "./translations";

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
    setLanguage,
    toggleLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
