import React from "react";
import { useSelector } from "react-redux";
import Drawer from "../../molecules/Drawer";
import Dim from "../../atoms/Dim";
import MobileMenu from "../../molecules/MobileMenu";
import Styled from "./styled";

function Content({ children }) {
  let menuState = useSelector((state) => state.menu);
  let routerState = useSelector((state) => state.router);

  return (
    <Styled menuState={menuState} routerState={routerState}>
      {children}
      <Drawer>
        <Dim>
          <MobileMenu />
        </Dim>
      </Drawer>
    </Styled>
  );
}

export default Content;
