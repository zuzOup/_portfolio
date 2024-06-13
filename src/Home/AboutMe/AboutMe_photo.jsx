import PropTypes from "prop-types";
import { useState } from "react";

import Sparkle from "./Sparkle";

function AboutMe_photo() {
  const [isActive, setIsActive] = useState("");

  const leaveHandle = (e) => {
    if (
      e.relatedTarget.id !== "sparkle" &&
      e.relatedTarget.tagName !== "svg" &&
      e.relatedTarget.tagName !== "path"
    )
      setIsActive("");
  };

  return (
    <div className="photo">
      <div className="photo_frame">
        <img
          src="/photo.jpg"
          alt="Profile picture"
          id="profile_photo"
          className={isActive}
          onMouseEnter={() => {
            setIsActive("active");
          }}
          onMouseLeave={leaveHandle}
        />
      </div>
      <div id="frame1" className={isActive}></div>
      <div id="frame2" className={isActive}></div>
      {isActive === "active" && <Sparkle />}
    </div>
  );
}

export default AboutMe_photo;

AboutMe_photo.propTypes = { prop: PropTypes.any };
