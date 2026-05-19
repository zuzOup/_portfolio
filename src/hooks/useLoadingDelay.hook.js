import { useEffect, useState } from "react";

function useLoadingDelay(delay = 300) {
  const [isLoaded, setIsLoaded] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded("loaded");
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return isLoaded;
}

export default useLoadingDelay;
