import "./contact.scss";
import SectionHeader from "../../common/SectionHeader";
import { useLanguage } from "../../../context/useLanguage";
import { useCopyToClipboard } from "../../../hooks/useCopyToClipboard";
import { contactData } from "../../../data/contactData";
import { EXTERNAL_LINK } from "../../../utils/links";

const Contact = () => {
  const { language, t } = useLanguage();
  const { status, copy } = useCopyToClipboard(contactData.email);

  const channels = [
    { name: "LinkedIn", ...contactData.linkedin },
    { name: "GitHub", ...contactData.github },
    { name: "WhatsApp", ...contactData.whatsapp },
    { name: t.contact.resume, url: contactData.resumeUrl[language], handle: t.contact.resumeHandle },
  ];

  return (
    <section id="contacto" className="wrap contact" aria-labelledby="contacto-titulo">
      <SectionHeader id="contacto-titulo" title={t.contact.title} note={t.contact.note} />

      <ul className="social-list">
        {channels.map((channel) => (
          <li key={channel.name}>
            <a className="social-row" href={channel.url} {...EXTERNAL_LINK}>
              <span className="social-name">{channel.name}</span>
              <span className="social-handle">{channel.handle}</span>
              <span className="social-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>

      <p className="contact-or">{t.contact.orWrite}</p>
      <div className="command-box">
        <a className="command-box-main" href={`mailto:${contactData.email}`}>
          {contactData.email}
        </a>
        <button
          type="button"
          className={`command-box-action mail-copy${status === "copied" ? " is-copied" : ""}`}
          onClick={copy}
        >
          <span className="mail-copy-fill" aria-hidden="true"></span>
          <span aria-live="polite">{t.copy.short[status]}</span>
        </button>
      </div>
    </section>
  );
};

export default Contact;
