import { useEffect, useState } from "react";

import "./Title.css";
import "./Title_bounce.css";

import Carousel from "./Carousel";
import GetInTouch from "../../Components/GetInTouch";

function Title() {
  const [animationStart, setAnimationStart] = useState({ dot: "", em1: "", em2: "" });

  useEffect(() => {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    async function runAnimations() {
      await delay(300);
      setAnimationStart((x) => ({ ...x, dot: "animate" }));

      await delay(1000);
      setAnimationStart((x) => ({ ...x, em1: "animate" }));
      await delay(620);
      setAnimationStart((x) => ({ ...x, em2: "animate" }));
    }

    runAnimations();
  }, []);

  return (
    <section id="title">
      <h3>Hi, my name is</h3>
      <h1>
        <em className={animationStart.em1}>Zuzana</em>{" "}
        <em className={animationStart.em2}>Oupická</em>
        <span id="dot_i" className={animationStart.dot}></span>
      </h1>
      <p>
        I&apos;m a <b>front-end developer</b> located in Canada, exploring the initial
        phases of my career path. I&apos;m making progress on a daily basis as I&apos;m
        highly motivated to constantly develop my skills and grow professionally.
      </p>
      <div id="carousel">
        <p className="p-carousel">I specialise in</p>
        <Carousel />
      </div>
      <GetInTouch size={"big"} />
    </section>
  );
}
export default Title;
