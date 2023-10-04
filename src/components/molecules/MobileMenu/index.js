import React from "react";
import { useDispatch } from "react-redux";
import { drawerStateChange } from "../../../store/store";
import CloseSvg from "../../../assets/svgs/CloseSvg";
import Styled from "./styled";

function MobileMenu() {
  let dispatch = useDispatch();
  return (
    <Styled>
      <button
        type="button"
        onClick={() => {
          dispatch(drawerStateChange(false));
        }}
      >
        <CloseSvg/>
        <span>모바일 메뉴 닫기 버튼</span>
      </button>
    </Styled>
  );
}

export default MobileMenu;
