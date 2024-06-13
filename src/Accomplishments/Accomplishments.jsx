import SectionHeader from "../Components/SectionHeader";

import GridCell from "./GridCell";

import { list } from "./list";

import "./Accomplishments.css";

function Accomplishments() {
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
          />
        ))}
      </div>
    </section>
  );
}

export default Accomplishments;
