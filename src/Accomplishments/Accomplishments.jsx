import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import SectionHeader from "../Components/SectionHeader";
import GridCell from "./GridCell";

import { list } from "./list";

import "./Accomplishments.css";

function Accomplishments({ isLoaded }) {
  const [loadedCount, setLoadedCount] = useState(0);

  const handleImgLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  const allLoaded = loadedCount === list.length;

  useEffect(() => {
    list.forEach((x) => {
      const img = new Image();
      img.src = `/certificates/${x.name}.png`;
    });
  }, []);

  return (
    <section id="accomplishments" className={isLoaded}>
      <SectionHeader title={"Accomplishments"} />
      <div id="acc-content">
        {list.map((certificate, i) => (
          <GridCell
            key={i}
            index={i}
            course={certificate.course}
            name={certificate.name}
            onImgLoad={handleImgLoad}
            allLoaded={allLoaded}
          />
        ))}
      </div>
    </section>
  );
}

export default Accomplishments;

Accomplishments.propTypes = {
  isLoaded: PropTypes.string,
};
