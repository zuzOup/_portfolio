import { useRef, useState } from "react";

import PropTypes from "prop-types";

function AsideRight({ delayAside }) {
  const [animating, setAnimating] = useState(false);

  const timeoutRef = useRef(null);

  const mail = "zuzanaoupicka@gmail.com";

  const triggerAnimation = async () => {
    if (animating) return;

    setAnimating(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setAnimating(false);
    }, 1700);
  };

  return (
    <div id="aside_right" style={{ transitionDelay: `${delayAside}ms` }}>
      <a
        href="mailto:zuzanaoupicka@gmail.com"
        target="_blank"
        onMouseEnter={triggerAnimation}
        className={`${animating ? "animate" : ""}`}
      >
        {mail.split("").map((x, i) => (
          <span key={i}>{x}</span>
        ))}
      </a>
    </div>
  );
}

AsideRight.propTypes = {
  delayAside: PropTypes.number,
};

export default AsideRight;
