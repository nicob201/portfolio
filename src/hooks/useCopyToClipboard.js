import { useEffect, useRef, useState } from "react";

// status: "idle" | "copied" | "error"; it goes back to "idle" after resetMs
export const useCopyToClipboard = (text, resetMs = 2500) => {
  const [status, setStatus] = useState("idle");
  const resetTimer = useRef();

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      // No clipboard access (plain http, old browser, permission denied)
      setStatus("error");
    }
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setStatus("idle"), resetMs);
  };

  return { status, copy };
};
