import SectionHeader from "../../Components/SectionHeader";

import "./AboutMe.css";


import AboutMe_text from "./AboutMe_text";
import AboutMe_photo from "./AboutMe_photo";

function AboutMe() {
  return (
    <section id="article_aboutMe">
      <SectionHeader title={"About Me"} class_title={"aboutMe"} />
      <span className="article_aboutMe_outherSpan">
        <AboutMe_text />
        <AboutMe_photo />
      </span>
    </section>
  );
}
export default AboutMe;
