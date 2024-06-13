import { PropTypes } from "prop-types";

import "./SectionHeader.css";

function SectionHeader({ title, class_title }) {
  return (
    <div className="sectionHeader">
      <div className={`article_dots article_dots_${class_title}`}>
        <div className="smallDot"></div>
        <div className="bigDot"></div>
      </div>
      <h2>{title}</h2>
      <div className={`article_dots article_dots_${class_title}`}>
        <div className="bigDot"></div>
        <div className="smallDot"></div>
      </div>
    </div>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string,
  class_title: PropTypes.string,
};

export default SectionHeader;
