import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeState, routerStatePush } from "../../../store/store";

import Styled from "./styled";

function Header() {
  let menuState = useSelector((state) => state.menu);
  let routerState = useSelector((state) => state.router);
  let dispatch = useDispatch();
  console.log(menuState, routerState);
  return (
    <Styled>
      <h1>
        <Link
          to="/"
          onClick={() => {
            dispatch(routerStatePush(""));
          }}
        >
          로고
        </Link>
      </h1>
      <div>
        <ul>
          <li>
            <Link
              to="/1"
              onClick={() => {
                dispatch(routerStatePush("1"));
              }}
            >
              링크1
            </Link>
          </li>
          <li>
            <Link
              to="/2"
              onClick={() => {
                dispatch(routerStatePush("2"));
              }}
            >
              링크2
            </Link>
          </li>
          <li>
            <Link
              to="/3"
              onClick={() => {
                dispatch(routerStatePush("3"));
              }}
            >
              링크3
            </Link>
          </li>
          <li>
            <Link
              to="/4"
              onClick={() => {
                dispatch(routerStatePush("4"));
              }}
            >
              링크4
            </Link>
          </li>
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
