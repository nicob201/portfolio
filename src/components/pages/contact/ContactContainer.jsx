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
  const [success, setSuccess] = useState(false);
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
    const token = captchaRef.current.getValue();
    if (!token) {
      alert(t.contact.errorMsg);
      return;
    }

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
          setSuccess(true);
          setIsSending(false);
          setFormData({ name: "", email: "", message: "" });
          captchaRef.current.reset();
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.log("FAILED...", error);
          setIsSending(false);
          console.log("FAILED...", error);
          setIsSending(false);
          alert(t.contact.errorMsg);
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
                <a href="mailto:nicoboscasso@gmail.com">
                  <span>nicoboscasso@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: Formulario */}
          <div className="col-md-6 right-column">
            <div className="form-container">
              <h2 className="contact-title">{t.contact.title}</h2>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder={t.contact.form.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder={t.contact.form.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
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

              {success && (
                <div className="alert alert-success mt-3" role="alert">
                  {t.contact.successMsg}
                </div>
              )}

              <div className="resume-section">
                <p>{t.contact.resumeCta}</p>
                <a
                  href="https://drive.google.com/file/d/1cFLKL7rdTMFbP9m_PP5EobegF4L9bJL6/view?usp=sharing"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-download-btn"
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