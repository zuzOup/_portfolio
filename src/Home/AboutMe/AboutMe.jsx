import { PropTypes } from "prop-types";

import SectionHeader from "../../Components/SectionHeader";

import "./AboutMe.css";

import AboutMe_text from "./AboutMe_text";
import AboutMe_photo from "./AboutMe_photo";

function AboutMe({ setRender }) {
  return (
    <section id="aboutMe">
      <SectionHeader title={"About Me"} />
      <div className="content">
        <AboutMe_text setRender={setRender} />
        <AboutMe_photo />
      </div>
    </section>
  );
}
export default AboutMe;

AboutMe.propTypes = {
  setRender: PropTypes.func,
};
