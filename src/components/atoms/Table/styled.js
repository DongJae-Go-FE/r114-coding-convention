import styled from "@emotion/styled";
import { mobileBreakPoint } from "../../../constants/constants";

const Styled = styled.div`
  margin-bottom: 160px;
  table {
    width: 100%;
    caption {
      overflow: hidden;
      width: 1px;
      height: 1px;
      position: absolute;
      clip: rect(0 0 0 0);
    }
  }

  @media (max-width: ${mobileBreakPoint}px) {
    overflow-x: auto;
    margin-bottom: 15vw;
    table {
      table-layout: fixed;
      width: 706px;
    }
  }
`;

export default Styled;
