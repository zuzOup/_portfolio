import React, { useState, useRef } from "react";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { delay_carousel } from "../../helpers/delays";

const arr = ["HTML", "CSS", "JS", "TS", "React"];

function Carousel() {
  const [currentItem, setCurrentItem] = useState(arr[0]);
  const timeout = delay_carousel;
  const nodeRefs = useRef({});

  // Create a ref for the current item
  const getNodeRef = (key) => {
    if (!nodeRefs.current[key]) {
      nodeRefs.current[key] = React.createRef();
    }
    return nodeRefs.current[key];
  };

  const nextItem = () => {
    const currentIndex = arr.indexOf(currentItem);
    const nextIndex = (currentIndex + 1) % arr.length;
    setCurrentItem(arr[nextIndex]);
  };

  // Set up interval
  React.useEffect(() => {
    const interval = setInterval(nextItem, timeout);
    return () => clearInterval(interval);
  }, [currentItem, timeout]); // eslint-disable-line

  return (
    <TransitionGroup>
      <CSSTransition
        classNames="carousel"
        key={currentItem}
        timeout={timeout}
        nodeRef={getNodeRef(currentItem)}
      >
        <div
          ref={getNodeRef(currentItem)}
          className={`carousel${arr.indexOf(currentItem) % 5} carousel`}
        >
          {currentItem}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Carousel;
