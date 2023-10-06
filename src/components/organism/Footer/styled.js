import styled from "@emotion/styled";
import { mobileBreakPoint } from "../../../constants/constants";

const Styled = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding: 0 40px;
  background-color: var(--white);
  border-top: 1px solid var(--gray300);

  p {
    font-weight: bold;
  }

  @media (max-width: ${mobileBreakPoint}px) {
    padding: 0 3vw;
    font-size: 2.5vw;
  }
`;

export default Styled;
