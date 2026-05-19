import { useEffect, useState } from "react";

import { DELAY_BOUNCE } from "../../helpers/delays";

const wait = (ms) => new Promise((res) => setTimeout(res, ms));

export default function useAnimationStart(isLoaded) {
  const [animationStart, setAnimationStart] = useState({
    dot: "",
    Z: "",
    O: "",
  });

  useEffect(() => {
   
    if (!isLoaded) return;

    async function runAnimations() {
      await wait(300 + DELAY_BOUNCE);
      setAnimationStart((x) => ({ ...x, dot: "animate" }));
     
      await wait(1000);
      setAnimationStart((x) => ({ ...x, Z: "animate" }));
    
      await wait(620);
      setAnimationStart((x) => ({ ...x, O: "animate" }));
    }

    runAnimations();
  }, [isLoaded]);

  return animationStart;
}
