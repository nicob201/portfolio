import Button from "../../common/button/Button";
import SkillItem from "./Skills";
import { skillsData } from "./skillsData";

import { useLanguage } from "../../../context/LanguageContext";

const SkillsContainer = () => {
  const { t } = useLanguage();
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
          <h2 className="skills-title">{t.skills.title}</h2>
          <p className="skills-subtitle">{t.skills.subtitle}</p>
          <div className="horizontal-row"></div>
          <Button onClick={scrollToProjects}>{t.skills.cta}</Button>
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
