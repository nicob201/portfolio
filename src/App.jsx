import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import About from "./components/pages/about/About";
import SkillsContainer from "./components/pages/skills/SkillsContainer";
import EducationContainer from "./components/pages/education/EducationContainer";
import ProjectsContainer from "./components/pages/myProjects/ProjectsContainer";
import ContactSection from "./components/pages/contact/ContactContainer";

import { Analytics } from "@vercel/analytics/react";

import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <About />
      <SkillsContainer />
      <EducationContainer />
      <ProjectsContainer />
      <ContactSection />
      <Footer />
      <Analytics />
    </LanguageProvider>
  );
}

export default App;
