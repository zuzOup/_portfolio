import { useState, useEffect } from "react";
import { fetchDataMD } from "./helpers.jsx";

import ListHeader from "./ListHeader.jsx";
import SectionBody from "./SectionBody.jsx";

const conditions = (str) => {
  const newStr = str.split("**");
  newStr.shift();

  const desc = newStr
    .filter((x, i) => i % 2 !== 0)
    .map((x) => x.split("&nbsp; ")[1])
    .map((x) => x.split("\n")[0]);

  const newArr = newStr
    .filter((x, i) => i % 2 === 0)
    .map((x, i) => {
      const name = x.split("[")[1].split("]")[0];

      return {
        name: name.split("-").join(" "),
        repo: `https://github.com/zuzOup/The-Odin-Project/tree/main/${name}/`,
        url: x.split("(")[1].slice(0, -1),
        description: desc[i],
      };
    });

  console.log(newArr);

  return newArr;
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
