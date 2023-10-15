import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../../../common/Layout";
import Parrgraph from "../../../../atoms/Parrgraph";
import Hr from "../../../../atoms/Hr";
import SubTitle from "../../../../atoms/SubTitle";
import List from "../../../../molecules/List";

function WebAccessibility() {
  let subMenuState = useSelector((state) => state.subMenu);

  const listData = [
    {
      key: 0,
      title: "accessibility - 웹 접근성에 대해 설명합니다",
    },
    {
      key: 1,
      title: "Wai-Aria - 설명",
    },
  ];
  return (
    <Layout title="웹 접근성">
      {subMenuState === 0 ? (
        <>
          <Parrgraph>{`웹 접근성에 대해 설명합니다.`}</Parrgraph>
          <Hr top={80} bottom={80} mobileTop={15} mobileBottom={15} />
          <SubTitle title="규칙 설명" />
          <List list={listData} link={false} listStyle="circle" />
        </>
      ) : (
        <Outlet />
      )}
    </Layout>
  );
}

export default WebAccessibility;
