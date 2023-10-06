import React from "react";
import PageTitle from "../../../atoms/PageTitle";
import Styled from "./styled";

function Layout({ children, title }) {
  return (
    <Styled>
      <PageTitle title={title}/>
      {children}
    </Styled>
  );
}

export default Layout;
