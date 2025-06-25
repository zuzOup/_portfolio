import { useRef } from "react";
import PropTypes from "prop-types";

function ImgCell({ src, alt }) {
  const imgRef = useRef(null);

  const handleLoad = () => {
    if (imgRef.current) {
      imgRef.current.classList.add("loaded");
    }
  };

  return <img src={src} alt={alt} ref={imgRef} onLoad={handleLoad} />;
}

export default ImgCell;

ImgCell.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
