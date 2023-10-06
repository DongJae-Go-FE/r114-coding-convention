import styled from "@emotion/styled";
import { mobileBreakPoint } from "../../../constants/constants";

const Styled = styled.h3`
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 700;
  color: var(--gray-black);

  @media (max-width: ${mobileBreakPoint}px) {
    font-size: 4vw;
  }
`;

export default Styled;
