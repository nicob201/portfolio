import "./section-header.scss";

// Giant section title plus a short note. `inset` pads it to sit inside a Sheet.
const SectionHeader = ({ id, title, note, inset = false }) => (
  <header className={`section-header${inset ? " section-header--inset" : ""}`}>
    <h2 id={id} className="section-title">
      {title}
    </h2>
    {note && <p className="section-note">{note}</p>}
  </header>
);

export default SectionHeader;
