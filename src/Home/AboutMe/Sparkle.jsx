import { useEffect, useState } from "react";

function Sparkle() {
  const [style, setStyle] = useState(null);

  useEffect(() => {
    function position(e) {
      setStyle({ top: `${e.pageY - 8}px`, left: `${e.pageX + 4}px` });
    }

    window.addEventListener("mousemove", position);

    return () => {
      window.removeEventListener("mousemove", position);
    };
  }, []);

  return <div className="cursor_sparkle" style={style}></div>;
}

export default Sparkle;
