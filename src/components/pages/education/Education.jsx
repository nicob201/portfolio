import "./education.scss";
import SectionHeader from "../../common/SectionHeader";
import educationItems, { timelineRange } from "./educationData";
import { barPosition, todayPosition, formatPeriod } from "./timeline";
import { useLanguage } from "../../../context/useLanguage";
import { EXTERNAL_LINK, localize } from "../../../utils/links";

const years = Array.from(
  { length: timelineRange.to - timelineRange.from + 1 },
  (_, index) => timelineRange.from + index
);

const Education = () => {
  const { language, t } = useLanguage();
  const today = todayPosition(timelineRange);

  return (
    <section id="estudios" className="wrap education" aria-labelledby="estudios-titulo">
      <SectionHeader id="estudios-titulo" title={t.education.title} note={t.education.note} />

      <div className="gantt" style={{ "--years": years.length }}>
        <div className="gantt-row" aria-hidden="true">
          <div className="gantt-label"></div>
          <div className="gantt-track gantt-scale">
            {years.map((year) => (
              <span key={year}>{year}</span>
            ))}
            {today !== null && (
              <span className="gantt-today-label" style={{ left: `${today}%` }}>
                {t.education.today}
              </span>
            )}
          </div>
        </div>

        <ol>
          {educationItems.map((item) => {
            const { left, width } = barPosition(item.start, item.end, timelineRange);

            return (
              <li key={item.id} className={`gantt-row${item.featured ? " gantt-row--featured" : ""}`}>
                <div className="gantt-label">
                  <h3 className="gantt-title">{localize(item.title, language)}</h3>
                  <p className="gantt-meta">
                    {item.school} · {formatPeriod(item.start, item.end, language)} ·{" "}
                    <a href={item.link} {...EXTERNAL_LINK}>
                      {t.education[item.linkKind]}
                    </a>
                  </p>
                </div>

                <div className="gantt-track" aria-hidden="true">
                  {item.start === item.end ? (
                    <span className="gantt-point" style={{ left: `${left + width / 2}%` }}></span>
                  ) : (
                    <span className="gantt-bar" style={{ left: `${left}%`, width: `${width}%` }}></span>
                  )}
                  {today !== null && <span className="gantt-today" style={{ left: `${today}%` }}></span>}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Education;
