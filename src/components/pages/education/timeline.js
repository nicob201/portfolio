// Helpers for the fixed-axis education Gantt.
// Dates are "YYYY-MM"; positions are percentages of the axis width.

const MONTHS = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  es: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
};

const parse = (yearMonth) => {
  const [year, month] = yearMonth.split("-").map(Number);
  return { year, month };
};

// Whole months between January of range.from and the given month
const monthsFromStart = ({ year, month }, range) => (year - range.from) * 12 + (month - 1);

const axisMonths = (range) => (range.to - range.from + 1) * 12;

export const barPosition = (start, end, range) => {
  const first = monthsFromStart(parse(start), range);
  const last = monthsFromStart(parse(end), range);
  const total = axisMonths(range);

  return {
    left: (first / total) * 100,
    width: ((last - first + 1) / total) * 100,
  };
};

// null once the date falls outside the axis, so the marker is simply not drawn
export const todayPosition = (range, date = new Date()) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const daysInMonth = new Date(year, month, 0).getDate();
  const months = monthsFromStart({ year, month }, range) + (date.getDate() - 1) / daysInMonth;
  const position = (months / axisMonths(range)) * 100;

  return position >= 0 && position <= 100 ? position : null;
};

export const formatPeriod = (start, end, language) => {
  const names = MONTHS[language];
  const from = parse(start);
  const to = parse(end);
  const label = ({ year, month }) => `${names[month - 1]} ${year}`;

  if (start === end) return label(from);
  if (from.year === to.year) return `${names[from.month - 1]}–${label(to)}`;
  return `${label(from)}–${label(to)}`;
};
