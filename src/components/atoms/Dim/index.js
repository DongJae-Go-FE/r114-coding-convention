import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { drawerStateChange } from "../../../store/store";
import Styled from "./styled";

function Dim({ children }) {
  let dispatch = useDispatch();

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: auto;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

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
