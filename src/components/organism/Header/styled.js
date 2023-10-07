import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mobileBreakPoint } from "../../../constants/constants";
import Logo from "../../../assets/logo.png";

const Styled = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  position: fixed;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid var(--gray300);
  background-color: var(--white);

  h1 {
    a {
      display: block;
      width: 150px;
      height: 51px;
      background: url(${Logo}) no-repeat center / contain;
      span {
        overflow: hidden;
        width: 1px;
        height: 1px;
        position: absolute;
        clip: rect(0 0 0 0);
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 20px;

    ul {
      display: flex;
      gap: 0 20px;
      list-style: none;

      li {
        a {
          color: var(--gray700);
          text-decoration: none;
          font-weight: 500;

          &:hover{
            color: var(--black);
            font-weight: bold !important; //보류
          }
        }
      }
    }

    button {
      width: 30px;
      height: 30px;
      border: none;
      background: transparent;
      cursor: pointer;

      span {
        overflow: hidden;
        width: 1px;
        height: 1px;
        position: absolute;
        clip: rect(0 0 0 0);
      }
    }
  }

  > button {
    display: none;
    width: 35px;
    height: 35px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    span {
      overflow: hidden;
      width: 1px;
      height: 1px;
      position: absolute;
      clip: rect(0 0 0 0);
    }
  }

  ${({ routerState }) => {
    if (routerState === "") {
      return css`
        div {
          button {
            display: none;
          }
        }
      `.styles;
    }
  }}

  @media (max-width: ${mobileBreakPoint}px) {
    padding: 0 3vw;
    > div {
      display: none;
    }

    > button {
      display: block;
    }
  }
`;

export default Styled;
