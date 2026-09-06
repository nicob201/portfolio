import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import "./contact.scss";
import { FiDownload } from "react-icons/fi";

import { useLanguage } from "../../../context/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // { type: "success" | "error", msg } — rendered inside the live region below
  const [status, setStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const captchaRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar Captcha
    if (!captchaRef.current.getValue()) {
      setStatus({ type: "error", msg: t.contact.captchaMsg });
      return;
    }

    setStatus(null);
    setIsSending(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSending(false);
          setStatus({ type: "success", msg: t.contact.successMsg });
          setFormData({ name: "", email: "", message: "" });
          captchaRef.current.reset();
          setTimeout(() => setStatus(null), 5000);
        },
        (error) => {
          console.error("EmailJS failed:", error);
          setIsSending(false);
          setStatus({ type: "error", msg: t.contact.errorMsg });
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container-fluid">
        <div className="row g-0">

          {/* LADO IZQUIERDO: Imagen e Info */}
          <div className="col-md-6 left-column">
            <div className="info-block">
              <div className="info-item">
                <strong>{t.contact.phoneLabel}</strong>
                <a href="https://wa.me/5493513287771" target="_blank" rel="noopener noreferrer">
                  <span>+54 9 3513287771</span>
                </a>
              </div>

              <div className="info-item">
                <strong>{t.contact.emailLabel}</strong>
                <a href="mailto:nicolasboscasso@gmail.com">
                  <span>nicolasboscasso@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: Formulario */}
          <div className="col-md-6 right-column">
            <div className="form-container">
              <h2 className="contact-title">{t.contact.title}</h2>

              <form onSubmit={handleSubmit}>
                <label htmlFor="contact-name" className="visually-hidden">
                  {t.contact.form.namePlaceholder}
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="form-control"
                  placeholder={t.contact.form.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />

                <label htmlFor="contact-email" className="visually-hidden">
                  {t.contact.form.emailPlaceholder}
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="form-control"
                  placeholder={t.contact.form.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />

                <label htmlFor="contact-message" className="visually-hidden">
                  {t.contact.form.messagePlaceholder}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-control"
                  placeholder={t.contact.form.messagePlaceholder}
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                {/* Contenedor del Captcha */}
                <div className="captcha-wrapper">
                  <ReCAPTCHA
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    ref={captchaRef}
                    theme="light"
                  />
                </div>

                <button
                  type="submit"
                  className={`btn-send ${isSending ? 'sending' : ''}`}
                  disabled={isSending}
                >
                  {isSending ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      {t.contact.form.sendingBtn}
                    </>
                  ) : (
                    t.contact.form.sendBtn
                  )}
                </button>
              </form>

              {/* Live region: siempre en el DOM para que el lector de pantalla lo anuncie */}
              <div role="status" aria-live="polite">
                {status && (
                  <div
                    className={`alert mt-3 ${
                      status.type === "success" ? "alert-success" : "alert-danger"
                    }`}
                  >
                    {status.msg}
                  </div>
                )}
              </div>

              <div className="resume-section">
                <p>{t.contact.resumeCta}</p>
                <a
                  href="https://drive.google.com/file/d/1bouD__fWg2Mhrqu4xLSE23KLxeKVvMVW/view?usp=sharing"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-download-btn"
                  aria-label={t.contact.resumeCta}
                >
                  <FiDownload />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
