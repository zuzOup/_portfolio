import SectionHeader from "../../Components/SectionHeader";
import Butt from "../../Components/Butt";
import Butt_inside from "../../Components/Butt_inside";

import Project_withImg from "./Project_withImg";
import Projects_Squares from "./Projects_Squares";

import { project_withImg, projects_square } from "./Projects-data";

import "./Projects.css";

import fadeInOnScroll_hook from "../../fadeInOnScroll_hook";

import { useRef } from "react";
import FadeInDiv from "../../Components/FadeInDiv";

function Projects() {
  const refProjectHeader = useRef();
  const isVisible = fadeInOnScroll_hook(refProjectHeader);

  const refSquares = useRef();
  const isVisible_squares = fadeInOnScroll_hook(refSquares);

  return (
    <section id="projects" className={isVisible ? "loaded" : ""}>
      <SectionHeader title={"Projects"} ref={refProjectHeader} />
      <div>
        {project_withImg.map((x, i) => {
          return <Project_withImg key={i} i={i} />;
        })}
      </div>
      <div className="squares" ref={refSquares}>
        {projects_square.map((x, i) => {
          return <Projects_Squares key={i} i={i} isVisible={isVisible_squares} />;
        })}
      </div>
      <FadeInDiv isVisible={isVisible_squares} delay={0.5}>
        <Butt className="projects">
          <a className="butt-btn projects" target="_blank" href="./project_list">
            <Butt_inside className="projects" text="Open Project List" />
          </a>
        </Butt>
      </FadeInDiv>
    </section>
  );
}
export default Projects;
