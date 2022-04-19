import { useState } from 'react';
import styled from 'styled-components';
import { colorCode } from '../common/color';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const ToggleWrap = styled.div`
  width: 300px;
  height: 40px;
  background-color: ${colorCode.wrap_gray};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
`;

const SlideToggle = styled.div`
  position: absolute;
  width: 250px;
  height: 30px;
  border-radius: 30px;
  background-color: ${colorCode.button_gray};
  padding: 4px;
  margin: 0px;
  overflow: auto;
`;
const Slider = styled.div`
  width: 125px;
  height: 30px;
  border-radius: 30px;
  background-color: ${colorCode.white};
  animation: ${({ isOn }) => (isOn ? 'ToggleOn' : 'ToggleOff')} 0.2s ease-out
    forwards;

  @keyframes ToggleOn {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(125px);
    }
  }

  @keyframes ToggleOff {
    0% {
      transform: translateX(125px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  height: 30px;
  top: 4px;
  left: 4px;
  font-weight: bold;
`;
const ChangedText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  height: 30px;
  text-align: center;
  color: ${({ isOn }) => (isOn ? colorCode.light_gray : colorCode.focus_gray)};
`;

const Toggle = () => {
  const [isOn, setIsOn] = useState(false); //오른쪽에 위치하는것이 on(true)의 기준

  return (
    <Container>
      <ToggleWrap>
        <SlideToggle isOn={isOn}>
          <Slider isOn={isOn} />
          <TextWrapper>
            <ChangedText
              isOn={isOn}
              onClick={() => {
                setIsOn(false);
              }}
            >
              기본
            </ChangedText>
            <ChangedText
              isOn={!isOn}
              onClick={() => {
                setIsOn(true);
              }}
            >
              상세
            </ChangedText>
          </TextWrapper>
        </SlideToggle>
      </ToggleWrap>
    </Container>
  );
};

export default Toggle;
