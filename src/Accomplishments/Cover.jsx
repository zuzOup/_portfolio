import PropTypes from "prop-types";

function Cover({ course, name, isActive }) {
  return (
    <>
      <div className={`cover_text ${isActive}`}>
        <div className="cover_text-inner">
          <h4>{course}</h4>
          <h5>{name}</h5>
        </div>
      </div>
      <div className={`cover ${isActive}`}></div>
    </>
  );
}

export default Cover;

Cover.propTypes = {
  course: PropTypes.string,
  name: PropTypes.string,
  isActive: PropTypes.string,
};
