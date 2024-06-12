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
    <a href="./accomplishments" target="_self" className="article_aboutMe_here">
      here
    </a>
    .
  </p>
);

const text3 = <p>Here are a few technologies I&apos;ve been working with recently:</p>;

const stack = ["html", "css", "js", "figma", "npm", "react", "bootstrap", "firebase"];

function AboutMe_text() {
  return (
    <span className="article_aboutMe_text">
      {text1}
      {text2}
      {text3}
      <ul className="article_aboutMe_stack">
        {stack.map((item) => {
          return (
            <li key={item} style={{ backgroundImage: `url(/stack/${item}.svg)` }}></li>
          );
        })}
      </ul>
    </span>
  );
}

export default AboutMe_text;
