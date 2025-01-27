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
    <section id="home" className="about hero-container horizontal-gradient">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-end">
            {/* Circular image */}
            <img
              src="https://res.cloudinary.com/dl73hi4ir/image/upload/v1731873474/20240423_170639_1_qji49v.jpg"
              alt="Nicolas Boscasso"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-md-6 text-start">
            <h1>Nicolas Boscasso</h1>
            <h2>FullStack Developer</h2>
            <div className="horizontal-row"></div>
            <p>
              Welcome! I&#39;m a web developer specializing in creating dynamic
              and efficient websites. Through my code, I turn challenges into
              innovative digital solutions. Feel free to explore my portfolio
              and discover me!
            </p>
            <Button onClick={scrollToContact}>Let&#39;s talk!</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
