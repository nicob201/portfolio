import "./projects.scss";
import projectsData from "./projectsData";
import Button from "../../common/button/Button";

import { useLanguage } from "../../../context/LanguageContext";

const ProjectsContainer = () => {
  const { language, t } = useLanguage();
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="projects-title">{t.projects.title}</h2>
          <div className="horizontal-row"></div>
        </div>

        <div className="row g-4">
          {projectsData.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4">
              <div className="project-card h-100">
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid"
                  />
                </div>

                <div className="project-content">
                  <h5>{project.title}</h5>
                  <p>
                    {typeof project.description === "object"
                      ? project.description[language]
                      : project.description}
                  </p>

                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>{t.projects.viewDemo}</Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsContainer;
