import { useEffect } from "react";

import SectionHeader from "../Components/SectionHeader";

import GridCell from "./GridCell";

import { list } from "./list";

import "./Accomplishments.css";

function Accomplishments() {
  useEffect(() => {
    list.forEach((x) => {
      const img = new Image();
      img.src = `/certificates/${x.name}.png`;
    });
  }, []);

  return (
    <section id="accomplishments">
      <SectionHeader title={"Accomplishments"} />
      <div id="acc-content">
        {list.map((certificate, i) => (
          <GridCell
            key={i}
            index={i}
            course={certificate.course}
            name={certificate.name}
            svg={certificate.svg}
          />
        ))}
      </div>
    </section>
  );
}

export default Accomplishments;
