import { Fragment } from "react";
import "./work.scss";
import Sheet from "../../common/Sheet";
import SectionHeader from "../../common/SectionHeader";
import Emphasis from "../../common/Emphasis";
import { workItems } from "./workData";
import { useLanguage } from "../../../context/useLanguage";

const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" };

// Metrics, screenshots, links and the hardest problem of the featured row
const FeaturedDetails = ({ featured, url, language, t }) => {
  const locale = language === "es" ? "es-AR" : "en-US";

  return (
    <>
      <dl className="work-metrics">
        {featured.metrics.map((metric) => (
          <div key={metric.label.en}>
            <dt>{metric.label[language]}</dt>
            <dd>
              {metric.prefix}
              {metric.value.toLocaleString(locale)}
            </dd>
          </div>
        ))}
      </dl>

      <div className="work-gallery hatch">
        {featured.gallery.map((shot) => (
          <figure key={shot.src}>
            <img
              src={shot.src}
              alt={shot.alt[language]}
              width={shot.width}
              height={shot.height}
              loading="lazy"
            />
            <figcaption>{shot.caption[language]}</figcaption>
          </figure>
        ))}
      </div>

      <div className="work-links">
        <a className="work-links-site" href={url} {...EXTERNAL}>
          {featured.siteLabel}
        </a>
        <a className="work-links-case" href={featured.caseStudyUrl} {...EXTERNAL}>
          {t.work.caseStudy}
        </a>
      </div>

      <details className="work-challenge">
        <summary>{t.work.challenge}</summary>
        <p>{featured.challenge[language]}</p>
      </details>
    </>
  );
};

const Work = () => {
  const { language, t } = useLanguage();

  return (
    <div className="wrap work">
      <Sheet id="trabajo" aria-labelledby="trabajo-titulo">
        <SectionHeader id="trabajo-titulo" title={t.work.title} note={t.work.note} inset />

        <ol className="work-rows">
          {workItems.map((item) => (
            <li key={item.id} className={`work-row${item.featured ? " work-row--featured" : ""}`}>
              <p className="work-when">
                {item.whenHighlight && (
                  <span className="work-when-highlight">{item.whenHighlight[language]}</span>
                )}
                <span>{item.when[language]}</span>
              </p>

              <div className="work-what">
                <h3 className="work-title">
                  <a href={item.url} {...EXTERNAL}>
                    {item.title}
                    <span className="work-arrow" aria-hidden="true">↗</span>
                  </a>
                </h3>
                <p className="work-description">
                  <Emphasis text={item.description[language]} />
                </p>

                {item.featured && (
                  <FeaturedDetails featured={item.featured} url={item.url} language={language} t={t} />
                )}

                {item.clients && (
                  <p className="work-clients">
                    {t.work.clients}:{" "}
                    {item.clients.map((client, index) => (
                      <Fragment key={client.url}>
                        {index > 0 && ", "}
                        <a href={client.url} {...EXTERNAL}>
                          {client.label}
                        </a>
                      </Fragment>
                    ))}
                  </p>
                )}
              </div>

              <p className="work-where">
                {item.where[language].map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
            </li>
          ))}
        </ol>
      </Sheet>
    </div>
  );
};

export default Work;
