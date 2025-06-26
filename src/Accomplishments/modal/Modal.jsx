import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";

import Gallery from "./Gallery";
import ScrollLock from "./ScrollLock";

import { list } from "../list";

import "./Modal.css";
import { arrow_left, arrow_right, close } from "./Modal_svg";

function Modal({ index, onClose }) {
  let refScrollY = useRef(null);

  const [imgPath, setImgPath] = useState(index);
  const [arrow, setArrow] = useState(true);
  const [modalActive, setModalActive] = useState("");

  useEffect(() => {
    function handleKeyDown(e) {
      switch (e.keyCode) {
        case 27: // Escape
          setModalActive("");
          onClose();
          break;
        case 37: // Left Arrow
          leftButton();
          break;
        case 39: // Right Arrow
          rightButton();
          break;
        default:
          break;
      }
    }
    setModalActive("active");

    window.addEventListener("keydown", handleKeyDown);

    refScrollY.current = window.scrollY;
    ScrollLock.block(refScrollY.current);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      ScrollLock.allow();
      window.scroll({ top: refScrollY.current, left: 0, behavior: "instant" });
    };
  }, [onClose]);

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
        <span>
          <button className={`arrow ${modalActive} left`} onClick={leftButton}>
            {arrow_left()}
          </button>
          <Gallery index={imgPath} arrow={arrow} modalActive={modalActive} />
          <button className={`arrow ${modalActive} right`} onClick={rightButton}>
            {arrow_right()}
          </button>
        </span>
        <button className={`close ${modalActive}`} onClick={buttonOnClose}>
          {close()}
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
