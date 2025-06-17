import PropTypes from "prop-types";
import { useState } from "react";

function NavItem({ text, i, scroll }) {
  const [isHovered, setIsHovered] = useState(false);

  let isLeaving = false;

  const handleMouseEnter = () => {
    setIsHovered("hovered");
  };
  const handleMouseLeave = async () => {
    if (isLeaving) return;
    isLeaving = true;

    setIsHovered("exit");
    await new Promise((resolve) => setTimeout(resolve, 50)); // Delay for exit animation
    setIsHovered("false");

    isLeaving = false;
  };

  return (
    <>
      <div className={`nav_dots nav_dots_left nav_dots${i} ${isHovered}`}></div>
      <button
        onClick={scroll}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </button>
      <div className={`nav_dots nav_dots_right nav_dots${i} ${isHovered}`}></div>
    </>
  );
}

export default NavItem;

NavItem.propTypes = {
  text: PropTypes.string,
  i: PropTypes.number,
  scroll: PropTypes.func,
};
