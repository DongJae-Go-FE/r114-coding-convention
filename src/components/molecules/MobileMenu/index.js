import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  routerStatePush,
  drawerStateChange,
  subMenuChange,
} from "../../../store/store";
import CloseSvg from "../../../assets/svgs/CloseSvg";
import { MenuData } from "../../organism/Header/MenuData";
import { LeftMenuData } from "../../organism/LeftMenu/LeftMenuData";
import Styled from "./styled";

function MobileMenu() {
  let dispatch = useDispatch();
  let routerState = useSelector((state) => state.router);
  let subMenuState = useSelector((state) => state.subMenu);

  return (
    <Styled routerState={routerState} subMenuState={subMenuState}>
      <button
        type="button"
        onClick={() => {
          dispatch(drawerStateChange(false));
        }}
      >
        <CloseSvg />
        <span>모바일 메뉴 닫기 버튼</span>
      </button>
      <ul>
        {MenuData.map((data) => {
          return (
            <li key={data.key}>
              <Link
                to={data.to}
                onClick={(e) => {
                  dispatch(routerStatePush(data.key));
                  dispatch(subMenuChange(0));
                  e.stopPropagation();
                }}
              >
                {data.title}
              </Link>
              <ul>
                {LeftMenuData[data.key].map((data2) => {
                  return (
                    <li key={data2.key}>
                      <Link
                        to={data2.to}
                        onClick={(e) => {
                          dispatch(subMenuChange(data2.key));
                          e.stopPropagation();
                        }}
                        style={
                          subMenuState === data2.key
                            ? { color: "var(--primary600)" }
                            : { color: "var(--gray700)" }
                        }
                      >
                        {data2.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </Styled>
  );
}

export default MobileMenu;
