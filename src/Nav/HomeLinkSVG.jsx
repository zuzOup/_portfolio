import { useState } from "react";

const svg = (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 39.414 39.414"
    xmlSpace="preserve"
  >
    <g>
      <path
        fill="#005249"
        d="M32.669,19.262l-11.902-7.433c-0.646-0.402-1.471-0.402-2.119,0L6.746,19.263c-0.585,0.364-0.94,1.007-0.94,1.695v12.385
c0,1.104,0.896,2,2,2H31.61c1.104,0,2-0.896,2-2V20.957C33.608,20.268,33.254,19.626,32.669,19.262z M18.98,29.486
c0,0.688-0.558,1.245-1.247,1.245h-2.077c-0.688,0-1.247-0.56-1.247-1.245v-2.079c0-0.688,0.558-1.246,1.247-1.246h2.077
c0.688,0,1.247,0.56,1.247,1.246V29.486z M18.98,23.669c0,0.688-0.558,1.246-1.247,1.246h-2.077c-0.688,0-1.247-0.559-1.247-1.246
V21.59c0-0.688,0.558-1.244,1.247-1.244h2.077c0.688,0,1.247,0.559,1.247,1.244V23.669z M25.004,29.486
c0,0.688-0.559,1.245-1.247,1.245H21.68c-0.688,0-1.247-0.56-1.247-1.245v-2.079c0-0.688,0.56-1.246,1.247-1.246h2.077
c0.688,0,1.247,0.56,1.247,1.246V29.486z M25.004,23.669c0,0.688-0.559,1.246-1.247,1.246H21.68c-0.688,0-1.247-0.559-1.247-1.246
V21.59c0-0.688,0.56-1.244,1.247-1.244h2.077c0.688,0,1.247,0.559,1.247,1.244V23.669z M39.109,18.186
c-0.379,0.605-1.029,0.938-1.696,0.938c-0.362,0-0.729-0.098-1.06-0.304L19.707,8.428L3.06,18.823
c-0.938,0.586-2.171,0.3-2.756-0.638c-0.585-0.938-0.3-2.17,0.637-2.756L18.648,4.372c0.648-0.402,1.472-0.402,2.119,0
l17.707,11.059C39.411,16.016,39.695,17.247,39.109,18.186z"
      />
    </g>
  </svg>
);

function HomeLinkSVG() {
  const [active, setActive] = useState("");

  const handleEnter = () => {
    setActive("active");
  };

  const handleLeave = () => {
    setActive("");
  };

  //TODO: dev: "5273/" build: "app/"
  switch (window.location.href.split("5173/")[1]) {
    case "accomplishments":
      return (
        <a
          href="../"
          className="homebutton"
          target="_self"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <div className={active}></div>
          {svg}
        </a>
      );
    case "":
      return (
        <button
          className="homebutton"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          onClick={() => {
            scrollTo(0, 0);
          }}
        >
          <div className={active}></div>
          {svg}
        </button>
      );
  }
}

export default HomeLinkSVG;