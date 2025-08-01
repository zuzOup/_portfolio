import { useState } from "react";
import { useLocation } from "react-router-dom";

import "@theme-toggles/react/css/Within.css";
import { Within } from "@theme-toggles/react";

const isDarkFunction = () => {
  return (
    localStorage.getItem("theme") === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};

const updateTheme = (isDark) => {
  const root = document.documentElement;
  root.classList.add("notransition");

  if (isDark) {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }

  requestAnimationFrame(() => {
    root.classList.remove("notransition");
  });
};

const updateProfilePhoto = (isDark) => {
  const profile_photo = document.getElementById("profile_photo");
  if (profile_photo) {
    profile_photo.src = isDark ? "./photo-dark.jpg" : "./photo.jpg";
  }
};

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(isDarkFunction());
  const location = useLocation();

  const toggle = () => {
    setIsDark((prev) => {
      const newIsDark = !prev;
      updateTheme(newIsDark);

      if (location.pathname === "/") {
        updateProfilePhoto(newIsDark);
      }

      return newIsDark;
    });
  };

  return (
    <div className="dark-mode-btn" id="dark-mode-btn">
      <Within duration={750} toggled={isDark} toggle={toggle} />
    </div>
  );
}

export default DarkModeToggle;
