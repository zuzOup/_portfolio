import { PropTypes } from "prop-types";

import { useHistory } from "react-router-dom";

import { stack_svg } from "./stack_SVG";

const stack = ["html", "css", "js", "react", "npm", "tailwind", "firebase"];
// , "html", "css", "js", "ts","react", "npm","figma", "mongo", "bootstrap", "tailwind","node","mui","styled","sass","graphQL"

function AboutMe_text() {
  const history = useHistory();
  return (
    <div className="text">
      <p>
        Hello, Zuzana here! I&apos;m a former food technologist with a master&apos;s
        degree from UCT Prague. Recently, I shifted away from a food industry to pursue a
        more creatively fulfilling path. I taught myself front-end web development, where
        I can blend scientific approach with digital creativity.
      </p>
      <p>
        I&apos;ve completed several courses to enhance my skills and broaden my knowledge.
        Some of the courses I&apos;ve take includes &nbsp;
        <a href="https://beginnerjavascript.com/  " target="_blank">
          Wes Bos&apos; JavaScript
        </a>
        &nbsp;and&nbsp;
        <a href="https://advancedreact.com/" target="_blank">
          React
        </a>
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
        <button
          onClick={() => {
            scrollTo(0, 0);
            history.push("/accomplishments");
          }}
          className="here"
        >
          here
        </button>
        .
      </p>
      <p>Here are a few technologies I&apos;ve been working with recently:</p>
      <ul className="stack">
        {stack.map((item) => {
          return <li key={item}>{stack_svg(item)}</li>;
        })}
      </ul>
    </div>
  );
}

export default AboutMe_text;

AboutMe_text.propTypes = {
  setRender: PropTypes.func,
};
