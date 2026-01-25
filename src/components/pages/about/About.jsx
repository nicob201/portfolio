import Button from "../../common/button/Button";
import "./about.scss";

const About = () => {
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
            src="https://res.cloudinary.com/dl73hi4ir/image/upload/v1731873474/20240423_170639_1_qji49v.jpg"
            alt="Nicolas Boscasso"
          />
        </div>

        <div className="about-text">
          <span className="about-name">Nicolas Boscasso</span>

          <h1 className="about-title">
            FullStack <br /> Developer
          </h1>

          <div className="horizontal-row"></div>

          <p>
            Welcome! I'm a web developer specializing in creating dynamic and
            efficient websites. Through my code, I turn challenges into
            innovative digital solutions. Feel free to explore my portfolio and
            discover me!
          </p>

          <Button onClick={scrollToContact}>Let's talk!</Button>
        </div>
      </div>
    </section>
  );
};

export default About;
