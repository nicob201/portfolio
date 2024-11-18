import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css"; // CSS de Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // JavaScript de Bootstrap

createRoot(document.getElementById("root")).render(<App />);
