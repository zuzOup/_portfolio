import PropTypes from "prop-types";
import "./GetInTouch.css";

function GetInTouch({ size }) {
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
    <a
      href="mailto:zuzanaoupicka@gmail.com"
      target="_blank"
      onMouseLeave={button}
      className={`getInTouch ${size}`}
    >
      Get in touch!
    </a>
  );
}

export default GetInTouch;

GetInTouch.propTypes = { size: PropTypes.string };
