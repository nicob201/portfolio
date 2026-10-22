import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import Hero from "./components/pages/hero/Hero";
import Work from "./components/pages/work/Work";
import Projects from "./components/pages/projects/Projects";
import Education from "./components/pages/education/Education";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";

function App() {
  // The browser tries to jump to #section before React has rendered it,
  // so shared links like /#contacto would stay at the top without this.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Projects />
        <Education />
        <About />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </LanguageProvider>
  );
}

export default App;
