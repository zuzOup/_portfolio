import { PropTypes } from "prop-types";

import AsideLeft from "./AsideLeft";
import AsideRight from "./AsideRight";

import AsideDots from "./dotsAndLines/AsideDots";
import AsideLines from "./dotsAndLines/AsideLines";

import "./Aside.css";

function Aside({ left }) {
  return (
    <aside id={left ? "aside_left" : "aside_right"}>
      <span>
        <AsideDots />
        {left ? <AsideLeft /> : <AsideRight />}
        <AsideLines />
      </span>
    </aside>
  );
}

Aside.propTypes = {
  left: PropTypes.bool,
  acc: PropTypes.bool,
};

export default Aside;
