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
        position: relative;
        left: 0;
        font-size: 20px;
        color: var(--black);
        font-weight: bold;
        text-decoration: none;
        transition: left ${transitionDelay}s;

        &:hover {
          left: 15px;
          color: var(--primary600);
          transition: left ${transitionDelay}s;
        }
      }

      &:not(:last-child) {
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

${({ subMenuState }) => {
    if (subMenuState === "") {
      return css``.styles;
    } else {
      return css`
        ul {
          li {
            &:nth-of-type(${parseInt(subMenuState) + 1}) {
              a {
                left: 15px;
                color: var(--primary600);
              }
            }
          }
        }
      `.styles;
    }
  }}

  @media (max-width: ${mobileBreakPoint}px) {
    left: -200px;
    transition: left ${transitionDelay}s, width ${transitionDelay}s;
  }
`;

export default Styled;
