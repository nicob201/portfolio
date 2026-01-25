import { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.scss";
import { FiDownload } from "react-icons/fi";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          setSuccess(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.log("FAILED...", error);
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
              <p>
                <strong>PHONE NUMBER</strong>
                <a href="https://wa.me/5493513287771" target="_blank" rel="noopener noreferrer"><span>+5493513287771</span></a>
              </p>
              <p>
                <strong>E-MAIL</strong>
                <a href="mailto:nicoboscasso@gmail.com">
                  <span>nicoboscasso@gmail.com</span>
                </a>
              </p>
            </div>
          </div>

          {/* LADO DERECHO: Formulario */}
          <div className="col-md-6 right-column">
            <div className="form-container">
              <h2 className="contact-title">Get in touch!</h2>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email here"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Your message here"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button type="submit" className="btn-send">
                  SEND
                </button>
              </form>

              {success && (
                <div className="alert alert-success mt-3" role="alert">
                  Message sent! I'll contact you soon!
                </div>
              )}

              {/* SECCION DESCARGA DE CV */}
              <div className="resume-section">
                <p>OR... DOWNLOAD MY RESUME HERE!</p>
                <a
                  href="TU_LINK_DE_DRIVE_AQUÍ"
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