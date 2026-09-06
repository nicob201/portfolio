import "./experience.scss";
import experienceItems from "./experienceData";

import { useLanguage } from "../../../context/LanguageContext";

const ExperienceContainer = () => {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="text-center">
          <h2 className="experience-title">{t.experience.title}</h2>
          <div className="horizontal-row"></div>
        </div>

        <div className="experience-items">
          {experienceItems.map((item, index) => (
            <article className="experience-item" key={index}>
              <header className="experience-head">
                <div>
                  <h3 className="experience-role">{item.role[language]}</h3>
                  <p className="experience-company">{item.company}</p>
                </div>
                <p className="experience-date">{item.date[language]}</p>
              </header>

              <p className="experience-description">
                {item.description[language]}
              </p>

              {item.links?.length > 0 && (
                <ul className="experience-links">
                  {item.links.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceContainer;
