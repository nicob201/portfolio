import "./navbar.scss";
import { useLanguage } from "../../../context/useLanguage";
import { useCordobaTime } from "../../../hooks/useCordobaTime";
import { contactData } from "../../../data/contactData";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const time = useCordobaTime();

  return (
    <header className="topbar">
      <div className="wrap topbar-inner">
        <a className="topbar-name" href="#inicio">
          Nicolás Boscasso
        </a>

        <p className="topbar-clock">
          <span className="status-dot" aria-hidden="true"></span>
          Córdoba, <time>{time}</time>
        </p>

        <div className="topbar-actions">
          <a className="topbar-link" href="#contacto">
            {t.navbar.write}
          </a>

          <div className="lang-switch" role="group" aria-label={t.navbar.language}>
            <button type="button" aria-pressed={language === "es"} onClick={() => setLanguage("es")}>
              ES
            </button>
            <span aria-hidden="true">/</span>
            <button type="button" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>
              EN
            </button>
          </div>

          <a
            className="topbar-cv"
            href={contactData.resumeUrl[language]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.navbar.resume}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
