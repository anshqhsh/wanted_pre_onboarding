import { useState } from 'react';
import styled from 'styled-components';
import { colorCode } from '../common/color';

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const TabMenu = styled.div`
  display: flex;
  padding: 0;
  margin: 0px;
`;
const TabItem = styled.div`
  position: relative;
  margin: 0px;
  height: 50px;
  width: 120px;
  display: flex;
  align-items: center;
  text-align: center;
`;

const ChangedText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  height: 30px;
  text-align: center;
  color: ${({ currentTab }) =>
    currentTab ? colorCode.focus_gray : colorCode.light_gray};
  transition: 0.5s;
  font-size: 1.2rem;
  font-weight: bold;
`;
const LineTab = styled.div`
  position: absolute;
  width: 120px;
  height: 4px;
  background-color: ${colorCode.project_green};
  transform: ${({ currentTab }) =>
    currentTab === 0
      ? 'translateX(0px) '
      : currentTab === 1
      ? 'translateX(120px)'
      : 'translateX(240px)'};
  transition: transform 0.5s;
`;

const Wrap = styled.div`
  background-color: ${colorCode.wrap_gray};
  padding: 20px;
  border-radius: 10px;
`;

const TabWrap = styled.div`
  position: relative;
  border-bottom: 4px solid ${colorCode.border_gray};
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${colorCode.white};
  cursor: pointer;
`;
const Tab = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabArr = ['감자', '고구마', '카레라이스'];

  const makeTab = arr => {
    const tab = arr.map((item, i) => (
      <TabItem
        key={i}
        onClick={() => {
          setCurrentTab(i);
        }}
      >
        <ChangedText currentTab={currentTab === i}>{item}</ChangedText>
      </TabItem>
    ));
    return tab;
  };

  return (
    <Container>
      <Wrap>
        <TabWrap>
          <TabMenu>{makeTab(tabArr)}</TabMenu>
          <LineTab currentTab={currentTab} />
        </TabWrap>
      </Wrap>
    </Container>
  );
};

export default Tab;
