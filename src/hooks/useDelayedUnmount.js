import { useEffect, useState } from "react";

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
