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
    <Styled>
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
              <button
                type="button"
                onClick={() => {
                  dispatch(routerStatePush(data.key));
                  dispatch(subMenuChange(0));
                }}
                style={
                  routerState === data.key
                    ? { fontWeight: "bold" }
                    : { fontWeight: "normal" }
                }
              >
                {data.title}
              </button>
              <ul
                style={
                  routerState === data.key
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                {LeftMenuData[data.key].map((data2) => {
                  return (
                    <li key={data2.key}>
                      <Link
                        to={data2.to}
                        onClick={() => {
                          dispatch(subMenuChange(data2.key));
                        }}
                        style={
                          subMenuState === data2.key
                            ? { fontWeight: "bold" }
                            : { fontWeight: "normal" }
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
