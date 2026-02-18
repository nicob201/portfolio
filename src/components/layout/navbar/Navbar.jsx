import "./navbar.scss";
import { useEffect, useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid navbar-container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#home">{t.navbar.home}</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">{t.navbar.skills}</a></li>
            <li className="nav-item"><a className="nav-link" href="#education">{t.navbar.education}</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">{t.navbar.projects}</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">{t.navbar.contact}</a></li>
            <li className="nav-item">
              <button className="btn nav-link" onClick={toggleLanguage}>
                {language === "en" ? "ES" : "EN"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
