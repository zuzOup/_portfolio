import PropTypes from "prop-types";

function Butt_inside({ className, text }) {
  return (
    <>
      <div className={`butt-txt ${className}`}>{text}</div>
      <span className={`butt-inner ${className}`}>
        <span className="butt-blobs">
          <span className="butt-blobs__blob"></span>
          <span className="butt-blobs__blob"></span>
          <span className="butt-blobs__blob"></span>
          <span className="butt-blobs__blob"></span>
        </span>
      </span>
    </>
  );
}

export default Butt_inside;

Butt_inside.propTypes = { className: PropTypes.string, text: PropTypes.string };
