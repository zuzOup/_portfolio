import { useEffect, useState } from "react";

function isLoaded_hook(delay = 300) {
  const [isLoaded, setIsLoaded] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded("loaded");
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return isLoaded;
}

export default isLoaded_hook;
