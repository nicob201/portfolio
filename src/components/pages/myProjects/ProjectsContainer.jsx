import "./projects.scss";
import projectsData from "./projectsData";
import Button from "../../common/button/Button";

import { useLanguage } from "../../../context/LanguageContext";

const ProjectsContainer = () => {
  const { language, t } = useLanguage();

  const featured = projectsData.find((project) => project.featured);
  const rest = projectsData.filter((project) => !project.featured);

  const describe = (project) =>
    typeof project.description === "object"
      ? project.description[language]
      : project.description;

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="projects-title">{t.projects.title}</h2>
          <div className="horizontal-row"></div>
        </div>

        {featured && (
          <article className="featured-project">
            <div className="featured-image">
              <img src={featured.image} alt={featured.title} />
            </div>

            <div className="featured-body">
              <h3>{featured.title}</h3>
              <p className="featured-summary">{describe(featured)}</p>

              <dl className="featured-meta">
                <div>
                  <dt>{t.caseStudy.role}</dt>
                  <dd>{featured.role[language]}</dd>
                </div>
                <div>
                  <dt>{t.caseStudy.timeframe}</dt>
                  <dd>{featured.timeframe[language]}</dd>
                </div>
                <div>
                  <dt>{t.caseStudy.stack}</dt>
                  <dd>{featured.stack}</dd>
                </div>
              </dl>

              <h4>{t.caseStudy.highlights}</h4>
              <ul className="featured-highlights">
                {featured.highlights[language].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h4>{t.caseStudy.challenge}</h4>
              <p className="featured-challenge">{featured.challenge[language]}</p>

              <a
                href={featured.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>{t.caseStudy.visitSite}</Button>
              </a>
            </div>
          </article>
        )}

        <div className="row g-4">
          {rest.map((project, index) => (
            <div key={`${project.title}-${index}`} className="col-12 col-md-6 col-lg-4">
              <div className="project-card h-100">
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>

                <div className="project-content">
                  <h5>{project.title}</h5>
                  <p>{describe(project)}</p>

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
