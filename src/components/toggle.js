import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const SlideToggle = styled.div`
  position: absolute;
  width: 250px;
  height: 30px;
  border-radius: 30px;
  background-color: lightgray;
  padding: 4px;
  margin: 0px;
  overflow: auto;
`;
const Slider = styled.div`
  width: 125px;
  height: 30px;
  border-radius: 30px;
  background-color: rgb(253, 253, 253);
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
  color: ${({ isOn }) => (isOn ? 'rgb(161, 161, 161)' : 'rgb(90, 90, 90)')};
`;

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <Container>
      <SlideToggle isOn={isOn} onClick={() => setIsOn(!isOn)}>
        <Slider isOn={isOn} />
        <TextWrapper>
          <ChangedText isOn={isOn}>기본</ChangedText>
          <ChangedText isOn={!isOn}>상세</ChangedText>
        </TextWrapper>
      </SlideToggle>
    </Container>
  );
};

export default Toggle;
