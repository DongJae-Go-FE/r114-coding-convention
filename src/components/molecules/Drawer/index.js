import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { mobileBreakPoint } from "../../../constants/constants";
function Drawer({ children, device }) {
  const [windowWidth, setWindwoWidth] = useState();
  const body = document.body;
  let drawerIsOpen = useSelector((state) => state.drawerIsOpen);

  const handleResize = () => {
    setWindwoWidth(window.outerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return device === "mobile" && windowWidth > mobileBreakPoint
    ? drawerIsOpen === false
    : drawerIsOpen && createPortal(children, body);
}

export default Drawer;
