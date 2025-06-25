import { PropTypes } from "prop-types";

import AsideLeft from "./AsideLeft/AsideLeft";
import AsideRight from "./AsideRight/AsideRight";

import AsideDots from "./dotsAndLines/AsideDots";
import AsideLines from "./dotsAndLines/AsideLines";

import "./Aside.css";

import { delay_aside, delay_aside_changed } from "../delays";
import changeDelayOnMount_hook from "../changeDelayOnMount_hook";

function Aside({ left, isLoaded }) {
  const delayAside = changeDelayOnMount_hook(
    delay_aside,
    delay_aside_changed,
    delay_aside_changed
  );

  return (
    <aside className={isLoaded} style={{ animationDelay: `${delayAside}ms` }}>
      <div>
        <AsideDots />
        {left ? (
          <AsideLeft isLoaded={isLoaded} delayAside={delayAside} />
        ) : (
          <AsideRight isLoaded={isLoaded} delayAside={delayAside} />
        )}
        <AsideLines />
      </div>
    </aside>
  );
}

export default Aside;

Aside.propTypes = {
  left: PropTypes.bool,
  isLoaded: PropTypes.string,
};
