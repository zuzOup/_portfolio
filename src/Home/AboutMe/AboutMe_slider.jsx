import { stack_svg } from "./stack_SVG";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

const stack = [
  "html",
  "css",
  "js",
  "ts",
  "react",
  "npm",
  "node",
  "next",
  "tailwind",
  "firebase",
  "prettier",
  "vercel",
  "netlify",
];
// , "html", "css", "js", "ts","react", "npm","figma", "mongo", "bootstrap", "tailwind","node","mui","styled","sql","sass","graphQL", "next", "netlify", "vercel", "prettier"

function AboutMe_slider() {
  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      grabCursor={true}
      slidesPerView={8}
      speed={2000}
      freeMode={{
        enabled: true,
        momentum: false,
      }}
    >
      {stack.map((item) => {
        return (
          <SwiperSlide key={item}>
            <div className="stack-item">{stack_svg(item)}</div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default AboutMe_slider;
