import "./skills.scss";

const SkillItem = ({ Icon, label }) => {
  return (
    <div className="skill-item d-flex align-items-center">
      <Icon className="skill-icon" />
      <span className="skill-label">{label}</span>
    </div>
  );
};

export default SkillItem;
