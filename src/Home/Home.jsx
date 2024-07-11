import { PropTypes } from "prop-types";

import Title from "./Title/Title";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
// import Contact from "./Contact";

function Home({ setRender }) {
  return (
    <>
      <Title />
      <AboutMe setRender={setRender} />
      <Projects setRender={setRender} />
      {/* <Contact /> */}
    </>
  );
}

export default Home;

Home.propTypes = {
  setRender: PropTypes.func,
};
