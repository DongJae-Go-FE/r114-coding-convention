import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { drawerStateChange } from "../../../store/store";
import { changeState, routerStatePush } from "../../../store/store";
import LeftMenuSVG from "../../../assets/svgs/LeftMenuSVG";
import RightMenuSVG from "../../../assets/svgs/RightMenuSVG";
import HamburgerMenuSVG from "../../../assets/svgs/HamburgerMenuSVG";

import Styled from "./styled";

function Header() {
  let dispatch = useDispatch();
  let menuState = useSelector((state) => state.menu);
  let routerState = useSelector((state) => state.router);
  return (
    <Styled routerState={routerState}>
      <h1>
        <Link
          to="/"
          onClick={() => {
            dispatch(routerStatePush(""));
          }}
        >
          <span>부동산 114 로고</span>
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
          {menuState ? <RightMenuSVG /> : <LeftMenuSVG />}
          <span> {menuState ? "메뉴 닫기": "메뉴 열기"}</span>
        </button>
      </div>
      <button
        type="button"
        onClick={() => {
          dispatch(drawerStateChange(true));
        }}
      >
        <HamburgerMenuSVG />
        <span>모바일 메뉴</span>
      </button>
    </Styled>
  );
}

export default Header;
