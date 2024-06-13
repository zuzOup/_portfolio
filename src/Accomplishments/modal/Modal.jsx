import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";

import Gallery from "./Gallery";
import ScrollLock from "./ScrollLock";

import { list } from "../list";

import "./Modal.css";

const color = "#005249";

function Modal({ index, onClose }) {
  let refScrollY = useRef(null);

  const [imgPath, setImgPath] = useState(index);
  const [arrow, setArrow] = useState(true);
  const [modalActive, setModalActive] = useState("");

  useEffect(() => {
    list.forEach((x) => {
      const img = new Image();
      img.src = `./certificates/${x.name}.png`;
    });
  }, []);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.keyCode === 27) {
        setModalActive("");
        onClose();
      }
    }
    setModalActive("active");

    window.addEventListener("keydown", handleKeyDown);

    refScrollY.current = window.scrollY;
    ScrollLock.block(refScrollY.current);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      ScrollLock.allow();
      window.scrollTo(0, refScrollY.current);
    };
  }, [onClose]);

  function outsideModalClick(e) {
    if (e.target === e.currentTarget) {
      setModalActive("");
      onClose();
    }
  }

  function leftButton() {
    setImgPath((currentImgPath) => {
      return currentImgPath === 0 ? list.length - 1 : currentImgPath - 1;
    });
    setArrow(true);
  }

  function rightButton() {
    setImgPath((currentImgPath) => {
      return currentImgPath === list.length - 1 ? 0 : currentImgPath + 1;
    });

    setArrow(false);
  }

  function buttonOnClose() {
    setModalActive("");
    onClose();
  }

  return (
    <div id="acc_modal">
      <div className={`modal_inner ${modalActive}`}>
        <span onClick={outsideModalClick}>
          <button className={`arrow ${modalActive} left`} onClick={leftButton}>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke={color}
              strokeWidth="1"
              strokeLinecap="square"
              strokeLinejoin="miter"
              fill="none"
              color={color}
            >
              <path d="M10.5 15l-3-3 3-3"></path> <path d="M16.5 12H9"></path>
              <path strokeLinecap="round" d="M7.5 12H9"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </button>
          <Gallery index={imgPath} arrow={arrow} modalActive={modalActive} />
          <button className={`arrow ${modalActive} right`} onClick={rightButton}>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke={color}
              strokeWidth="1"
              strokeLinecap="square"
              strokeLinejoin="miter"
              fill="none"
              color={color}
            >
              <path d="M13.5 9l3 3-3 3"></path> <path d="M7.5 12H15"></path>
              <path strokeLinecap="round" d="M16.5 12H15"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </button>
        </span>
        <button className={`close ${modalActive}`} onClick={buttonOnClose}>
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke={color}
            strokeWidth="1"
            strokeLinecap="square"
            strokeLinejoin="miter"
            fill="none"
            color={color}
          >
            <path d="M15.5355339 15.5355339L8.46446609 8.46446609M15.5355339 8.46446609L8.46446609 15.5355339"></path>{" "}
            <path d="M4.92893219,19.0710678 C1.02368927,15.1658249 1.02368927,8.83417511 4.92893219,4.92893219 C8.83417511,1.02368927 15.1658249,1.02368927 19.0710678,4.92893219 C22.9763107,8.83417511 22.9763107,15.1658249 19.0710678,19.0710678 C15.1658249,22.9763107 8.83417511,22.9763107 4.92893219,19.0710678 Z"></path>{" "}
          </svg>
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  index: PropTypes.number,
  onClose: PropTypes.func,
};

export default Modal;
