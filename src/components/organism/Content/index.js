import React from "react";
import { useSelector } from "react-redux";
import Styled from "./styled";

function Content({ children }) {
  let menuState = useSelector((state) => state.menu);
  let routerState = useSelector((state) => state.router);

  return (
    <Styled menuState={menuState} routerState={routerState}>
      {children}
    </Styled>
  );
}

export default Content;
