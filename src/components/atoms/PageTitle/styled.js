import styled from "@emotion/styled";
import { mobileBreakPoint } from "../../../constants/constants";

const Styled = styled.h2`
  margin-bottom: 32px;
  font-size: 34px;
  font-weight: 800;
  color: var(--gray800);

  @media (max-width: ${mobileBreakPoint}px) {
    font-size: 6vw;
  }
`;

export default Styled;
