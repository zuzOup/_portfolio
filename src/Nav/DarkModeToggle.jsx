import { useState } from "react";
import { useLocation } from "react-router-dom";

import "./DarkModeToggle.css";

const getElements = () => {
  const main = document.querySelector("main");
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const footer = document.querySelector("footer");
  const mobileBtn = document.getElementById("mobile-btn");

  return [main, header, nav, footer, mobileBtn].filter(Boolean);
};

const isDarkFunction = () => {
  return (
    localStorage.getItem("theme") === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};

const updateTheme = (isDark) => {
  const root = document.documentElement;

  getElements().forEach((element) => {
    console.log(element);
    element.classList.add("notransition");
  });

  if (isDark) {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }

  requestAnimationFrame(() => {
    getElements().forEach((element) => {
      element.classList.remove("notransition");
    });
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
    // https://toggles.dev/
    <div className="dark-mode-btn" id="dark-mode-btn">
      <button
        className={`theme-toggle toggle ${isDark ? "theme-toggle--toggled" : ""}`}
        type="button"
        aria-label="Toggle theme"
        onClick={toggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="theme-toggle__within toggle"
          height="1em"
          width="1em"
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <clipPath id="theme-toggle__within__clip" className="toggle">
            <path
              d="M0 0h32v32h-32ZM6 16A1 1 0 0026 16 1 1 0 006 16"
              className="toggle"
            />
          </clipPath>
          <g clipPath="url(#theme-toggle__within__clip)" className="toggle">
            <path
              className="toggle rays"
              d="M30.7 21.3 27.1 16l3.7-5.3c.4-.5.1-1.3-.6-1.4l-6.3-1.1-1.1-6.3c-.1-.6-.8-.9-1.4-.6L16 5l-5.4-3.7c-.5-.4-1.3-.1-1.4.6l-1 6.3-6.4 1.1c-.6.1-.9.9-.6 1.3L4.9 16l-3.7 5.3c-.4.5-.1 1.3.6 1.4l6.3 1.1 1.1 6.3c.1.6.8.9 1.4.6l5.3-3.7 5.3 3.7c.5.4 1.3.1 1.4-.6l1.1-6.3 6.3-1.1c.8-.1 1.1-.8.7-1.4zM16 25.1c-5.1 0-9.1-4.1-9.1-9.1 0-5.1 4.1-9.1 9.1-9.1s9.1 4.1 9.1 9.1c0 5.1-4 9.1-9.1 9.1z"
            />
          </g>
          <path
            className="theme-toggle__within__circle toggle"
            d="M16 7.7c-4.6 0-8.2 3.7-8.2 8.2s3.6 8.4 8.2 8.4 8.2-3.7 8.2-8.2-3.6-8.4-8.2-8.4zm0 14.4c-3.4 0-6.1-2.9-6.1-6.2s2.7-6.1 6.1-6.1c3.4 0 6.1 2.9 6.1 6.2s-2.7 6.1-6.1 6.1z"
          />
          <path
            className="theme-toggle__within__inner toggle"
            d="M16 9.5c-3.6 0-6.4 2.9-6.4 6.4s2.8 6.5 6.4 6.5 6.4-2.9 6.4-6.4-2.8-6.5-6.4-6.5z"
          />
        </svg>
      </button>
    </div>
  );
}

export default DarkModeToggle;
