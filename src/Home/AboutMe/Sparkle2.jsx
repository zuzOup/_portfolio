import { useRef } from "react";

//https://www.winterwind.com/tutorials/css/60

function randomNum() {
  return Math.floor(Math.random() * 5) + 1;
}

const Sparkle2 = ({ isActive, setIsActive }) => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();

    const arr = [1, 0.9, 0.8, 0.5, 0.2];

    arr.forEach((i) => {
      const x = (1 - i) * 75;
      const star = document.createElement("div");

      star.className = "star";
      star.style.position = "absolute";

      let top = e.clientY - rect.top + Math.round(Math.random() * x - x / 2);
      let left = e.clientX - rect.left + Math.round(Math.random() * x - x / 2);

      top = Math.max(0, Math.min(top, rect.height));
      left = Math.max(0, Math.min(left, rect.width));

      star.style.top = `${top}px`;
      star.style.left = `${left}px`;
      star.classList.add(`star-bck${randomNum()}`);

      container.appendChild(star);

      setTimeout(() => {
        container.removeChild(star);
      }, Math.round(Math.random() * i * 600));
    });
  };

  return (
    <div
      ref={containerRef}
      id="frame-sparkle"
      className={isActive}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsActive("active")}
      onMouseLeave={() => setIsActive("")}
    ></div>
  );
};

export default Sparkle2;
