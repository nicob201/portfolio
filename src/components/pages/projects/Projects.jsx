import "./projects.scss";
import SectionHeader from "../../common/SectionHeader";
import Emphasis from "../../common/Emphasis";
import projectsData from "./projectsData";
import { useLanguage } from "../../../context/useLanguage";
import { EXTERNAL_LINK, localize } from "../../../utils/links";

const Projects = () => {
  const { language, t } = useLanguage();

  return (
    <section id="proyectos" className="wrap projects" aria-labelledby="proyectos-titulo">
      <SectionHeader id="proyectos-titulo" title={t.projects.title} note={t.projects.note} />

      <ul className="projects-grid hatch">
        {projectsData.map((project) => {
          const title = localize(project.title, language);

          return (
            <li key={project.id} className="project-card">
              <img
                src={project.image}
                alt={`${t.projects.screenshot} ${title}`}
                width="800"
                height="400"
                loading="lazy"
              />
              <div className="project-body">
                <p className="project-tag">{project.tag[language]}</p>
                <h3 className="project-title">
                  <a href={project.url} {...EXTERNAL_LINK}>
                    {title}
                    <span className="title-arrow" aria-hidden="true">↗</span>
                  </a>
                </h3>
                <p className="project-description">
                  <Emphasis text={project.description[language]} />
                </p>
                <p className="project-stack">{project.stack.join(" · ")}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
