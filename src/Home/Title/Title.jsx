import { PropTypes } from "prop-types";

import "./Title.css";
import "./Title_bounce.css";

import Carousel from "./Carousel";

import Butt from "../../Components/Butt";
import Butt_inside from "../../Components/Butt_inside";

import useAnimationStart from "./useAnimationStart.hook";

function Title({ isLoaded }) {
  const animationStart = useAnimationStart(isLoaded);

  return (
    <section id="title" className={isLoaded}>
      <h3>Hi, my name is</h3>
      <div className="h1-container">
        <h1>
          <span className={animationStart.Z}>Zuzana</span>{" "}
          <span className={animationStart.O}>Oupická</span>
        </h1>
        <div id="dot_i_container" className={animationStart.dot}>
          <div id="dot_i"></div>
        </div>
      </div>
      <p>
        I&apos;m a <b>front-end developer</b> based in Canada, exploring the initial
        phases of my career path. I spend most of my time working on UI development and growing my skills through hands-on work.
      </p>
      <div id="carousel">
        <p className="p-carousel">I specialise in</p>
        <Carousel />
      </div>
      <Butt className="title">
        <a className="butt-btn title" href="./#contact">
          <Butt_inside className="title" text="Get in touch!" />
        </a>
      </Butt>
    </section>
  );
}
export default Title;

Title.propTypes = {
  isLoaded: PropTypes.string,
};
