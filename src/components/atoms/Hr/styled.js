import styled from "@emotion/styled";
import { mobileBreakPoint } from "../../../constants/constants";

const Styled = styled.hr`
  width: 100%;
  height: 1px;
  margin: ${(props) => (props.top ? props.top : 0)}px 0
    ${(props) => (props.bottom ? props.bottom : 0)}px;
  background-color: var(--gray300);
  border: 0;

  @media (max-width: ${mobileBreakPoint}px) {
    margin: ${(props) => (props.mobileTop ? props.mobileTop : 0)}vw 0
    ${(props) => (props.mobileBottom ? props.mobileBottom : 0)}vw;
  }
`;

export default Styled;
