import "./Title.css";

import Carousel from "./Carousel";

function Title() {
  function button(e) {
    e.target.classList.add("animationEnd");
    e.target.addEventListener(
      "animationend",
      () => {
        e.target.classList.remove("animationEnd");
      },
      { once: true }
    );
  }

  return (
    <section id="title">
      <h3>Hi, my name is</h3>
      <h1>
        Zuzana Oupická<span className="dot_i"></span>
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
      <a href="mailto:zuzanaoupicka@gmail.com" target="_blank" onMouseLeave={button}>
        Get in touch!
      </a>
    </section>
  );
}
export default Title;
