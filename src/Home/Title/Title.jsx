import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

import "./Title.css";
import "./Title_bounce.css";

import Carousel from "./Carousel";

import Butt from "../../Components/Butt";
import Butt_inside from "../../Components/Butt_inside";

import { delay_bounce } from "../../helpers/delays";

function Title({ isLoaded }) {
  const [animationStart, setAnimationStart] = useState({ dot: "", Z: "", O: "" });

  useEffect(() => {
    const wait = (ms) => new Promise((res) => setTimeout(res, ms));

    async function runAnimations() {
      await wait(300 + delay_bounce);
      setAnimationStart((x) => ({ ...x, dot: "animate" }));
      await wait(1000);
      setAnimationStart((x) => ({ ...x, Z: "animate" }));
      await wait(620);
      setAnimationStart((x) => ({ ...x, O: "animate" }));
    }

    isLoaded && runAnimations();
  }, [isLoaded]);

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
        I&apos;m a <b>front-end developer</b> located in Canada, exploring the initial
        phases of my career path. I&apos;m making progress on a daily basis as I&apos;m
        highly motivated to constantly develop my skills and grow professionally.
      </p>
      <div id="carousel">
        <p className="p-carousel">I specialise in</p>
        <Carousel />
      </div>
      <Butt className="title">
        <a className="butt-btn title" target="_blank" href="./#contact">
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
