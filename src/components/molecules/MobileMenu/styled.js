import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Styled = styled.div`
  width: 80%;
  height: 100%;
  padding: 20px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1001;
  background-color: #fff;

  > button {
    width: 30px;
    height: 30px;
    background: transparent;
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

  > ul {
    margin: 20px 0;
    list-style: none;
    > li {
      > a {
        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;
        padding-left: 20px;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid var(--gray300);
        font-size: 20px;
        font-weight: bold;
        color: var(--gray700);
        text-decoration: none;

        &:hover {
          color: var(--black);
        }
      }
      ${({ routerState }) => {
        if (routerState) {
          return css`
            &:nth-of-type(${parseInt(routerState) + 1}) {
              a {
                color: var(--black);
              }
            }
          `.styles;
        }
      }}

      ul {
        display: none;
        margin: 10px 0;
        list-style: none;

        li {
          a {
            display: flex;
            align-items: center;
            width: 100%;
            height: 40px;
            padding-left: 20px;
            font-size: 18px;
            font-weight: bold;
            color: var(--gray700);
            text-decoration: none;

            &:hover {
              color: var(--primary600) !important; //고민
            }
          }
        }
      }

      ${({ routerState }) => {
        if (routerState) {
          return css`
            &:nth-of-type(${parseInt(routerState) + 1}) {
              ul {
                display: block;
              }
            }
          `.styles;
        }
      }}
    }
  }
`;

export default Styled;
