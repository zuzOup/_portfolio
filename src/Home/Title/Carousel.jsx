import { useEffect, useState } from "react";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { delay_carousel } from "../../delays";

const arr = ["HTML", "CSS", "JS", "TS", "React"];

function Carousel() {
  const [index, setIndex] = useState(0);
  const timeout = delay_carousel;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => {
        if (index + 1 === arr.length) {
          return 0;
        } else {
          return (index += 1);
        }
      });
    }, timeout);
    return () => clearInterval(interval);
  });

  return (
    <TransitionGroup>
      <CSSTransition classNames="carousel" key={index} timeout={timeout}>
        <div className={`carousel${index % 5} carousel`}>{arr[index]}</div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Carousel;
