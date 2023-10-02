import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Styled from "./styled";

function LeftMenu() {
  let menuState = useSelector((state) => state.menu);
  let routerState = useSelector((state) => state.router);

  const menuList = () => {
    switch (routerState) {
      case "":
      default:
        return "";
      case "1":
        return (
          <ul>
            <li>
              <Link to="/1">서브 링크1-1</Link>
            </li>
            <li>
              <Link to="/1/2">서브 링크1-2</Link>
            </li>
            <li>
              <Link to="/1/3">서브 링크1-3</Link>
            </li>
            <li>
              <Link to="/1/4">서브 링크1-4</Link>
            </li>
          </ul>
        );
      case "2":
        return (
          <ul>
            <li>
              <Link to="/2">서브 링크2-1</Link>
            </li>
            <li>
              <Link to="/2/2">서브 링크2-2</Link>
            </li>
            <li>
              <Link to="/2/3">서브 링크2-3</Link>
            </li>
            <li>
              <Link to="/2/4">서브 링크2-4</Link>
            </li>
          </ul>
        );
      case "3":
        return (
          <ul>
            <li>
              <Link to="/3">서브 링크3-1</Link>
            </li>
            <li>
              <Link to="/3/2">서브 링크3-2</Link>
            </li>
            <li>
              <Link to="/3/3">서브 링크3-3</Link>
            </li>
            <li>
              <Link to="/3/4">서브 링크3-4</Link>
            </li>
          </ul>
        );
      case "4":
        return (
          <ul>
            <li>
              <Link to="/4">서브 링크4-1</Link>
            </li>
            <li>
              <Link to="/4/2">서브 링크4-2</Link>
            </li>
            <li>
              <Link to="/4/3">서브 링크4-3</Link>
            </li>
            <li>
              <Link to="/4/4">서브 링크4-4</Link>
            </li>
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
