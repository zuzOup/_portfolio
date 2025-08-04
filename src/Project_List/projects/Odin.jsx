import { useState, useEffect, useRef } from "react";

import ListHeader from "../ListHeader.jsx";
import SectionBody from "../SectionBody.jsx";
import useFadeInOnScroll_hook from "../../hooks/fadeInOnScroll_hook.js";

const parseMarkdown = (str) => {
  const sections = str.split("###");
  sections.shift();

  return sections.reduce((projects, cur) => {
    if (cur == undefined) return projects;

    const lines = cur.split("\n");

    const name = lines[0].split("]")[0].split("[")[1];
    const description = lines[2].split("**").join("");
    const repo = lines[1].split("(")[1].split(")")[0];
    const url = lines[0].split("(")[1].split(")")[0];

    return [...projects, { name, url, repo, description }];
  }, []);
};

function Odin() {
  const [data, setData] = useState([]);

  const refPL_Odin = useRef();
  const isVisible = useFadeInOnScroll_hook(refPL_Odin);

  useEffect(() => {
    //fetch should have auth, but this is only frontend sooooo
    fetch("https://api.github.com/repos/zuzoup/The-Odin-Project/contents/README.md")
      .then((response) => response.json())
      .then((data) => {
        const content = atob(data.content);
        setData(parseMarkdown(content));
      })
      .catch((error) => {
        setData(BACKUP_DATA);
        console.log(error);
      });
  }, []);

  return (
    <section className={isVisible ? "loaded" : ""} ref={refPL_Odin}>
      <ListHeader title={"The Odin Project"} />
      <SectionBody data={data} />
    </section>
  );
}

export default Odin;

const BACKUP_DATA = [
  {
    name: "Sign-up Form",
    url: "https://zuzoup.github.io/The-Odin-Project/Sign-up-Form/",
    repo: "https://github.com/zuzOup/The-Odin-Project/tree/main/Sign-up-Form",
    description:
      "A clean and responsive sign-up form built with HTML and CSS. Includes styling for input focus and validation states, with a background image and custom font.",
  },
  {
    name: "Admin Dashboard",
    url: "https://zuzoup.github.io/The-Odin-Project/Admin-Dashboard/",
    repo: "https://github.com/zuzOup/The-Odin-Project/tree/main/Admin-Dashboard",
    description:
      "A dashboard layout built with CSS Grid, featuring a sidebar, header, and main content sections. Focuses on layout structure and grid practice.",
  },
  {
    name: "Library",
    url: "https://zuzoup.github.io/The-Odin-Project/Library/",
    repo: "https://github.com/zuzOup/The-Odin-Project/tree/main/Library",
    description:
      "A simple library app for managing a list of books using JavaScript object constructors. Lets users add, display, update read status, and remove books.",
  },
  {
    name: "Tic-Tac-Toe",
    url: "https://zuzoup.github.io/The-Odin-Project/Tic-Tac-Toe",
    repo: "https://github.com/zuzOup/The-Odin-Project/tree/main/Tic-Tac-Toe",
    description:
      "A browser-playable Tic Tac Toe game built using JavaScript factory functions and the module pattern, emphasizing code organization, game logic separation, and interactive UI updates.",
  },
  {
    name: "Restaurant page",
    url: "https://zuzoup.github.io/The-Odin-Project/Restaurant-page/dist/",
    repo: "https://github.com/zuzOup/The-Odin-Project/tree/main/Restaurant-page",
    description:
      "A restaurant homepage using JavaScript and Webpack to dynamically render content tabs with Home, Menu, and Contact sections.",
  },
  {
    name: "Todo List",
    url: "https://zuzoup.github.io/The-Odin-Project/Todo-List/dist/",
    repo: "https://github.com/zuzOup/The-Odin-Project/tree/main/Todo-List",
    description:
      "A Webpack-built JavaScript todo app supporting multiple projects, task management, and localStorage persistence, with date handling via moment and date-fns.",
  },
  {
    name: "Weather App",
    url: "https://zuzoup.github.io/The-Odin-Project/Weather-App/",
    repo: "https://github.com/zuzOup/The-Odin-Project/tree/main/Weather-App",
    description:
      "A simple weather app using async/await to fetch data from Visual Crossing API, with Fahrenheit/Celsius toggle and dynamic styling based on conditions.",
  },
  {
    name: "Homepage",
    url: "https://zuzoup.github.io/The-Odin-Project/Homepage-responsive/",
    repo: "https://github.com/zuzOup/The-Odin-Project/tree/main/Homepage-responsive",
    description:
      "A responsive portfolio homepage built with advanced HTML and CSS, adapting smoothly across devices with polished layout and styling.",
  },
  {
    name: "CV Application",
    url: "https://sweet-manatee-d66f51.netlify.app/",
    repo: "https://github.com/zuzOup/The-Odin-Project/tree/main/CV-Application%2BTailwind",
    description:
      " A React CV builder with editable sections, using Tailwind CSS for styling and component-based state management. Creates downloadable PDFs.",
  },
  {
    name: "Memory Card",
    url: "https://reliable-fox-4542ce.netlify.app/",
    repo: "https://github.com/zuzOup/The-Odin-Project/tree/main/Memory-Cards",
    description:
      "A React memory game fetching images from an API with score tracking and randomized cards, using hooks and components.",
  },
  {
    name: "Shopping cart",
    url: "https://serene-kitten-aad087.netlify.app/",
    repo: "https://github.com/zuzOup/The-Odin-Project/tree/main/Shopping-Cart",
    description:
      "A React shopping cart app with product listing, quantity controls, cart updates, and multi-page navigation - fully tested and SPA-ready for deployment.",
  },
];
