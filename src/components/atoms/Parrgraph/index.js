import React from "react";
import Styled from "./styled";

function Parrgraph({children, bottom}) {
  return (
    <Styled bottom={bottom}>
      {children}
    </Styled>
  );
}

export default Parrgraph;