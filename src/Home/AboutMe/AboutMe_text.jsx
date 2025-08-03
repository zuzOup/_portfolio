import AboutMe_slider from "./AboutMe_slider";
import useWindowSize from "../../hooks/useWindowSize";

import { getInitialMode } from "../../helpers/themeUtils";

function AboutMe_text() {
  const width = useWindowSize();
  const isTablet = width >= 678 && width <= 1024;

  return (
    <div className="text">
      <p>
        {isTablet && (
          <img
            src={getInitialMode()}
            alt="Profile picture"
            id="profile_photo_tablet"
            className="tablet"
          />
        )}
        Hi, I&apos;m Zuzana! I have a master&apos;s degree in food technology from UCT
        Prague, but recently I decided to leave the food industry and move into web
        development - a field where I can use my problem-solving skills while working on
        something more hands-on and creative.
      </p>
      <p>
        I&apos;ve taught myself through projects and courses like&nbsp;
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
        &nbsp;and&nbsp;
        <a href="https://www.theodinproject.com/" target="_blank">
          Full Stack JavaScript Path
          <span>&nbsp;from&nbsp;</span>
          The Odin Project
        </a>
        . You can find my certificates&nbsp;
        <a href="./accomplishments" target="_blank" className="here">
          here
        </a>
        .
      </p>
      <p>Here are a few technologies I&apos;ve been working with recently:</p>
      <AboutMe_slider />
    </div>
  );
}

export default AboutMe_text;
