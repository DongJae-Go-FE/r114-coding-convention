import styled from "@emotion/styled";
import { mobileBreakPoint } from "../../../constants/constants";

const Styled = styled.div`
  margin-bottom: 160px;
  overflow-x: auto;
  ul {
    width: 100%;
    min-width: 1433px;
    border-top: 2px solid var(--black);
    border-bottom: 2px solid var(--black);
    li {
      display: flex;
      align-items: center;

      div {
        height: 100%;
        padding: 15px;
        &:nth-of-type(1) {
          width: 300px;
          background-color: var(--gray200);
          border-right: 1px solid var(--gray300);
          border-bottom: 1px solid var(--gray300);
          font-weight: bold;
        }

        &:nth-of-type(2) {
          width: calc(100% - 300px);
          background-color: var(--white);
          border-bottom: 1px solid var(--gray300);
          white-space: nowrap;
        }
      }
      &:last-child {
        div {
          &:nth-of-type(1) {
            border-bottom: none;
          }
          &:nth-of-type(2) {
            border-bottom: none;
          }
        }
      }
    }
  }

  @media (max-width: ${mobileBreakPoint}px) {
    margin-bottom: 15vw;
  }
`;

export default Styled;
