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

  const headerMenuData = [
    { key: "0", title: "링크1" },
    { key: "1", title: "링크2" },
    { key: "2", title: "링크3" },
    { key: '3', title: "링크4" },
  ];

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
          {headerMenuData.map((data) => {
            return (
              <li key={data.key}>
                <Link
                  to={data.key}
                  onClick={() => {
                    dispatch(routerStatePush(data.key));
                  }}
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
