import PropTypes from "prop-types";

function Butt_inside({ classs, text }) {
  return (
    <>
      <div className={`butt-txt ${classs}`}>{text}</div>
      <span className={`butt-inner ${classs}`}>
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

Butt_inside.propTypes = { classs: PropTypes.string, text: PropTypes.string };
