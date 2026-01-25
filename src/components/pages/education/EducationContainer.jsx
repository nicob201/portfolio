import "./education.scss";
import educationItems from "./educationData";

const EducationContainer = () => {
  return (
    <section id="education" className="education-section">
      <div className="container d-flex flex-column align-items-center">
        <div className="text-center">
          <h2 className="education-title">Education</h2>
          <div className="horizontal-row"></div>
        </div>

        <div className="education-items">
          {educationItems.map((item, index) => (
            <div
              className="education-item"
              key={index}
            >
              <div className="education-left">
                <h3 className="education-item-title">{item.title}</h3>
                <p className="education-item-school">{item.school}</p>
              </div>

              <div className="education-right">
                <p className="education-item-date">{item.date}</p>
              </div>

              <div className="education-right">
                <p className="education-item-date">
                  {item.pdfLink ? (
                    <a
                      href={item.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Download PDF for ${item.title}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
                      </svg>
                    </a>
                  ) : (
                    <span className="education-item-status">In Progress</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationContainer;
