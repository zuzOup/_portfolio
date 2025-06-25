import PropTypes from "prop-types";

import { forwardRef } from "react";

import "./SectionHeader.css";

function SectionHeaderComponent({ title }, ref) {
  return (
    <div className="sectionHeader">
      <div className="article_dots">
        <div className="smallDot"></div>
        <div className="bigDot"></div>
      </div>
      <h2 ref={ref}>{title}</h2>
      <div className="article_dots">
        <div className="bigDot"></div>
        <div className="smallDot"></div>
      </div>
    </div>
  );
}

const SectionHeader = forwardRef(SectionHeaderComponent);

SectionHeader.propTypes = {
  title: PropTypes.string,
};

export default SectionHeader;
