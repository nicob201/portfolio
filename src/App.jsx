import { Analytics } from "@vercel/analytics/react";

import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/layout/navbar/Navbar";
import Hero from "./components/pages/hero/Hero";
import Work from "./components/pages/work/Work";
import Projects from "./components/pages/projects/Projects";

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Projects />
      </main>
      <Analytics />
    </LanguageProvider>
  );
}

export default App;
