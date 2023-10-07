import React from "react";
import Styled from "./styled";

function Parrgraph({children, bottom, mobileBottom}) {
  return (
    <Styled bottom={bottom} mobileBottom={mobileBottom}>
      {children}
    </Styled>
  );
}

export default Parrgraph;