import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";

import ScrollLock from "./ScrollLock";

import { list } from "../list";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { arrow_left, arrow_right, close } from "./Modal_svg";

import "./Modal.css";

function Modal({ index, onClose }) {
  let refScrollY = useRef(null);

  const [modalActive, setModalActive] = useState("");
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  useEffect(() => {
    function handleKeyDown(e) {
      switch (e.keyCode) {
        case 27: // Escape
          setModalActive("");
          onClose();
          break;
        case 37: // Left Arrow
          goPrev();
          break;
        case 39: // Right Arrow
          goNext();
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

  function buttonOnClose() {
    setModalActive("");
    onClose();
  }

  return (
    <div id="acc_modal">
      <div className={`modal_inner ${modalActive}`}>
        <div className="swiper-container">
          <button className={`arrow ${modalActive} left`} onClick={goPrev}>
            {arrow_left()}
          </button>

          <Swiper
            ref={swiperRef}
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            initialSlide={index}
            pagination={{ clickable: true }}
            grabCursor={true}
            allowTouchMove={true}
          >
            {list.map((item, i) => (
              <SwiperSlide key={i}>
                <img
                  src={`/certificates/${item.name}.png`}
                  alt={`${item.course} - ${item.name}`}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button className={`arrow ${modalActive} right`} onClick={goNext}>
            {arrow_right()}
          </button>
        </div>
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
