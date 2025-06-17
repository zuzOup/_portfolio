// https://codepen.io/hilwat/pen/BeemVX/
import PropTypes from "prop-types";

import "./Butt.css";

function Butt({ children, classs }) {
  return (
    <>
      <div className={`butt ${classs}`}>
        {children}
        <br />
      </div>
    </>
  );
}

export default Butt;

Butt.propTypes = { children: PropTypes.element, classs: PropTypes.string };
