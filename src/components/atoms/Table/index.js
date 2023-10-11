import React from "react";
import Styled from "./styled";

function Table({ caption, columns, tableData = [] }) {

  //컴포넌트 사용하기 전 주의 사항
  //colunmns의 value값이랑 tableData의 프로퍼티 명은 연결 시켜야 한다.

  const headerKey = columns.map((header) => header.value);
  return (
    <Styled>
      <table>
        <caption>{caption}</caption>
        <colgroup>
          {columns.map((col, i) => {
            return <col width={col.width} key={i} />;
          })}
        </colgroup>
        <thead>
          <tr>
            {columns.map((th, i) => {
              return <th key={i}>{th.text}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => {
            return (
              <tr key={rowIndex}>
                {headerKey.map((key) => (
                  <td key={key + rowIndex}>{row[key]}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Styled>
  );
}

export default Table;
