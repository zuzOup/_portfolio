import { useEffect } from "react";

function filterCheck() {
  useEffect(() => {
    const supportsGooFilter = () => {
      const el = document.createElement("div");
      el.style.cssText = "filter: url(#goo)";
      document.body.appendChild(el);
      const computed = getComputedStyle(el).filter;
      document.body.removeChild(el);
      return computed && computed !== "none" && computed !== "";
    };

    if (supportsGooFilter()) {
      document.documentElement.style.setProperty("--blob-width", "25%");
    } else {
      document.documentElement.style.setProperty("--blob-width", "40%");
    }
  }, []);
}

export default filterCheck;
