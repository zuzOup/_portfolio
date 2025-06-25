import { PropTypes } from "prop-types";

import AsideLeft from "./AsideLeft/AsideLeft";
import AsideRight from "./AsideRight/AsideRight";

import AsideDots from "./dotsAndLines/AsideDots";
import AsideLines from "./dotsAndLines/AsideLines";

import "./Aside.css";

import { delay_aside } from "../delays";

function Aside({ left, isLoaded }) {
  return (
    <aside className={isLoaded} style={{ animationDelay: `${delay_aside}ms` }}>
      <div>
        <AsideDots />
        {left ? <AsideLeft isLoaded={isLoaded} /> : <AsideRight isLoaded={isLoaded} />}
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
