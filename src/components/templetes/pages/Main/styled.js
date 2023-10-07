import styled from "@emotion/styled";
import { mobileBreakPoint } from "../../../../constants/constants";

const Styled = styled.div`
  padding: 80px 40px 250px;

  > div {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 160px;
    > div {
      width: 25%;
    }
  }

  @media (max-width: ${mobileBreakPoint}px) {
    padding: 15vw 3vw 25vw;
    > div{
      margin-bottom: 15vw;
        >div{
            width: 100%;

            &:not(:last-child){
                margin-bottom: 20px;
            }
        }
    }
  }
`;

export default Styled;
