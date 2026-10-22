import "./footer.scss";
import versions from "./versionsData";
import { useLanguage } from "../../../context/useLanguage";
import { useCordobaTime } from "../../../hooks/useCordobaTime";
import { contactData } from "../../../data/contactData";

// Profile of the Sierras de Córdoba, drawn on a 1440×160 box
const RIDGE =
  "M0 126 L48 120 L96 124 L150 110 L196 114 L248 98 L300 103 L352 88 L398 92 L446 76 L500 80 L556 64 L606 69 L660 52 L712 56 L760 42 L806 46 L846 30 L878 26 L900 22 L924 25 L956 34 L996 31 L1036 48 L1084 44 L1130 62 L1176 58 L1226 76 L1274 72 L1324 90 L1372 94 L1440 106";

const Footer = () => {
  const { t } = useLanguage();
  const time = useCordobaTime();

  return (
    <footer className="footer">
      {/* The closing line sinks behind the mountains */}
      <div className="footer-sky">
        <a className="footer-closing" href={`mailto:${contactData.email}`}>
          {t.footer.closing}
        </a>
        <svg
          className="footer-ridge"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path className="footer-ridge-fill" d={`${RIDGE} L1440 160 L0 160 Z`} />
          <path className="footer-ridge-line" d={RIDGE} />
        </svg>
      </div>

      <div className="footer-ground">
        <div className="wrap footer-rows">
          <nav className="footer-versions" aria-label={t.footer.versions}>
            <span className="footer-versions-label">{t.footer.versions}</span>
            <ul>
              {versions.map((version) => (
                <li key={version.id}>
                  {version.current ? (
                    <span aria-current="page">
                      {version.id} · {version.year} <em>({t.footer.current})</em>
                    </span>
                  ) : (
                    <a href={version.href}>
                      {version.id} · {version.year}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Nicolás Boscasso</p>
            <p className="footer-clock">
              Córdoba, <time>{time}</time>
            </p>
            <a className="footer-top" href="#inicio">
              {t.footer.backToTop} <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
