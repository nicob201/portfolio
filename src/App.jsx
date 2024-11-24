import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import About from "./components/pages/about/About";
import SkillsContainer from "./components/pages/skills/SkillsContainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <About />
      <SkillsContainer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
