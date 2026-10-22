import "./about.scss";
import Sheet from "../../common/Sheet";
import SectionHeader from "../../common/SectionHeader";
import Emphasis from "../../common/Emphasis";
import { useLanguage } from "../../../context/useLanguage";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="wrap about" aria-labelledby="sobre-mi-titulo">
      <div className="about-text">
        <SectionHeader id="sobre-mi-titulo" title={t.about.title} />
        <p className="about-statement">
          <Emphasis text={t.about.statement} as="mark" />
        </p>
        <p className="about-hand-note">{t.about.handNote}</p>
        <p className="about-body">{t.about.body}</p>
        <p className="about-placeholder">{t.about.placeholder}</p>
      </div>

      <Sheet as="aside" corners="diagonal" className="about-facts" aria-label={t.about.factsLabel}>
        <dl>
          {t.about.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Sheet>
    </section>
  );
};

export default About;
