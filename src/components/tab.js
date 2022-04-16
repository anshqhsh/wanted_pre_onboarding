import { useRef, useState } from 'react';
import styled from 'styled-components';

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
  width: 100px;
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
    currentTab ? 'rgb(161, 161, 161)' : 'rgb(90, 90, 90)'};
  transition: 0.5s;
`;
const LineTab = styled.div`
  position: absolute;
  width: 100px;
  height: 2px;
  background-color: rgb(80, 173, 174);
  transform: ${({ currentTab }) =>
    currentTab === 0
      ? 'translateX(0px) '
      : currentTab === 1
      ? 'translateX(100px)'
      : 'translateX(200px)'};

  transition: transform 0.5s;
`;

const TabWrap = styled.div`
  position: relative;
  border-bottom: 2px solid gray;
  padding-left: 10px;
  padding-right: 10px;
  background-color: rgb(253, 253, 253);
`;
const Tab = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabArr = ['감자', '고구마', '카레라이스'];

  return (
    <Container>
      <TabWrap>
        <TabMenu>
          {tabArr.map((item, i) => (
            <TabItem
              ket={i}
              onClick={() => {
                setCurrentTab(i);
              }}
            >
              <ChangedText currentTab={currentTab === i}>{item}</ChangedText>
            </TabItem>
          ))}
        </TabMenu>
        <LineTab currentTab={currentTab} />
      </TabWrap>
    </Container>
  );
};

export default Tab;
