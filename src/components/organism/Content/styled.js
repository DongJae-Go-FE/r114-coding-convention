import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mobileBreakPoint, transitionDelay } from "../../../constants/size";

const Styled = styled.div`
  height: calc(100% - 80px);
  display: flex;
  background-color: var(--orange400);
  position: absolute;
  top: 80px;
  ${({ menuState }) => {
    switch (menuState) {
      case false:
        return css`
          width: calc(100% - 200px);
          left: 200px;
          transition: left ${transitionDelay}s, width ${transitionDelay}s;
        `.styles;
      case true:
      default:
        return css`
          width: 100%;
          left: 0;
          transition: left ${transitionDelay}s, width ${transitionDelay}s;
        `.styles;
    }
  }}
  @media (max-width: ${mobileBreakPoint}px) {
    width: 100%;
    left: 0;
    transition: left ${transitionDelay}s, width ${transitionDelay}s;
  }
`;

export default Styled;
