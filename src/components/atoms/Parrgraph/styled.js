import styled from "@emotion/styled";
import { mobileBreakPoint } from "../../../constants/constants";

const Styled = styled.p`
  margin-bottom: ${(props) => (props.bottom ? props.bottom : 40)}px;
  font-weight: 500;
  color: var(--gray600);
  white-space: pre-line;

  @media (max-width: ${mobileBreakPoint}px) {
    font-size: 3vw;
  }
`;

export default Styled;
