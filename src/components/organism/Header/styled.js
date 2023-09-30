import styled from "@emotion/styled";
import { mobileBreakPoint } from "../../../constants/constants";

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
  background-color: var(--primary400);

  div {
    display: flex;
    align-items: center;
    gap: 20px;

    ul {
      display: flex;
      gap: 0 20px;
      list-style: none;
    }
  }

  > button{
    display: none;
  }

  @media (max-width: ${mobileBreakPoint}px) {
    > div{
      display: none;
    }

    > button{
      display: block;
    }
  }
`;

export default Styled;
