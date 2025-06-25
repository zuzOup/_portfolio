import SectionHeader from "../Components/SectionHeader";

import Personal from "./Personal";
import Odin from "./Odin";
import WesBos from "./WesBos";
import Codecademy from "./Codecademy";

import "./Project_list.css";
import PropTypes from "prop-types";

function Project_List({ isLoaded }) {
  return (
    <div id="project_list" className={isLoaded}>
      <SectionHeader title={"Projects List"} path={true} />
      <Personal className={isLoaded} />
      <Odin />
      <WesBos />
      <Codecademy />
    </div>
  );
}

export default Project_List;

Project_List.propTypes = {
  isLoaded: PropTypes.string,
};
