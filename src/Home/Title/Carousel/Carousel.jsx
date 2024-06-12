import { useEffect, useState } from "react";

import { TransitionGroup, CSSTransition } from "react-transition-group";

const arr = ["HTML", "CSS", "JS", "React"];

function Carousel() {
  const [index, setIndex] = useState(0);
  const timeout = 3000;

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

{
  /* <span className="article_title_span_middle article_title_span_3">HTML</span>; */
}

export default Carousel;
