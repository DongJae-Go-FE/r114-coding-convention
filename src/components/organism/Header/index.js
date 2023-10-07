import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { drawerStateChange } from "../../../store/store";
import { MenuData } from "./MenuData";
import {
  changeState,
  routerStatePush,
  subMenuChange,
} from "../../../store/store";
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
            dispatch(subMenuChange(0));
          }}
        >
          <span>부동산 114 로고</span>
        </Link>
      </h1>
      <div>
        <ul>
          {MenuData.map((data) => {
            return (
              <li key={data.key}>
                <Link
                  to={data.key}
                  onClick={() => {
                    dispatch(routerStatePush(data.key));
                    dispatch(subMenuChange(0));
                  }}
                  style={
                    data.key === routerState
                      ? { fontWeight: "bold" }
                      : { fontWeight: "500" }
                  }
                >
                  {data.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          onClick={() => {
            dispatch(changeState());
          }}
        >
          {menuState ? <RightMenuSVG /> : <LeftMenuSVG />}
          <span> {menuState ? "메뉴 닫기" : "메뉴 열기"}</span>
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
