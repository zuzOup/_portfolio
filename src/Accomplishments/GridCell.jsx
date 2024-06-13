import { useState } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

import Cover from "./Cover";

import Modal from "./modal/Modal";

function GridCell({ index, course, name }) {
  const src = `./certificates/${name}.png`;
  const alt = `${course} - ${name}`;

  const [isActive, setIsActive] = useState("");
  const [showModal, setShowModal] = useState(false);

  const hover = (e) => {
    e.stopPropagation();
    setIsActive("active");
  };

  const hoverClear = () => {
    setIsActive("");
  };

  const handleClickButton = (e) => {
    e.stopPropagation();
    setShowModal(true);
  };

  const handleClickModal = () => {
    hoverClear();
    setTimeout(() => setShowModal(false), 500);
  };

  return (
    <>
      <button onMouseEnter={hover} onMouseLeave={hoverClear} onClick={handleClickButton}>
        <img src={src} alt={alt} className="imgCell"></img>
        <Cover course={course} name={name} isActive={isActive} />
      </button>
      {showModal &&
        createPortal(<Modal index={index} onClose={handleClickModal} />, document.body)}
    </>
  );
}

GridCell.propTypes = {
  course: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
};

export default GridCell;
