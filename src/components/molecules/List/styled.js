import styled from "@emotion/styled";
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
      gap: 0 5px;

      color: var(--black);
      font-weight: bold;
      text-decoration: none;

      &::before {
        content: "";
        display: block;
        width: 5px;
        height: 5px;
        background-color: var(--black);
        border-radius: 5px;
      }

      &:not(:last-child) {
        margin-bottom: 10px;
      }

      a {
        color: var(--black);
        font-weight: bold;
        text-decoration: none;
      }
    }
  }

  @media (max-width: ${mobileBreakPoint}px) {
    ul {
      li {
        font-size: 3.5vw;
        a {
          font-size: 3.5vw;
        }
      }
    }
  }
`;

export default Styled;
