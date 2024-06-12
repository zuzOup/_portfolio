import { PropTypes } from "prop-types";

function SectionHeader({ title, class_title }) {
  return (
    <span className="article_h2_span">
      <div className={`article_dots article_dots_${class_title}`}>
        <span className="smallDot"></span>
        <span className="bigDot"></span>
      </div>
      <h2>{title}</h2>
      <div className={`article_dots article_dots_${class_title}`}>
        <span className="bigDot"></span>
        <span className="smallDot"></span>
      </div>
    </span>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string,
  class_title: PropTypes.string,
};

export default SectionHeader;
