import styled from "@emotion/styled";

const Styled = styled.div`
  width: 80%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1001;
  background-color: #fff;

  button {
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    cursor: pointer;

    span {
      overflow: hidden;
      width: 1px;
      height: 1px;
      position: absolute;
      clip: rect(0 0 0 0);
    }
  }
`;

export default Styled;
