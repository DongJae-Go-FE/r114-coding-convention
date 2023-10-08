import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mobileBreakPoint } from "../../../constants/constants";

const Styled = styled.div`
  h3 {
    margin: 20px 0;
  }
  ul {
    list-style: none;

    li {
      display: flex;
      align-items: center;
      color: var(--black);
      font-weight: bold;
      text-decoration: none;

      ${({ listStyle }) => {
        switch (listStyle) {
          case "disc":
            return css`
              gap: 0 5px;

              &::before {
                content: "";
                display: block;
                width: 6px;
                height: 2px;
                background-color: var(--black);
              }
            `.styles;
          case "circle":
            return css`
              gap: 0 5px;

              &::before {
                content: "";
                display: block;
                width: 5px;
                height: 5px;
                background-color: var(--black);
                border-radius: 5px;
              }
            `.styles;
          case null:
          default:
            return css``.styles;
        }
      }}

      &:not(:last-child) {
        margin-bottom: 10px;
      }

      a {
        color: var(--black);
        font-weight: bold;
        text-decoration: none;
      }

      ${({ link }) => {
        if (link) {
          return css`
            &:hover {
              a {
                color: var(--primary600);
              }
              &::before {
                background-color: var(--primary600);
              }
            }
          `.styles;
        } else {
          return css``.styles;
        }
      }}
    }
  }

  @media (max-width: ${mobileBreakPoint}px) {
    ${({ link }) => {
      if (link) {
        return css`
          ul {
            li {
              a {
                font-size: 3.5vw;
              }
            }
          }
        `.styles;
      } else {
        return css`
          ul {
            li {
              font-size: 3.5vw;
            }
          }
        `.styles;
      }
    }}
  }
`;

export default Styled;
