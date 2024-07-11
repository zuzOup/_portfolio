import SectionHeader from "../Components/SectionHeader";

import Personal from "./Personal";
import Odin from "./Odin";
import WesBos from "./WesBos";
import Codecademy from "./Codecademy";

import "./Project_list.css";

function Project_List() {
  return (
    <div id="project_list">
      <SectionHeader title={"Projects archive"} />
      <Personal />
      <Odin />
      <WesBos />
      <Codecademy />
    </div>
  );
}

export default Project_List;
