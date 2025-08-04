import PropTypes from "prop-types";

import SectionHeader from "../Components/SectionHeader";

import Personal from "./projects/Personal";
import Odin from "./projects/Odin";
import WesBos from "./projects/WesBos";
import Codecademy from "./projects/Codecademy";

import "./Project_list.css";

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
