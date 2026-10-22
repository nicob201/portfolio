// Splits "plain **strong** plain" into parts, so data files can mark
// figures and key phrases without carrying JSX.
export const splitEmphasis = (text) =>
  text
    .split("**")
    .map((part, index) => ({ text: part, strong: index % 2 === 1 }))
    .filter((part) => part.text);
