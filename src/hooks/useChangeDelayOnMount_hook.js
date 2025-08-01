import { useEffect, useState } from "react";

function useChangeDelayOnMount_hook(delay, delay_scroll = 0, delay_path = 0) {
  const [delayAside, setDelayAside] = useState(delay);

  useEffect(() => {
    const path = window.location.pathname;
    const isScrolled = window.scrollY > 0;

    if (isScrolled && path === "/") {
      setDelayAside(delay_scroll);
    } else if (path !== "/") {
      setDelayAside(delay_path);
    }
  }, [delay_path, delay_scroll]);

  return delayAside;
}

export default useChangeDelayOnMount_hook;
