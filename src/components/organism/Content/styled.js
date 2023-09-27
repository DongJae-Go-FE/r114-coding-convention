import styled from "@emotion/styled";
import { css } from "@emotion/react";

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
          transition: left 0.5s, width 0.5s;
        `.styles;
      case true:
      default:
        return css`
          width: 100%;
          left: 0;
          transition: left 0.5s, width 0.5s;
        `.styles;
    }
  }}
`;

export default Styled;
