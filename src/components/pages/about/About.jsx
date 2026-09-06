import Button from "../../common/button/Button";
import "./about.scss";

import { useLanguage } from "../../../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="about hero-container">
      <div className="about-wrapper">
        <div className="about-image">
          <img
            src="https://res.cloudinary.com/dl73hi4ir/image/upload/c_fill,g_face,w_300,h_300,q_auto,f_auto/v1731873474/20240423_170639_1_qji49v.jpg"
            alt="Nicolas Boscasso"
            width="150"
            height="150"
          />
        </div>

        <div className="about-text">
          <span className="about-name">Nicolas Boscasso</span>

          <h1 className="about-title" style={{ whiteSpace: "pre-line" }}>
            {t.about.title}
          </h1>

          <div className="horizontal-row"></div>

          <p>
            {t.about.description}
          </p>

          <Button onClick={scrollToContact}>{t.about.button}</Button>
        </div>
      </div>
    </section>
  );
};

export default About;
