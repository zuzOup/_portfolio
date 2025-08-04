import { useState, useEffect, useRef } from "react";

import ListHeader from "../ListHeader.jsx";
import SectionBody from "../SectionBody.jsx";
import useFadeInOnScroll_hook from "../../hooks/fadeInOnScroll_hook.js";

const getGitHubProjectDirs = (dirs) => {
  return dirs.map((x) => x.name).filter((x) => !x.includes(".md"));
};

const transformGitHubRepos = (projectData) => {
  const createDescription = (courseName, num) => {
    const group = courseName.split("-").join(" ");
    const number = parseFloat(num.split("-")[0]);
    return group + " - " + number + ".";
  };

  const extractProjectName = (fileName) => {
    const name = fileName.split("-");
    name.shift();
    return name.join(" ").split(".html")[0];
  };

  const projects = projectData.map((x) => {
    return x
      .filter((x) => !x.name.includes(".md"))
      .map((x) => {
        return {
          description: createDescription(x.path.split("/")[0], x.name),
          repo: x.html_url.replace(x.name, ""),
          url: `https://zuzoup.github.io/Wes-Bos-Projects/${x.path}`,
          name: extractProjectName(x.name),
        };
      });
  });

  return projects.reduce((acc, cur) => {
    return [...acc, ...cur];
  }, []);
};

function WesBos() {
  const [data, setData] = useState([]);

  const refPL_WB = useRef();
  const isVisible = useFadeInOnScroll_hook(refPL_WB);

  useEffect(() => {
    //fetch should have auth, but this is only frontend sooooo
    fetch("https://api.github.com/repos/zuzoup/Wes-Bos-Projects/contents")
      .then((res) => res.json())
      .then((data) =>
        getGitHubProjectDirs(data).map((x) =>
          fetch("https://api.github.com/repos/zuzoup/Wes-Bos-Projects/contents" + "/" + x)
        )
      )
      .then((url) => Promise.all(url))
      .then((res) => Promise.all(res.map((x) => x.json())))
      .then((data) => {
        setData(transformGitHubRepos(data));
      })
      .catch((error) => {
        setData(BACKUP_DATA);
        console.log(error);
      });
  }, []);

  return (
    <section className={isVisible ? "loaded" : ""} ref={refPL_WB}>
      <ListHeader title={"Wes Bos Projects"} />
      <SectionBody data={data} />
    </section>
  );
}

export default WesBos;

const BACKUP_DATA = [
  {
    description: "Beginner JS - 33.",
    repo: "https://github.com/zuzOup/Wes-Bos-Projects/blob/main/Beginner-JS/",
    url: "https://zuzoup.github.io/Wes-Bos-Projects/Beginner-JS/33-Etch-a-Sketch.html",
    name: "Etch a Sketch",
  },
  {
    description: "JavaScript 30 - 2.",
    repo: "https://github.com/zuzOup/Wes-Bos-Projects/blob/main/JavaScript-30/",
    url: "https://zuzoup.github.io/Wes-Bos-Projects/JavaScript-30/02-JS-and-CSS-Clock.html",
    name: "JS and CSS Clock",
  },
  {
    description: "JavaScript 30 - 3.",
    repo: "https://github.com/zuzOup/Wes-Bos-Projects/blob/main/JavaScript-30/",
    url: "https://zuzoup.github.io/Wes-Bos-Projects/JavaScript-30/03-CSS-Variables.html",
    name: "CSS Variables",
  },
  {
    description: "JavaScript 30 - 5.",
    repo: "https://github.com/zuzOup/Wes-Bos-Projects/blob/main/JavaScript-30/",
    url: "https://zuzoup.github.io/Wes-Bos-Projects/JavaScript-30/05-Flex-Panel-Gallery.html",
    name: "Flex Panel Gallery",
  },
  {
    description: "JavaScript 30 - 10.",
    repo: "https://github.com/zuzOup/Wes-Bos-Projects/blob/main/JavaScript-30/",
    url: "https://zuzoup.github.io/Wes-Bos-Projects/JavaScript-30/10-Hold-Shift-And-Check-Checkboxes.html",
    name: "Hold Shift And Check Checkboxes",
  },
  {
    description: "JavaScript 30 - 12.",
    repo: "https://github.com/zuzOup/Wes-Bos-Projects/blob/main/JavaScript-30/",
    url: "https://zuzoup.github.io/Wes-Bos-Projects/JavaScript-30/12-Key-Sequence-Detection.html",
    name: "Key Sequence Detection",
  },
  {
    description: "JavaScript 30 - 16.",
    repo: "https://github.com/zuzOup/Wes-Bos-Projects/blob/main/JavaScript-30/",
    url: "https://zuzoup.github.io/Wes-Bos-Projects/JavaScript-30/16-Mouse-Shadow.html",
    name: "Mouse Shadow",
  },
  {
    description: "JavaScript 30 - 22.",
    repo: "https://github.com/zuzOup/Wes-Bos-Projects/blob/main/JavaScript-30/",
    url: "https://zuzoup.github.io/Wes-Bos-Projects/JavaScript-30/22-Follow-Along-Lines.html",
    name: "Follow Along Lines",
  },
  {
    description: "JavaScript 30 - 24.",
    repo: "https://github.com/zuzOup/Wes-Bos-Projects/blob/main/JavaScript-30/",
    url: "https://zuzoup.github.io/Wes-Bos-Projects/JavaScript-30/24-Sticky-Nav.html",
    name: "Sticky Nav",
  },
];
