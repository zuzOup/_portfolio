import { useState, useEffect, useRef } from "react";

import ListHeader from "../ListHeader.jsx";
import SectionBody from "../SectionBody.jsx";
import useFadeInOnScroll_hook from "../../hooks/fadeInOnScroll_hook.js";

const parseMarkdown = (str) => {
  const sections = str.split("**");
  sections.shift();

  const descriptions = sections
    .filter((_, i) => i % 2 !== 0)
    .map((x) => x.split("\n")[0])
    .map((x) => x.trim());

  const projects = sections
    .filter((_, i) => i % 2 === 0)
    .map((x) => x.split(" ").join("-"))
    .map((x) => {
      return x.includes("[") ? x.split("[")[1].split("]")[0] : x.split(":")[0];
    })
    .map((x, i) => {
      return {
        name: x.split("-").join(" "),
        repo: `https://github.com/zuzOup/Codecademy/tree/main/${x}/`,
        url: `https://zuzoup.github.io/Codecademy/${x}/`,
        description: descriptions[i],
      };
    });

  return projects;
};

function Codecademy() {
  const [data, setData] = useState([]);

  const refPL_CC = useRef();
  const isVisible = useFadeInOnScroll_hook(refPL_CC);

  useEffect(() => {
    //fetch should have auth, but this is only frontend sooooo
    fetch("https://api.github.com/repos/zuzoup/Codecademy/contents/README.md")
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
    <section className={isVisible ? "loaded" : ""} ref={refPL_CC}>
      <ListHeader title={"Codecademy"} />
      <SectionBody data={data} />
    </section>
  );
}

export default Codecademy;

const BACKUP_DATA = [
  {
    name: "Dashmoto's Arts and Crafts",
    repo: "https://github.com/zuzOup/Codecademy/tree/main/Dashmoto's-Arts-and-Crafts/",
    url: "https://zuzoup.github.io/Codecademy/Dashmoto's-Arts-and-Crafts/",
    description:
      "My very first project focused on building a simple website according to the provided design spec.",
  },
  {
    name: "Tea Cozy",
    repo: "https://github.com/zuzOup/Codecademy/tree/main/Tea-Cozy/",
    url: "https://zuzoup.github.io/Codecademy/Tea-Cozy/",
    description:
      "A website for a fictional cafe with more complex CSS styling and jump links.",
  },
  {
    name: "Fotomatic",
    repo: "https://github.com/zuzOup/Codecademy/tree/main/Fotomatic/",
    url: "https://zuzoup.github.io/Codecademy/Fotomatic/",
    description: "Fixing broken webpage.",
  },
  {
    name: "Find Your Hat",
    repo: "https://github.com/zuzOup/Codecademy/tree/main/Find-Your-Hat/",
    url: "https://zuzoup.github.io/Codecademy/Find-Your-Hat/",
    description: "An interactive terminal game - JS classes exercise",
  },
];
