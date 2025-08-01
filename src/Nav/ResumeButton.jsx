import PropTypes from "prop-types";
import "./ResumeButton.css";

function ResumeButton({ mobile = "" }) {
  return (
    <a href="/Resume.pdf" target="_blank" id="nav_resume" className={mobile}>
      <div>
        <span>Résumé</span>
      </div>
    </a>
  );
}

ResumeButton.propTypes = {
  mobile: PropTypes.string,
};

export default ResumeButton;
