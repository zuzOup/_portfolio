import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import ListHeader from "../ListHeader.jsx";
import SectionBody from "../SectionBody.jsx";

const transformGitHubRepos = (repos) => {
  const capitalizeWords = (words) => {
    return words.map((x) => x.charAt(0).toUpperCase() + x.substring(1));
  };

  const addOldVersionSuffix = (name) => {
    if (!name.includes("Old")) return name;

    return name.split("Old")[0] + "(Old version)";
  };

  const processedRepos = repos
    .filter((x) => x.name.includes("_"))
    .map((x) => {
      return {
        name: addOldVersionSuffix(
          capitalizeWords(x.name.substring(1).split("-")).join(" ")
        ),
        repo: x.html_url,
        url: x.homepage,
        description: x.description,
      };
    });
  return processedRepos;
};

function Personal({ className }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    //fetch should have auth, but this is only frontend sooooo
    fetch("https://api.github.com/users/ZuzOup/repos")
      .then((res) => res.json())
      .then((data) => {
        setData(transformGitHubRepos(data));
      })
      .catch((error) => {
        setData(transformGitHubRepos(BACKUP_DATA));
        console.log(error);
      });
  }, []);

  return (
    <section className={className}>
      <ListHeader title={"Personal projects"} />
      <SectionBody data={data} />
    </section>
  );
}

export default Personal;

Personal.propTypes = { className: PropTypes.string };

const BACKUP_DATA = [
  {
    name: "Blog",
    repo: "https://github.com/zuzOup/_blog",
    url: "https://na-rok-torontakama.web.app/",
    description: "Personal travel blog/journal. React app.",
  },
  {
    name: "Blog (Old version)",
    repo: "https://github.com/zuzOup/_blog-old-version",
    url: "https://zuzoup.github.io/_blog-old-version/",
    description: "Personal travel blog/journal. Old ver.",
  },
  {
    name: "Portfolio",
    repo: "https://github.com/zuzOup/_portfolio",
    url: "https://zuzanaoupicka.web.app/",
    description: "Portfolio. React app.",
  },
  {
    name: "Square Select",
    repo: "https://github.com/zuzOup/_square-select",
    url: "",
    description: "Modified version of ",
  },
  {
    name: "Text Editor",
    repo: "https://github.com/zuzOup/_text-editor",
    url: "https://na-rok-torontakama-editor.netlify.app/",
    description: "Article editor for my personal blog. React app + Firebase RTD .",
  },
  {
    name: "Text Editor (Old version)",
    repo: "https://github.com/zuzOup/_text-editor-old",
    url: "https://zuzoup.github.io/_text-editor-old/",
    description: "Old version of text editor for my blog (JS)",
  },
  {
    name: "Weather Cards",
    repo: "https://github.com/zuzOup/_weather-cards",
    url: "https://zuzoup.github.io/_weather-cards/",
    description: "CSS project - animated weather/forecast cards",
  },
  {
    name: "Wedding Gallery",
    repo: "https://github.com/zuzOup/_wedding-gallery",
    url: "https://zuzoup.github.io/_wedding-gallery/",
    description: "CSS + JSS photo gallery",
  },
];
