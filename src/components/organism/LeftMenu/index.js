import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LeftMenuData } from "./LeftMenuData";
import { subMenuChange } from "../../../store/store";
import Styled from "./styled";

function LeftMenu() {
  let dispatch = useDispatch();
  let menuState = useSelector((state) => state.menu);
  let routerState = useSelector((state) => state.router);
  let subMenuState = useSelector((state) => state.subMenu);

  const menuList = () => {
    switch (routerState) {
      case "":
      default:
        return "";
      case "0":
        return (
          <ul>
            {LeftMenuData[0].map((data) => {
              return (
                <li key={data.key}>
                  <Link
                    to={data.to}
                    onClick={() => {
                      dispatch(subMenuChange(data.key));
                    }}
                    style={
                      subMenuState === data.key
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
        );
      case "1":
        return (
          <ul>
            {LeftMenuData[1].map((data) => {
              return (
                <li key={data.key}>
                  <Link
                    to={data.to}
                    onClick={() => {
                      dispatch(subMenuChange(data.key));
                    }}
                    style={
                      subMenuState === data.key
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
        );
      case "2":
        return (
          <ul>
            {LeftMenuData[2].map((data) => {
              return (
                <li key={data.key}>
                  <Link
                    to={data.to}
                    onClick={() => {
                      dispatch(subMenuChange(data.key));
                    }}
                    style={
                      subMenuState === data.key
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
        );
      case "3":
        return (
          <ul>
            {LeftMenuData[3].map((data) => {
              return (
                <li key={data.key}>
                  <Link
                    to={data.to}
                    onClick={() => {
                      dispatch(subMenuChange(data.key));
                    }}
                    style={
                      subMenuState === data.key
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
        );
    }
  };

  return (
    <Styled menuState={menuState} routerState={routerState}>
      {menuList()}
    </Styled>
  );
}

export default LeftMenu;
