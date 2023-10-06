import styled from "@emotion/styled";
import { mobileBreakPoint } from "../../../constants/constants";

const Styled = styled.h3`
  margin-bottom: 12px;
  padding-left: 15px;
  position: relative;
  font-size: 26px;
  font-weight: bold;
  color: var(--gray800);

  &::before{
    content: "";
    display: block;
    width: 4px;
    height: 100%;
    position: absolute;
    left: 0;
    background-color: var(--primary600);
  }

  @media (max-width: ${mobileBreakPoint}px) {
    font-size: 5vw;
  }
`;

export default Styled;
