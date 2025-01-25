import { useState } from "react";
import emailjs from "emailjs-com";
import Button from "../../common/button/Button";
import "./contact.scss";

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
          console.log("SUCCESS!", response.status, response.text);
          setSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="container-fluid">
        <div className="content-wrapper row">
          {/* Left column */}
          <div className="col-md-6 left-column p-0">
            <div className="background-image"></div>
          </div>

          {/* Form column */}
          <div className="col-md-6 right-column d-flex flex-column justify-content-center">
            <div className="contact-content px-5">
              <div className="contact-info">
                <p>
                  <strong>PHONE NUMBER</strong>
                  <br />
                  +5493513287771
                </p>
                <p>
                  <strong>E-MAIL</strong>
                  <br />
                  nicoboscasso@gmail.com
                </p>
              </div>
              <h2 className="contact-title">Get in touch!</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email here"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Your message here"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <Button type="submit">Send</Button>
              </form>
              {success && (
                <p className="text-success mt-3">
                  Message sent! I&#39;ll contact you soon!
                </p>
              )}
              <p className="mt-4">
                <strong>OR... DOWNLOAD MY RESUME HERE!</strong>
              </p>
              <a
                href="https://drive.google.com/uc?export=download&id=1D5nSzoqMSFNIJkvZbIhqLGslefR2Kcse"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="resume-download-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="currentColor"
                  className="bi bi-file-earmark-arrow-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
