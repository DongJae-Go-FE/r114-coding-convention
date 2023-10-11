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
      text: "분류 폴더",
      value: "classification",
      width: "200px",
    },
    {
      text: "서브 폴더",
      value: "sub",
    },
    {
      text: "파일 이름",
      value: "name",
    },
    {
      text: "파일 설명",
      value: "info",
    },
  ];
  const tableData2 = [
    {
      classification: <p>font</p>,
      sub: "",
      name: "",
      info: <p>웹폰트 (otf, ttf, woff, woff2)</p>,
    },
    {
      classification: <p>css</p>,
      sub: "",
      name: (
        <ul>
          <li>reset.css</li>
          <li>main.css</li>
          <li>sub.css</li>
          <li>common.css</li>
        </ul>
      ),
      info: (
        <ul>
          <li>기본 css 스타일 초기화, 폰트 불러오기, 색상 변수</li>
          <li>메인 페이지 사용 css</li>
          <li>서브 페이지 사용 css</li>
          <li>공통 사용 모듈 css</li>
        </ul>
      ),
    },
    {
      classification: <p>scss</p>,
      sub: <p>보류</p>,
      name: <p>보류</p>,
      info: <p>보류</p>,
    },
    {
      classification: <p>html</p>,
      sub: (
        <ul>
          <li>main</li>
          <li>sub</li>
        </ul>
      ),
      name: (
        <ul>
          <li>index.html</li>
          <li>1~10-1~10.html</li>
        </ul>
      ),
      info: (
        <ul>
          <li>메인 html 파일</li>
          <li>서브 html 파일 작명법 ex)1-1, 1-2...</li>
        </ul>
      ),
    },
    {
      classification: <p>js</p>,
      sub: (
        <ul>
          <li>script</li>
          <li>lib</li>
        </ul>
      ),
      name: (
        <ul>
          <li>script.js</li>
          <li>lib.js</li>
        </ul>
      ),
      info: (
        <ul>
          <li>직접 작성 스크립트 파일</li>
          <li>라이브러리 스크립트 파일</li>
        </ul>
      ),
    },
    {
      classification: <p>img</p>,
      sub: (
        <ul>
          <li>images</li>
          <li>icons</li>
        </ul>
      ),
      name: (
        <ul>
          <li>규칙 가이드 작명법 참고</li>
          <li>규칙 가이드 작명법 참고</li>
        </ul>
      ),
      info: (
        <ul>
          <li>이미지 파일</li>
          <li>아이콘 이미지 파일</li>
        </ul>
      ),
    },
  ];

  const columns2 = [
    {
      text: "분류 폴더",
      value: "classification",
      width: "100px",
    },
    {
      text: "서브 폴더",
      value: "sub",
      width: "150px",
    },
    {
      text: "아토믹 폴더",
      value: "sub2",
      width: "150px",
    },
    {
      text: "파일 설명",
      value: "info",
    },
  ];

  const tableData3 = [
    {
      classification: <p>public</p>,
      sub: "",
      sub2: "",
      info: <p>이미지, 아이콘 등 관련 파일 저장</p>,
    },
    {
      classification: <p>src</p>,
      sub: <p>components</p>,
      sub2: (
        <ul>
          <li>atoms</li>
          <li>molecules</li>
          <li>organisms</li>
          <li>templates</li>
          <li>page</li>
        </ul>
      ),
      info: (
        <ul>
          <li>
            atom은 더 이상 분해할 수 없는 기본 컴포넌트입니다. label, input,
            button과 같이 기본 태그 혹은 글꼴, 애니메이션, 컬러 팔레트,
            레이아웃과 같이 추상적인 요소도 포함될 수 있습니다.
          </li>
          <li>
            molecule은 여러 개의 atom을 결합하여 자신의 고유한 특성을 가집니다
            그리고 molecule의 중요한 점은 한 가지 일을 하는 것입니다. ex)입력
            폼, 내비게이션, 카드
          </li>
          <li>
            organism은 앞 단계보다 좀 더 복잡하고 서비스에서 표현될 수 있는
            명확한 영역과 특정 컨텍스트를 가집니다. 이것은 atom, molecule,
            organism으로 구성할 수 있습니다. ex) 헤더, 풋터
          </li>
          <li>
            template은 page를 만들 수 있도록 여러 개의 organism, molecule로
            구성할 수 있습니다. 즉, 실제 콘텐츠가 없는 page 수준의
            스켈레톤이라고 정의할 수 있습니다.
          </li>
          <li>page는 유저가 볼 수 있는 실제 콘텐츠를 담고 있습니다. </li>
        </ul>
      ),
    },
  ];

  return (
    <Layout title="기본 정책">
      <Parrgraph>{`프로젝트의 기본 정책입니다.`}</Parrgraph>
      <Hr top={80} bottom={80} mobileTop={15} mobileBottom={15} />
      <SubTitle title="프로젝트 환경" />
      <CustomTable tableData={tableData} />
      <SubTitle title="기본 파일 / 폴더 구성" />
      <Table
        caption="기본 파일/ 폴더 구성 테이블"
        columns={columns}
        tableData={tableData2}
      />
      <SubTitle title="아토믹 디자인 패턴 파일 / 폴더 구성" />
      <Parrgraph
        bottom={12}
        mobileBottom={5}
      >{`아토믹 디자인이란? 가장 작은 컴포넌트 단위를 원자(Atoms)로 설정하고, 이를 바탕트오 상우 컴포넌트를 만들어 코드 재사용을 최대화 하는 방법론 입니다.
      상위 컴포넌트는 순서대로 원자(atom), 분자(Molecules), 유기체(Organisms), 템플릿(Templets)으로 가며 최종적으로 페이지(Pages)를 관리합니다.
      현재 부동산 114는 리액트 기반 프로젝트를 진행할 때는 아토믹 디자인 패턴을 기반으로 개발을 진행하고 있습니다.
      `}</Parrgraph>
      <Table
        caption="아토믹 디자인 패턴 파일 / 폴더 구성 테이블"
        columns={columns2}
        tableData={tableData3}
      />
    </Layout>
  );
}

export default BasicPolicy;
