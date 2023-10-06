import React from "react";
import PageTitle from "../../../atoms/PageTitle";
import SubTitle from "../../../atoms/SubTitle";
import Parrgraph from "../../../atoms/Parrgraph";
import Hr from "../../../atoms/Hr";
import List from "../../../molecules/List";
import { MenuData } from "../../../organism/Header/MenuData";
import { LeftMenuData } from "../../../organism/LeftMenu/LeftMenuData";
import Styled from "./styled";

function Main() {
  return (
    <Styled>
      <PageTitle title="부동산114 Coding Convention" />
      <Parrgraph>부동산 114와 HDC LABS의 Coding Convention입니다.</Parrgraph>
      <Hr top={80} bottom={80} />
      <SubTitle title="개요 (Overview)" />
      <Parrgraph bottom={160}>
        부동산 114와 HDC LABS의 합작 프로젝트 SmartManage의 원활한 협업을 위해
        Coding Convention 제작하게 됐습니다.
      </Parrgraph>
      <SubTitle title="목차 (List)" />
      <div>
        {MenuData.map((data) => {
          return (
            <List
              title={data.title}
              list={LeftMenuData[data.key]}
              link={true}
            />
          );
        })}
      </div>
      <SubTitle title="업데이트 버전 (Release Note)" />
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
        />
      </div>
      <SubTitle title="담당자 (Manager)" />
      <Parrgraph>- 부동산 114 IT본부 가동재 사원</Parrgraph>
    </Styled>
  );
}

export default Main;
