import PropTypes from "prop-types";
import React from "react";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import { list } from "../list";

const timeout = 1100;

function Gallery({ index, arrow, modalActive }) {
  return (
    <TransitionGroup
      component="div"
      className={`gallery ${modalActive}`}
      childFactory={(child) =>
        React.cloneElement(child, {
          classNames: arrow ? "right-to-left" : "left-to-right",
          timeout: timeout,
        })
      }
    >
      <CSSTransition classNames="right-to-left" key={index} timeout={timeout}>
        <img
          src={`./certificates/${list[index].name}.png`}
          alt={`${list[index].course} - ${list[index].name}`}
        />
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Gallery;

Gallery.propTypes = {
  index: PropTypes.number,
  arrow: PropTypes.bool,
  modalActive: PropTypes.string,
};
