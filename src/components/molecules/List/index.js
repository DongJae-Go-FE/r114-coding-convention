import React from "react";
import { Link } from "react-router-dom";
import MinorTitle from "../../atoms/MinorTitle";
import Styled from "./styled";

function List({ title, list, link, listClick, menuData }) {
  const listData = (data1, data2) => {
    listClick(data1, data2);
  };

  return (
    <Styled>
      {title === null ? "" : <MinorTitle title={title} />}
      <ul>
        {link
          ? list.map((data) => {
              return (
                <li key={data.key}>
                  <Link
                    to={data.to}
                    onClick={() => {
                      listData(menuData, data.key);
                    }}
                  >
                    {data.title}
                  </Link>
                </li>
              );
            })
          : list.map((data) => {
              return <li key={data.key}>{data.title}</li>;
            })}
      </ul>
    </Styled>
  );
}

export default List;
