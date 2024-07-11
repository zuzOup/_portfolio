import { PropTypes } from "prop-types";

function ListHeader({ title }) {
  return (
    <div className="listHeader">
      <h3>{title}</h3>
      <div className="article_dots">
        <div className="bigDot"></div>
        <div className="smallDot"></div>
      </div>
    </div>
  );
}

ListHeader.propTypes = {
  title: PropTypes.string,
};

export default ListHeader;
