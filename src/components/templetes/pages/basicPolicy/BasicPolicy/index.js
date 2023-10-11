import React from "react";
import Layout from "../../../common/Layout";
import Parrgraph from "../../../../atoms/Parrgraph";
import Hr from "../../../../atoms/Hr";
import SubTitle from "../../../../atoms/SubTitle";
import CustomTable from "../../../../atoms/CustomTable";
import Table from "../../../../atoms/Table";

function BasicPolicy() {
  const tableData = [
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

  const columns = [
    {
      text: "Name",
      value: "con1",
      width: "100px",
    },
    {
      text: "Version",
      value: "con2",
      width: "100px",
    },
    {
      text: "Launch Date",
      value: "con3",
      width: "100px",
    },
  ];
  const tableData2 = [
    { con1: "테스트1", con2: "1", con3: "1" },
    { con1: "테스트2", con2: "2", con3: "2" },
    { con1: "테스트3", con2: "3", con3: "3" },
  ];

  return (
    <Layout title="기본 정책">
      <Parrgraph>프로젝트의 기본 정책입니다.</Parrgraph>
      <Hr top={80} bottom={80} mobileTop={15} mobileBottom={15} />
      <SubTitle title="프로젝트 환경" />
      <CustomTable tableData={tableData} />
      <SubTitle title="기본 파일 / 폴더 구성" />
      <Table
        caption="기본 파일/ 폴더 구성 테이블"
        columns={columns}
        tableData={tableData2}
      />
      <SubTitle title="아토믹 디자인 파일 / 폴더 구성" />
    </Layout>
  );
}

export default BasicPolicy;
