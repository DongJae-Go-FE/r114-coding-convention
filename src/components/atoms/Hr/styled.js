import styled from "@emotion/styled";

const Styled = styled.hr`
  width: 100%;
  height: 1px;
  margin: ${(props) => (props.top ? props.top : 0)}px 0
    ${(props) => (props.bottom ? props.bottom : 0)}px;
  background-color: var(--gray300);
  border: 0;
`;

export default Styled;
