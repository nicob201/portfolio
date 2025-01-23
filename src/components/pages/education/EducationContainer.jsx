import "./education.scss";

const EducationContainer = () => {
  const educationItems = [
    {
      title: "Higher Technical Degree in Programming",
      school: "Teclab",
      date: "August 2024 - present",
    },
    {
      title: "React.js",
      school: "CoderHouse",
      date: "September 2024 - November 2024",
      pdfLink:
        "https://res.cloudinary.com/dl73hi4ir/image/upload/v1737660441/ReactJs_oi1pvd.png",
    },
    {
      title: "Backend Programming",
      school: "CoderHouse",
      date: "March 2024 - September 2024",
      pdfLink:
        "https://res.cloudinary.com/dl73hi4ir/image/upload/v1731900299/backend-certificate_bsey4g.png",
    },
    {
      title: "JavaScript",
      school: "CoderHouse",
      date: "December 2023 - March 2024",
      pdfLink:
        "https://res.cloudinary.com/dl73hi4ir/image/upload/v1731900261/javascript-certificate_ubtkhx.png",
    },
    {
      title: "Python",
      school: "CoderHouse",
      date: "August 2022 - November 2022",
      pdfLink:
        "https://res.cloudinary.com/dl73hi4ir/image/upload/v1731900258/python-certificate_htcmgz.png",
    },
    {
      title: "SQL",
      school: "CoderHouse",
      date: "March 2022 - June 2022",
      pdfLink:
        "https://res.cloudinary.com/dl73hi4ir/image/upload/v1731900256/sql-certificate_cmzrnw.png",
    },
    {
      title: "Web Developer",
      school: "CoderHouse",
      date: "June 2021 - September 2021",
      pdfLink:
        "https://res.cloudinary.com/dl73hi4ir/image/upload/v1731900259/web-dev-certificate_fxsnjk.png",
    },
    {
      title: "Language",
      school: "EF Standar English Test - English C2 (Proficient)",
      date: "Jan 2024",
      pdfLink:
        "http://www.efset.org/cert/GvMKoR",
    },
  ];

  return (
    <section className="education-background education-section">
      <div className="container d-flex flex-column align-items-center">
        {/* Title */}
        <div className="text-center">
          <h2 className="education-title">Education</h2>
          <div className="horizontal-row"></div>
        </div>
        <div className="education-items">
          {educationItems.map((item, index) => (
            <div
              className="education-item d-flex border-bottom border-secondary-subtle"
              key={index}
            >
              {/* Left Column */}
              <div className="education-left flex-1">
                <h3 className="education-item-title">{item.title}</h3>
                <p className="education-item-school">{item.school}</p>
              </div>

              {/* Date column */}
              <div className="education-right flex-1">
                <p className="education-item-date">{item.date} </p>
              </div>

              {/* Doc column */}
              <div className="education-right flex-1">
                <p className="education-item-date">
                  {item.pdfLink ? (
                    <a
                      href={item.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
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
