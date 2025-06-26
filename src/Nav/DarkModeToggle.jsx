import { useState } from "react";

const isDarkFunction = () => {
  return (
    localStorage.getItem("theme") === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(isDarkFunction());

  const toggle = () => {
    const root = document.documentElement;
    root.classList.add("notransition");

    requestAnimationFrame(() => {
      setIsDark((prev) => {
        if (!prev) {
          root.classList.add("dark");
          localStorage.setItem("theme", "dark");
        } else {
          root.classList.remove("dark");
          localStorage.setItem("theme", "light");
        }
        return !prev;
      });

      requestAnimationFrame(() => {
        root.classList.remove("notransition");
      });
    });
  };

  return <button onClick={toggle}>{isDark ? "☀️" : "🌙"}</button>;
}

export default DarkModeToggle;
