import React from "react";
import Styled from "./styled";

function Header() {
  return (
    <Styled>
      <h1>로고</h1>
      <div>
      <ul>
        <li>링크1</li>
        <li>링크2</li>
        <li>링크3</li>
        <li>링크4</li>
       </ul>
       <button type="button">레프트 메뉴</button>
      </div>
    </Styled>
  );
}

export default Header;