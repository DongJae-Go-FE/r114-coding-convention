import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  mobileBreakPoint,
  transitionDelay,
} from "../../../constants/constants";

const Styled = styled.div`
  width: 200px;
  height: calc(100% - 80px);
  padding: 20px;
  position: fixed;
  top: 80px;
  background-color: var(--white);

  border-right: 1px solid var(--gray300);

  ul {
    list-style: none;
    li {
      a {
        font-size: 20px;
        color: var(--gray700);
        text-decoration: none;
      }

      &:not(:last-child){
        margin-bottom: 12px;
      }
    }
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

  ${({ routerState }) => {
    if (routerState === "") {
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
