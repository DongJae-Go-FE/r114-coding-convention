import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mobileBreakPoint, transitionDelay } from "../../../constants/size";

const Styled = styled.div`
  width: 200px;
  height: calc(100% - 80px);
  padding: 20px;
  position: fixed;
  top: 80px;
  background-color: var(--blue400);

  ul {
    list-style: none;
  }

  ${({ menuState }) => {
    switch (menuState) {
      case false:
        return css`
          left: 0;
          transition: left ${transitionDelay}s, width ${transitionDelay}s;
        `.styles;
      case true:
      default:
        return css`
          left: -200px;
          transition: left ${transitionDelay}s, width ${transitionDelay}s;
        `.styles;
    }
  }}

  @media (max-width: ${mobileBreakPoint}px) {
    left: -200px;
    transition: left ${transitionDelay}s, width ${transitionDelay}s;
  }
`;

export default Styled;
