import { useEffect, useState } from "react";

/**
 * Delays unmounting a component after a boolean flag turns false.
 * @param {boolean} isMounted - Whether the component should be mounted.
 * @param {number} delay - Delay in ms after isMounted turns false before unmounting.
 * @returns {boolean} - Whether the component should be rendered.
 */
const useDelayedUnmount = (isMounted, delay) => {
  const [shouldRender, setShouldRender] = useState(isMounted);

  useEffect(() => {
    let timeoutId;
    if (isMounted) {
      setShouldRender(true);
    } else {
      timeoutId = setTimeout(() => setShouldRender(false), delay);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delay]);

  return shouldRender;
};

export default useDelayedUnmount;
