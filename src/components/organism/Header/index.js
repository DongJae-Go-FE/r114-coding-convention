import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeState } from "../../../store/store";

import Styled from "./styled";

function Header() {
  let a = useSelector((state) => state.menu);
  let dispatch = useDispatch();
  console.log(a);
  return (
    <Styled>
      <h1>로고</h1>
      <div>
        <ul>
          <li>링크1</li>
          <li>링크2</li>
          <li>링크3</li>
          <li>링크4</li>
        </ul>
        <button
          type="button"
          onClick={() => {
            dispatch(changeState());
          }}
        >
          레프트 메뉴
        </button>
      </div>
      <button type="button">반응형 메뉴</button>
    </Styled>
  );
}

export default Header;
