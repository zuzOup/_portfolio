import { useEffect, useState } from "react";

import "./Title.css";
import "./Title_bounce.css";

import Carousel from "./Carousel";

import Butt from "../../Components/Butt";
import Butt_inside from "../../Components/Butt_inside";

function Title() {
  const [animationStart, setAnimationStart] = useState({ dot: "", Z: "", O: "" });

  useEffect(() => {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    async function runAnimations() {
      await delay(300);
      setAnimationStart((x) => ({ ...x, dot: "animate" }));
      await delay(1000);
      setAnimationStart((x) => ({ ...x, Z: "animate" }));
      await delay(620);
      setAnimationStart((x) => ({ ...x, O: "animate" }));
    }

    runAnimations();
  }, []);

  return (
    <section id="title">
      <h3>Hi, my name is</h3>
      <div className="h1-container">
        <h1 className={animationStart.Z}>Zuzana</h1>
        <h1>&nbsp;</h1>
        <h1 className={animationStart.O}>Oupická</h1>
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
      <Butt classs="title">
        <a className="butt-btn title" target="_blank" href="./#contact">
          <Butt_inside classs="title" text="Get in touch!" />
        </a>
      </Butt>
    </section>
  );
}
export default Title;
