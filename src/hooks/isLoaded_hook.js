import { useEffect, useState } from "react";

function useIsLoded(delay = 300) {
  const [isLoaded, setIsLoaded] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded("loaded");
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return isLoaded;
}

export default useIsLoded;
