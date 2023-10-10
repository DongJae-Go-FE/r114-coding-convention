import styled from "@emotion/styled";
import { mobileBreakPoint } from "../../../constants/constants";

const Styled = styled.p`
  margin-bottom: ${(props) => (props.bottom ? props.bottom : 40)}px;
  font-weight: 500;
  color: var(--gray600);
  line-height: 1.1;
  white-space: pre-line;

  @media (max-width: ${mobileBreakPoint}px) {
    margin-bottom: ${(props) => (props.mobileBottom ? props.mobileBottom : 0)}vw;
    font-size: 3vw;
  }
`;

export default Styled;
