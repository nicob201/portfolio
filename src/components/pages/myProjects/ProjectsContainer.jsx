import Carousel from "../../common/carousel/Carousel";
import "./projects.scss";
import projectsData from "./projectsData";

const ProjectsContainer = () => {
  return (
    <section className="projects-section">
      <div className="container-fluid d-flex flex-column align-items-center">
        {/* Title */}
        <div className="text-center">
          <h2 className="projects-title">Projects</h2>
          <div className="horizontal-row"></div>
        </div>
        {/* Carousel */}
        <div>
          <Carousel projects={projectsData} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsContainer;
