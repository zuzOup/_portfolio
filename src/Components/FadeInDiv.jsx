import { forwardRef } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";



const fadeInStyles = css`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  transition-delay: ${({ delay }) => delay || "0s"};

  ${({ visible }) =>
    visible &&
    `
    opacity: 1;
    transform: none;
  `};
`;const StyledDiv = styled.div.withConfig({
  shouldForwardProp: (prop) => !["visible", "delay"].includes(prop),
})`
  ${fadeInStyles}
`;

function FadeInDivComponent({ children, isVisible, className, delay = 0 }, ref) {
  const classes = `${className || ""} ${isVisible ? "loaded" : ""}`.trim();

  return (
    <StyledDiv ref={ref} className={classes} visible={isVisible} delay={`${delay}s`}>
      {children}
    </StyledDiv>
  );
}

const FadeInDiv = forwardRef(FadeInDivComponent);

FadeInDiv.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
};

export default FadeInDiv;
