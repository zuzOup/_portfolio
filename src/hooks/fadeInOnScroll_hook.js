import { useEffect, useState } from "react";

function useFadeInOnScroll_hook(ref, rootMargin = "0px 0px -200px 0px") {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0,
        rootMargin,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return isVisible;
}

export default useFadeInOnScroll_hook;
