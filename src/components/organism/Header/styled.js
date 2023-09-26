import styled from "@emotion/styled";

const Styled = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background-color: var(--primary400);

  div {
    display: flex;
    align-items: center;
    gap: 20px;

    ul {
      display: flex;
      gap: 0 20px;
      list-style: none;
    }
  }
`;

export default Styled;
