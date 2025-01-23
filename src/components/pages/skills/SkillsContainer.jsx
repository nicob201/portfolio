import Button from "../../common/button/Button";
import SkillItem from "./Skills";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiGit,
  SiSass,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiWordpress
} from "react-icons/si";

const SkillsContainer = () => {
  const skills = [
    { Icon: SiJavascript, label: "JavaScript" },
    { Icon: SiReact, label: "React.js" },
    { Icon: SiNodedotjs, label: "Node.js" },
    { Icon: SiExpress, label: "Express" },
    { Icon: SiHtml5, label: "HTML5" },
    { Icon: SiCss3, label: "CSS3" },
    { Icon: SiGit, label: "Git" },
    { Icon: SiSass, label: "Sass" },
    { Icon: SiPython, label: "Python" },
    { Icon: SiWordpress, label: "Wordpress" },
  ];
  return (
    <section className="skills-section d-flex justify-content-center align-items-center">
      <div className="container-skills d-flex justify-content-center align-items-center">
        {/* Left column */}
        <div className="skills-left p-5 d-flex flex-column justify-content-center gap-1">
          <h2 className="skills-title">My Skills</h2>
          <p className="skills-subtitle">(I&#39;m learning more)</p>
          <div className="horizontal-row"></div>
          <Button>View My Work</Button>
        </div>

        {/* Right column - skills */}
        <div className="skills-right">
            {skills.map((skill, index) => (
              <SkillItem key={index} Icon={skill.Icon} label={skill.label} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsContainer;
