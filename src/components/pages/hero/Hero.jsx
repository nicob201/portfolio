import "./hero.scss";
import { useLanguage } from "../../../context/useLanguage";
import { useCopyToClipboard } from "../../../hooks/useCopyToClipboard";
import { contactData } from "../../../data/contactData";

const PHOTO =
  "https://res.cloudinary.com/dl73hi4ir/image/upload/c_fill,g_face,w_640,h_800,q_auto,f_auto/v1731873474/20240423_170639_1_qji49v.jpg";

const CopyIcon = () => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
  </svg>
);

const Hero = () => {
  const { t } = useLanguage();
  const { status, copy } = useCopyToClipboard(contactData.email);

  return (
    <section id="inicio" className="wrap hero" aria-labelledby="hero-name">
      <div className="hero-photo">
        <span className="hero-corner hero-corner--tl" aria-hidden="true"></span>
        <span className="hero-corner hero-corner--br" aria-hidden="true"></span>
        <div className="hero-frame">
          <img src={PHOTO} alt="Nicolás Boscasso" width="640" height="800" />
          <p className="hero-badge">
            <span className="status-dot" aria-hidden="true"></span>
            {t.hero.available}
          </p>
        </div>
      </div>

      <div className="hero-text">
        <p className="hero-eyebrow">
          <span className="hero-eyebrow-role">{t.hero.eyebrow}</span>{" "}
          <span className="hero-eyebrow-separator" aria-hidden="true">/</span>{" "}
          {t.hero.location}
        </p>

        <h1 id="hero-name" className="hero-name">
          Nicolás
          <br />
          Boscasso
        </h1>

        <p className="hero-tagline">{t.hero.tagline}</p>

        <div className="hero-actions">
          <a className="button button--gold" href={`mailto:${contactData.email}`}>
            {t.hero.emailCta} <span aria-hidden="true">↗</span>
          </a>
          <button className="button button--outline" type="button" onClick={copy}>
            <CopyIcon />
            <span aria-live="polite">{t.copy.mail[status]}</span>
          </button>
        </div>

        <p className="hero-links">
          <a href={contactData.linkedin.url} target="_blank" rel="noopener noreferrer">
            LinkedIn <span className="hero-arrow" aria-hidden="true">↗</span>
          </a>
          <span className="hero-dot" aria-hidden="true">•</span>
          <a href={contactData.github.url} target="_blank" rel="noopener noreferrer">
            GitHub <span className="hero-arrow" aria-hidden="true">↗</span>
          </a>
          <span className="hero-dot" aria-hidden="true">•</span>
          <a href="#trabajo">
            {t.hero.seeWork} <span className="hero-arrow" aria-hidden="true">↓</span>
          </a>
        </p>
      </div>
    </section>
  );
};

export default Hero;
