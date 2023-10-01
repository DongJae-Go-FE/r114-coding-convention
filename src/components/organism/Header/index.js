import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
          <li><Link to="/1">링크1</Link></li>
          <li><Link to="/2">링크2</Link></li>
          <li><Link to="/3">링크3</Link></li>
          <li><Link to="/4">링크4</Link></li>
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
