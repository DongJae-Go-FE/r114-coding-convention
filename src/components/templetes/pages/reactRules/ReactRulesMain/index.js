import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../../../common/Layout";
import Parrgraph from "../../../../atoms/Parrgraph";
import Hr from "../../../../atoms/Hr";
import SubTitle from "../../../../atoms/SubTitle";
import List from "../../../../molecules/List";

function ReactRulesMain() {
  let subMenuState = useSelector((state) => state.subMenu);

  const listData = [
    {
      key: 0,
      title: "Component - 컴포넌트 안에서 작성 규칙을 설명합니다.",
    },
    {
      key: 1,
      title: "EmotionStyled - CSS in JS인 EmotionStyled에 대해 설명합니다.",
    },
    {
      key: 2,
      title: "Hook - Hook - 리액트 Hook에 대해 설명합니다",
    },
  ];
  return (
    <Layout title="리액트">
      {subMenuState === 0 ? (
        <>
          <Parrgraph>{`리액트 프로젝트에서 지켜야 할 규칙에 대해 설명합니다.`}</Parrgraph>
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

export default ReactRulesMain;
