const getInitialMode = () => {
  if (typeof window === "undefined") return "/photo.jpg";

  const persisted = localStorage.getItem("theme");

  if (persisted === "dark") return "/photo-dark.jpg";
  if (persisted === "light") return "/photo.jpg";

  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  return mql.matches ? "/photo-dark.jpg" : "/photo.jpg";
};

export { getInitialMode };
