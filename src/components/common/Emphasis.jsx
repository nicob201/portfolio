import { splitEmphasis } from "../../utils/emphasis";

// Renders a data string, wrapping its **marked** parts in `as` (<b> by default).
const Emphasis = ({ text, as: Strong = "b", className }) => (
  <>
    {splitEmphasis(text).map((part, index) =>
      part.strong ? (
        <Strong key={index} className={className}>
          {part.text}
        </Strong>
      ) : (
        part.text
      )
    )}
  </>
);

export default Emphasis;
