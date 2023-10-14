import React from "react";
import { useDispatch } from "react-redux";
import PageTitle from "../../../atoms/PageTitle";
import SubTitle from "../../../atoms/SubTitle";
import Parrgraph from "../../../atoms/Parrgraph";
import Hr from "../../../atoms/Hr";
import List from "../../../molecules/List";
import { MenuData } from "../../../organism/Header/MenuData";
import { LeftMenuData } from "../../../organism/LeftMenu/LeftMenuData";
import { routerStatePush, subMenuChange } from "../../../../store/store";
import Styled from "./styled";

function Main() {
  let dispatch = useDispatch();
  const listClick = (data1, data2) => {
    dispatch(routerStatePush(data1));
    dispatch(subMenuChange(data2));
  };

  return (
    <Styled>
      <PageTitle title="부동산114 Coding Convention" />
      <Parrgraph>{`부동산 114와 HDC LABS의 Coding Convention입니다.
      부동산 114와 HDC LABS의 합작 프로젝트 SmartManage의 원활한 협업을 위해 Coding Convention 제작하게 됐습니다. 
      `}</Parrgraph>
      <Hr top={80} bottom={80} mobileTop={15} mobileBottom={15} />
      <SubTitle title="개요" />
      <Parrgraph bottom={160} mobileBottom={15}>
        {`
        마크업 개발은 프런트 페이지의 기본 구조를 형성하기 때문에 디자인, 브라우저, 스크립트, 성능, 접근성 등과 깊은 연관성이 있으며, 마크업 개발이 잘 구성되어야 모든 브라우저에서 콘텐츠의 손실 없이, 빠르고 쉽게 사용자에게 전달할 수 있습니다.
        가이드를 준수하여 프로젝트 멤버 간 원활한 코드 공유와 일관성 있는 기준으로 소스 코드를 작성하는 것이 중요하며 최초 개발자가 아닌 사람도 코드를 빠르고 정확하게 이해할 수 있도록 작성하는 것은 코드의 유지보수와 업무 효율을 높이는 데 중요한 역할을 합니다.
        위와 같이 코딩 컨벤션은 마크업 개발자가 지켜야 할 표준과 빠른 서비스 유지보수를 위해 통일된 코드 작성법을 제시합니다.`}
      </Parrgraph>
      <SubTitle title="목차" />
      <div>
        {MenuData.map((data) => {
          return (
            <List
              title={data.title}
              list={LeftMenuData[data.key]}
              link={true}
              menuData={data.key}
              listClick={listClick}
              listStyle="disc"
              key={data.key}
            />
          );
        })}
      </div>
      <SubTitle title="버전" />
      <div>
        <List
          title="2023.11.30"
          list={[
            {
              key: 0,
              title: "1차 오픈",
            },
          ]}
          link={false}
          listStyle="disc"
        />
      </div>
      <SubTitle title="담당자" />
      <Parrgraph>{`- 부동산 114 IT본부 가동재 사원`}</Parrgraph>
    </Styled>
  );
}

export default Main;
