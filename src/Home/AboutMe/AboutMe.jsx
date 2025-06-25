import SectionHeader from "../../Components/SectionHeader";

import "./AboutMe.css";

import AboutMe_text from "./AboutMe_text";
import AboutMe_photo from "./AboutMe_photo";
import { useRef } from "react";
import fadeInOnScroll_hook from "../../fadeInOnScroll_hook";
import FadeInDiv from "../../Components/FadeInDiv";

function AboutMe() {
  const refAboutMe = useRef();
  const isVisible = fadeInOnScroll_hook(refAboutMe);

  return (
    <section id="aboutMe" className={isVisible ? "loaded" : ""}>
      <SectionHeader title={"About Me"} ref={refAboutMe} />
      <FadeInDiv className="content" isVisible={isVisible}>
        <AboutMe_text />
        <AboutMe_photo />
      </FadeInDiv>
    </section>
  );
}
export default AboutMe;
