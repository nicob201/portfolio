import { useRef, useState } from "react";
import "./projects.scss";
import SectionHeader from "../../common/SectionHeader";
import Emphasis from "../../common/Emphasis";
import projectsData from "./projectsData";
import { useLanguage } from "../../../context/useLanguage";
import { EXTERNAL_LINK, localize } from "../../../utils/links";
import { paginate } from "../../../utils/paginate";

// One 2×2 grid per page
const PAGE_SIZE = 4;

const Projects = () => {
  const { language, t } = useLanguage();
  const [requestedPage, setRequestedPage] = useState(1);
  const sectionRef = useRef(null);
  const { items, page, pageCount } = paginate(projectsData, requestedPage, PAGE_SIZE);

  const goTo = (target) => {
    setRequestedPage(target);
    // The controls sit under the grid: bring the new page's top into view
    sectionRef.current?.scrollIntoView({ block: "start" });
  };

  return (
    <section
      ref={sectionRef}
      id="proyectos"
      className="wrap projects"
      aria-labelledby="proyectos-titulo"
    >
      <SectionHeader id="proyectos-titulo" title={t.projects.title} note={t.projects.note} />

      <ul className="projects-grid hatch">
        {items.map((project) => {
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

      {pageCount > 1 && (
        <nav className="projects-pages" aria-label={t.projects.pages}>
          <button
            type="button"
            className="projects-page"
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
            aria-label={t.projects.previous}
          >
            ←
          </button>
          {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => (
            <button
              key={number}
              type="button"
              className="projects-page"
              onClick={() => goTo(number)}
              aria-current={number === page ? "page" : undefined}
              aria-label={`${t.projects.page} ${number}`}
            >
              {String(number).padStart(2, "0")}
            </button>
          ))}
          <button
            type="button"
            className="projects-page"
            onClick={() => goTo(page + 1)}
            disabled={page === pageCount}
            aria-label={t.projects.next}
          >
            →
          </button>
        </nav>
      )}
    </section>
  );
};

export default Projects;
