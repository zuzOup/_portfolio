import PropTypes from "prop-types";
import { useState } from "react";

import Sparkle from "./Sparkle";

function AboutMe_photo() {
  const [isActive, setIsActive] = useState(false);

  return (
    <span className="article_aboutMe_photo">
      <span className="photo_frame">
        
        <img
          src="/photo.jpg"
          alt="Profile picture"
          id="profile_photo"
          className={isActive ? "photo_active" : "false"}
          onMouseEnter={() => {
            setIsActive(true);
          }}
          onMouseLeave={() => {
            setIsActive(false);
          }}
        />
      </span>
      <div id="photo_frame1" className={isActive ? "frame1_active" : ""}></div>
      <div id="photo_frame2" className={isActive ? "frame2_active" : ""}></div>
      {isActive && <Sparkle />}
    </span>
  );
}

export default AboutMe_photo;

AboutMe_photo.propTypes = { prop: PropTypes.any };
