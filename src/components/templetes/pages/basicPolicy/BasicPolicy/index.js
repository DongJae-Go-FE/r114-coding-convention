import React from "react";
import Layout from "../../../common/Layout";
import Parrgraph from "../../../../atoms/Parrgraph";
import Hr from "../../../../atoms/Hr";
import SubTitle from "../../../../atoms/SubTitle";
import CustomTable from "../../../../atoms/CustomTable";

function BasicPolicy() {
  const data = [
    {
      key: 0,
      title: "마크업 언어",
      content: "HTML5, CSS3",
    },
    {
      key: 1,
      title: "개발 언어",
      content: "JavaScript, TypeScript(선택사항)",
    },
    {
      key: 2,
      title: "라이브러리",
      content: "React, Next.js(선택사항)",
    },
    {
      key: 3,
      title: "인코딩",
      content: "UTF-8",
    },
    {
      key: 4,
      title: "크로스 브라우징",
      content: "Chrome, Microsoft Edge, Safari, Firefox, Opera, Whale",
    },
    {
      key: 5,
      title: "해상도",
      content: "보류",
    },
  ];

  return (
    <Layout title="기본 정책">
      <Parrgraph>프로젝트의 기본 정책입니다.</Parrgraph>
      <Hr top={80} bottom={80} mobileTop={15} mobileBottom={15} />
      <SubTitle title="프로젝트 환경" />
      <CustomTable list={data} />
      <SubTitle title="기본 파일 / 폴더 구성" />
      <SubTitle title="아토믹 디자인 파일 / 폴더 구성" />
    </Layout>
  );
}

export default BasicPolicy;
