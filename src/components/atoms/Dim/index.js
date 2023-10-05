import React from "react";
import { useDispatch } from "react-redux";
import { drawerStateChange } from "../../../store/store";
import Styled from "./styled";

function Dim({ children }) {
  let dispatch = useDispatch();
  return (
    <Styled
      onClick={(e) => {
        dispatch(drawerStateChange(false));
        e.stopPropagation();
      }}
    >
      {children}
    </Styled>
  );
}

export default Dim;
