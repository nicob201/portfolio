// Props for links that leave the site
export const EXTERNAL_LINK = { target: "_blank", rel: "noopener noreferrer" };

// Data fields are either a plain string or { en, es }
export const localize = (value, language) =>
  typeof value === "string" ? value : value[language];
