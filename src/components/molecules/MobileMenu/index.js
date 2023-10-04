import React from "react";
import { useDispatch } from "react-redux";
import { drawerStateChange } from "../../../store/store";
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
        닫기
      </button>
    </Styled>
  );
}

export default MobileMenu;
