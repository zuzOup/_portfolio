import PropTypes from "prop-types";
import { useState } from "react";

import Sparkle2 from "./Sparkle2";

function AboutMe_photo() {
  const [isActive, setIsActive] = useState("");

  return (
    <div className="photo">
      <div className="photo_frame">
        <img
          src="/photo.jpg"
          alt="Profile picture"
          id="profile_photo"
          className={isActive}
        />
      </div>
      <div id="frame1" className={isActive}></div>
      <div id="frame2" className={isActive}></div>
      <Sparkle2 isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}

export default AboutMe_photo;

AboutMe_photo.propTypes = { prop: PropTypes.any };
