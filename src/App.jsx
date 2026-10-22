import { Analytics } from "@vercel/analytics/react";

import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <main></main>
      <Analytics />
    </LanguageProvider>
  );
}

export default App;
