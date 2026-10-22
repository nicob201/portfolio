import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("es-AR", {
  timeZone: "America/Argentina/Cordoba",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const currentTime = () => formatter.format(new Date());

// "HH:MM" in Córdoba, refreshed often enough that the minute never lags much
export const useCordobaTime = () => {
  const [time, setTime] = useState(currentTime);

  useEffect(() => {
    const id = setInterval(() => setTime(currentTime()), 15000);
    return () => clearInterval(id);
  }, []);

  return time;
};
