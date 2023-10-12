import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../../../common/Layout";
import Parrgraph from "../../../../atoms/Parrgraph";
import Hr from "../../../../atoms/Hr";
import SubTitle from "../../../../atoms/SubTitle";
import List from "../../../../molecules/List";

function RulesGuide() {
  let subMenuState = useSelector((state) => state.subMenu);

  const listData = [
    {
      key: 0,
      title:
        "Naming Rules - 폴더, 이미지, HTML, CSS, JS에 대한 작명 규칙을 설명합니다.",
    },
    {
      key: 1,
      title: "HTML Rules - HTML, 시멘틱 마크업과 SEO에 대한 규칙을 설명합니다.",
    },
    {
      key: 2,
      title:
        "CSS Rules - CSS 작성 순서와 Class와 ID 작명 규칙에 대해 설명합니다.",
    },
    {
      key: 3,
      title: "JavaScript Rules - JavaScript에 대한 작성 규칙을 설명합니다.",
    },
  ];

  return (
    <Layout title="규칙 가이드">
      {subMenuState === 0 ? (
        <>
          {" "}
          <Parrgraph>{`프로젝트를 진행하면서 지켜야 하는 규칙에 대해 설명합니다.`}</Parrgraph>
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

export default RulesGuide;
