import { useState, useEffect, useRef } from "react";
import { fetchDataMD } from "./helpers.jsx";

import ListHeader from "./ListHeader.jsx";
import SectionBody from "./SectionBody.jsx";
import useFadeInOnScroll_hook from "../hooks/fadeInOnScroll_hook.js";

const conditions = (str) => {
  const newStr = str.split("###");
  newStr.shift();

  return newStr.reduce((acc, cur) => {
    if (cur == undefined) return acc;

    const arr = cur.split("\n");

    const name = arr[0].split("]")[0].split("[")[1];
    const description = arr[2].split("**").join("");
    const repo = arr[1].split("(")[1].split(")")[0];
    const url = arr[0].split("(")[1].split(")")[0];

    return [...acc, { name, url, repo, description }];
  }, []);
};

function Odin() {
  const [data, setData] = useState([]);

  const refPL_Odin = useRef();
  const isVisible = useFadeInOnScroll_hook(refPL_Odin);

  useEffect(() => {
    fetchDataMD(
      "https://api.github.com/repos/zuzoup/The-Odin-Project/contents/README.md",
      setData,
      conditions
    );
  }, []);

  return (
    <section className={isVisible ? "loaded" : ""} ref={refPL_Odin}>
      <ListHeader title={"The Odin Project"} />
      <SectionBody data={data} />
    </section>
  );
}

export default Odin;
