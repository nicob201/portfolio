import Button from "../../common/button/Button";
import SkillItem from "./Skills";
import { skillsData } from "./skillsData";

const SkillsContainer = () => {
  const scrollToProjects = () => {
    const contactSection = document.getElementById("projects");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="skills"
      className="skills-section d-flex justify-content-center align-items-center"
    >
      <div className="container-skills d-flex justify-content-center align-items-center">
        {/* Left column */}
        <div className="skills-left p-5 d-flex flex-column justify-content-center gap-1">
          <h2 className="skills-title">My Skills</h2>
          <p className="skills-subtitle">(I&#39;m learning more)</p>
          <div className="horizontal-row"></div>
          <Button onClick={scrollToProjects}>View My Work</Button>
        </div>

        {/* Right column - skills */}
        <div className="skills-right">
          {skillsData.map((skill, index) => (
            <SkillItem key={index} Icon={skill.Icon} label={skill.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsContainer;
