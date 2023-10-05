import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { drawerStateChange } from "../../../store/store";
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

  const headerMenuData = [
    { key: "0", title: "링크0" },
    { key: "1", title: "링크1" },
    { key: "2", title: "링크2" },
    { key: "3", title: "링크3" },
  ];

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
          {headerMenuData.map((data) => {
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
                      : { fontWeight: "normal" }
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
