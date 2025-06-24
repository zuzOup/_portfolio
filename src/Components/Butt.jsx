// https://codepen.io/hilwat/pen/BeemVX/
import PropTypes from "prop-types";

import "./Butt.css";

function Butt({ children, className }) {
  return (
    <div className={`butt ${className}`}>
      {children}
      <br />
    </div>
  );
}

export default Butt;

Butt.propTypes = { children: PropTypes.element, className: PropTypes.string };
