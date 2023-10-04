import { useSelector } from "react-redux";
import { createPortal } from "react-dom";

function Drawer({ children }) {
  let drawerIsOpen = useSelector((state) => state.drawerIsOpen);
  const body = document.body;
  return drawerIsOpen && createPortal(children, body);
}

export default Drawer;
