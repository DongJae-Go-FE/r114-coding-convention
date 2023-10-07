import styled from "@emotion/styled";
import { mobileBreakPoint } from "../../../../constants/constants";

const Styled = styled.section`
  width: 100%;
  padding: 80px 40px 250px;

  @media (max-width: ${mobileBreakPoint}px) {
    padding: 15vw 3vw 25vw;
  }
`;

export default Styled;
