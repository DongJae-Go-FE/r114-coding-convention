import styled from "@emotion/styled";

const Styled = styled.div`
  width: 80%;
  height: 100%;
  padding: 20px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1001;
  background-color: #fff;

  > button {
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

  > ul {
    margin: 20px 0;
    list-style: none;
    li {
      button {
        width: 100%;
        height: 40px;
        padding-left: 20px;
        background-color: transparent;
        border: none;
        font-size: 20px;
        color: var(--gray700);
        text-align: left;
        cursor: pointer;
      }

      ul {
        display: none;
        list-style: none;
        li {
          a {
            display: block;
            width: 100%;
            height: 40px;
            padding-left: 20px;
            font-size: 20px;
            text-decoration: none;
            color: var(--gray700);
          }
        }
      }
    }
  }
`;

export default Styled;
