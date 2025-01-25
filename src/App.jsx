import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import About from "./components/pages/about/About";
import SkillsContainer from "./components/pages/skills/SkillsContainer";
import EducationContainer from "./components/pages/education/EducationContainer";
import ProjectsContainer from "./components/pages/myProjects/ProjectsContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <About />
      <SkillsContainer />
      <EducationContainer />
      <ProjectsContainer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
