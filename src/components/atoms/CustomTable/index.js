import React from "react";
import Styled from "./styled";

function CustomTable({ tableData }) {
  return (
    <Styled>
      <ul>
        {tableData.map((data) => {
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
