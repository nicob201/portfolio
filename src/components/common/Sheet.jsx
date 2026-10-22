import "./sheet.scss";

const CORNERS = {
  all: ["tl", "tr", "bl", "br"],
  diagonal: ["tl", "br"],
};

// Bordered "technical sheet": gold crosshairs on the corners and a hatched band on top
const Sheet = ({ as: Tag = "section", corners = "all", className = "", children, ...rest }) => (
  <Tag className={`sheet ${className}`.trim()} {...rest}>
    {CORNERS[corners].map((corner) => (
      <span key={corner} className={`sheet-cross sheet-cross--${corner}`} aria-hidden="true"></span>
    ))}
    <div className="sheet-band hatch" aria-hidden="true"></div>
    {children}
  </Tag>
);

export default Sheet;
