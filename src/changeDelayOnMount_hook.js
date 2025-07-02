import { useEffect, useState } from "react";

function changeDelayOnMount_hook(delay, delay_scroll = 0, delay_path = 0) {
  const [delayAside, setDelayAside] = useState(delay);

  useEffect(() => {
    const path = window.location.pathname;
    const isScrolled = window.scrollY > 0;

    if (isScrolled && path === "/") {
      // console.log(path);
      // console.log(isScrolled);

      setDelayAside(delay_scroll);
    } else if (path !== "/") {
      setDelayAside(delay_path);
    }
  }, []);

  return delayAside;
}

export default changeDelayOnMount_hook;
