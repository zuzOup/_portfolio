import { useState, useEffect } from "react";

const useHoverCapability = () => {
  const [hasHover, setHasHover] = useState(true);

  useEffect(() => {
    // Check if the device supports hover
    const checkHoverCapability = () => {
      // Method 1: Check if the device has a coarse pointer (touch)
      const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

      // Method 2: Check if the device doesn't support hover
      const hasNoHover = window.matchMedia("(hover: none)").matches;

      // Method 3: Check if it's a touch device
      const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

      // Device doesn't have hover if any of these conditions are true
      const noHover = hasCoarsePointer || hasNoHover || isTouchDevice;

      setHasHover(!noHover);
    };

    checkHoverCapability();

    // Listen for changes (e.g., when device orientation changes)
    const mediaQuery = window.matchMedia("(hover: none)");
    const handleChange = () => checkHoverCapability();

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return hasHover;
};

export default useHoverCapability;
