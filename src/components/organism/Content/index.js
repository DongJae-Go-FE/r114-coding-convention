import React from "react";
import { useSelector } from "react-redux";
import Styled from "./styled";

function Content({ children }) {
  let menuState = useSelector((state) => state.menu);
  return <Styled menuState={menuState}>{children}</Styled>;
}

export default Content;
