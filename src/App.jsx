import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/navbar/Navbar";
import Hero from "./components/common/hero/Hero";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      {/* Simula mas contenido desde aca */}
      <div style={{ height: "200vh", backgroundColor: "#f0f0f0" }}>
        {/* Espacio para más contenido */}
        <h2 style={{ textAlign: "center", padding: "2rem" }}>Más contenido aquí</h2>
      </div>
    </BrowserRouter>
  );
}

export default App;
