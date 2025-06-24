import { useState, useEffect } from "react";
import { fetchDataMD } from "./helpers.jsx";

import ListHeader from "./ListHeader.jsx";
import SectionBody from "./SectionBody.jsx";

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

  useEffect(() => {
    fetchDataMD(
      "https://api.github.com/repos/zuzoup/The-Odin-Project/contents/README.md",
      setData,
      conditions
    );
  }, []);

  return (
    <section>
      <ListHeader title={"The Odin Project"} />
      <SectionBody data={data} />
    </section>
  );
}

export default Odin;
