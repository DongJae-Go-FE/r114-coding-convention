import React from "react";
import Styled from "./styled";

function CustomTable({ list }) {
  return (
    <Styled>
      <ul>
        {list.map((data) => {
          return (
            <li key={data.key}>
              <div>{data.title}</div>
              <div>{data.content}</div>
            </li>
          );
        })}
      </ul>
    </Styled>
  );
}

export default CustomTable;
