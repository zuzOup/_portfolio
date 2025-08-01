import { useState } from "react";

import "@theme-toggles/react/css/Within.css";
import { Within } from "@theme-toggles/react";

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

    const profile_photo = document.getElementById("profile_photo");

    requestAnimationFrame(() => {
      setIsDark((prev) => {
        if (!prev) {
          root.classList.add("dark");
          localStorage.setItem("theme", "dark");

          profile_photo.src = "/photo-dark.jpg";
        } else {
          root.classList.remove("dark");
          localStorage.setItem("theme", "light");

          profile_photo.src = "/photo.jpg";
        }
        return !prev;
      });

      requestAnimationFrame(() => {
        root.classList.remove("notransition");
      });
    });
  };

  return (
    <div className="dark-mode-btn" id="dark-mode-btn">
      <Within duration={750} toggled={isDark} toggle={toggle} />
    </div>
  );
}

export default DarkModeToggle;
