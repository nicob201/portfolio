import "./projects.scss";
import projectsData from "./projectsData";
import Button from "../../common/button/Button";

import { useLanguage } from "../../../context/LanguageContext";
import { useState } from "react";

const ProjectsContainer = () => {
  const { language, t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projectsData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="projects-title">{t.projects.title}</h2>
          <div className="horizontal-row"></div>
        </div>

        <div className="row g-4">
          {currentProjects.map((project, index) => (
            <div key={`${project.title}-${index}`} className="col-12 col-md-6 col-lg-4">
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

        <div className="pagination-controls">
          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {t.projects.previous || "Previous"}
          </button>

          <div className="pagination-numbers">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`pagination-number ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {t.projects.next || "Next"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsContainer;
