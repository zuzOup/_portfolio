import "./Title.css";

import Carousel from "./Carousel";

function Title() {
  function button(e) {
    e.target.classList.add("article_title_link_out");
    e.target.addEventListener(
      "animationend",
      () => {
        e.target.classList.remove("article_title_link_out");
      },
      { once: true }
    );
  }

  return (
    <section id="article_title">
      <h3>Hi, my name is</h3>
      <h1>
        Zuzana Oupická<span className="article_title_dotOveri"></span>
      </h1>
      <p>
        I&apos;m a <b>front-end developer</b> located in Canada, exploring the initial
        phases of my career path. I&apos;m making progress on a daily basis as I&apos;m
        highly motivated to constantly develop my skills and grow professionally.
      </p>

      <p className="article_title_spec">
        I specialise in{" "}
        <span id="carousel">
          <Carousel />
        </span>
      </p>

      <a
        id="article_title_link"
        href="mailto:zuzanaoupicka@gmail.com"
        target="_blank"
        onMouseLeave={button}
      >
        Get in touch!
      </a>
    </section>
  );
}
export default Title;
