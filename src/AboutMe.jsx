import { useState } from "react";

import SectionHeader from "./SectionHeader";
import Sparkle from "./Sparkle";

import "./AboutMe.css";

const text1 = (
  <p>
    Hello, Zuzana here! I&apos;m a former food technologist with a master&apos;s degree
    from UCT Prague. Recently, I shifted away from a food industry to pursue a more
    creatively fulfilling path. I taught myself front-end web development, where I can
    blend scientific approach with digital creativity.
  </p>
);

const text2 = (
  <p>
    I&apos;ve completed several courses to enhance my skills and broaden my knowledge.
    Some of the courses I&apos;ve take includes &nbsp;
    <a href="https://beginnerjavascript.com/  " target="_blank">
      Wes Bos&apos; JavaScript
    </a>
    &nbsp;and&nbsp;
    <a href="https://advancedreact.com/" target="_blank">
      React
    </a>{" "}
    programs, a<i>samsing samsing</i> course by <i>někdo smart</i> on Udemy <i>(asi)</i>
    ,&nbsp;
    <a
      href="https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
      target="_blank"
    >
      Front-End Career Path <span>from</span> Codecademy
    </a>
    &nbsp;and I&apos;ve also finished&nbsp;
    <a href="https://www.theodinproject.com/" target="_blank">
      Full Stack JavaScript Path
      <span>&nbsp;from&nbsp;</span>
      The Odin Project
    </a>
    . Certificates of completion can be found&nbsp;
    <a href="./accomplishments" target="_blank" className="article_aboutMe_here">
      here
    </a>
    .
  </p>
);

const text3 = <p>Here are a few technologies I&apos;ve been working with recently:</p>;

const stack = ["html", "css", "js", "figma", "npm", "react", "bootstrap", "firebase"];

function AboutMe() {
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive((state) => !state);
  }

  return (
    <section id="article_aboutMe">
      <SectionHeader title={"About Me"} class_title={"aboutMe"} />
      <span className="article_aboutMe_outherSpan">
        <span className="article_aboutMe_text">
          {text1}
          {text2}
          {text3}
          <ul className="article_aboutMe_stack">
            {stack.map((item) => {
              return (
                <li
                  key={item}
                  style={{ backgroundImage: `url(/stack/${item}.svg)` }}
                ></li>
              );
            })}
          </ul>
        </span>
        <span className="article_aboutMe_photo">
          <span className="photo_frame">
            <img
              src="/photo.jpg"
              alt="Profile picture"
              id="profile_photo"
              className={isActive ? "photo_active" : "false"}
              onMouseEnter={toggle}
              onMouseLeave={toggle}
            />
          </span>
          <div id="photo_frame1" className={isActive ? "frame1_active" : ""}></div>
          <div id="photo_frame2" className={isActive ? "frame2_active" : ""}></div>
          {isActive && <Sparkle />}
        </span>
      </span>
    </section>
  );
}
export default AboutMe;
