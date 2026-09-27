import { useContext } from "react";
import { LanguageContext } from "./languageContextValue";

export const useLanguage = () => useContext(LanguageContext);
