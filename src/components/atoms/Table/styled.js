import styled from "@emotion/styled";
import { mobileBreakPoint } from "../../../constants/constants";

const Styled = styled.div`
  overflow-x: auto;
  margin-bottom: 160px;
  border-top: 2px solid var(--black);
  border-bottom: 2px solid var(--black);

  table {
    width: 100%;
    min-width: 1625px;
    border-collapse: collapse;
    table-layout: fixed;
    caption {
      overflow: hidden;
      width: 1px;
      height: 1px;
      position: absolute;
      clip: rect(0 0 0 0);
    }
    thead {
      tr {
        th {
          height: 47px;
          background-color: var(--gray200);
          border-bottom: 1px solid var(--gray300);
          vertical-align: middle;

          &:not(:last-child) {
            border-right: 1px solid var(--gray300);
          }
        }
      }
    }

    tbody {
      tr {
        td {
          vertical-align: middle;

          p {
            padding: 15px;
          }

          ul {
            list-style: none;
            li {
              padding: 15px;
              &:not(:last-child) {
                border-bottom: 1px solid var(--gray300);
              }
            }
          }

          &:not(:last-child) {
            border-right: 1px solid var(--gray300);
          }
        }

        &:not(:last-child) {
          border-bottom: 1px solid var(--gray300);
        }
      }
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${mobileBreakPoint}px) {
    margin-bottom: 15vw;
  }
`;

export default Styled;
