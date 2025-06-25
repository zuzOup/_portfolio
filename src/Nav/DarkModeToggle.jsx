import { useEffect, useState } from "react";

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else if (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    root.classList.add("notransition");

    const newState = !isDark;
    setIsDark(newState);

    requestAnimationFrame(() => {
      if (newState) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      requestAnimationFrame(() => {
        root.classList.remove("notransition");
      });
    });
  };

  return <button onClick={toggle}>{isDark ? "☀️" : "🌙"}</button>;
}

export default DarkModeToggle;
