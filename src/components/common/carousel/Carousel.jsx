import "bootstrap/dist/css/bootstrap.min.css";
import "./carousel.scss";
import Button from "../button/Button";

const Carousel = ({ projects }) => {
  return (
    <div
      id="projectsCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* Controls */}
      <div className="carousel-indicators">
        {projects.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#projectsCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="container">
              <div className="row align-items-center">
                {/* Column for image */}
                <div className="col-md-6 carousel-image">
                  <img
                    src={project.image}
                    className="d-block w-100 carousel-image"
                    alt={project.title}
                  />
                </div>

                {/* Column for description & button */}
                <div className="col-md-6">
                  <div className="d-md-block text-start carousel-description project-text">
                    <h5>{project.title}</h5>
                    <p>{project.description}</p>
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button>Demo</Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nav controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#projectsCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#projectsCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
