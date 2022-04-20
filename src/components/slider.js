import { useState } from 'react';
import styled from 'styled-components';
import { colorCode } from '../common/color';

// chrome과 safari에서 Webkit 스타일시트로 교체 해서 적용이 안됨 - 해결법
// slider 를 shadow로 직접 그려줌
const uperSlider = (color, size) => {
  let i = 12;
  let shadow = `${i}px 0 0 ${size} ${color}`;

  for (i; i < 500; i++) {
    shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
  }

  return shadow;
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const Wrap = styled.div`
  background-color: ${colorCode.wrap_gray};
  padding: 20px;
  border-radius: 10px;
`;

const SliderContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
`;
const SliderValueBtn = styled.div`
  width: 60px;
  text-align: center;
  font-size: 0.8rem;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 10px;
  color: ${colorCode.font_gray};
  background-color: ${colorCode.button_gray};
`;

const NewInput = styled.input`
  overflow: hidden;
  width: 460px;
  height: 40px;
  margin: 0;
  appearance: none;
  cursor: pointer;
  background-color: transparent;
  z-index: 1;

  &:focus {
    outline: none;
  }

  // Firefox 브라우저 대응 css
  &:focus::-moz-range-thumb {
    height: 16px;
    width: 16px;
    background: ${colorCode.project_green};
    border: 4px solid ${colorCode.white};
    border-radius: 100%;
    outline: none;
  }
  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: 4px;
    background: ${colorCode.button_gray};
  }
  &::-moz-range-progress {
    background: ${colorCode.project_green};
  }
  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: 20px;
    width: 20px;
    background: ${colorCode.project_green};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    background: ${colorCode.project_green};
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: 30px;
    width: 30px;
    background: ${colorCode.project_green};
    border-radius: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid ${colorCode.white};
    box-shadow: ${uperSlider(colorCode.button_gray, '-12px')};
  }
`;
const SliderWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CircleWrap = styled.div`
  position: absolute;
  width: 460px;
  display: flex;
  justify-content: space-between;
  pointer-events: none; // div테그 반응 x
`;
const Circle = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  border: 2px solid
    ${({ active }) =>
      active ? colorCode.project_green : colorCode.button_gray};
  background-color: ${({ active }) =>
    active ? colorCode.project_green : colorCode.button_gray};
`;
const TextWrap = styled.div`
  width: 450px;
  text-align: right;
  font-size: 1.5rem;
  font-weight: bold;
  border: 2px solid ${colorCode.border_gray};
  border-radius: 10px;
  padding: 20px 0;
  padding-right: 20px;
`;
const Text = styled.span`
  color: ${colorCode.light_gray};
  margin: 10px;
`;

const Slider = () => {
  const [value, setValue] = useState(500); // value의 범위를 1~1000으로 설정
  const valueArr = [1, 250, 500, 750, 1000]; // pixel 매칭을 위해 잘게 분할

  const makeCircle = arr => {
    const circles = arr.map((cirValue, i) => (
      <Circle
        key={i}
        active={cirValue <= value}
        onClick={() => {
          setValue(cirValue);
        }}
      />
    ));
    return circles;
  };
  const makeValuebtn = arr => {
    const valueBtn = arr.map((value, i) => (
      <SliderValueBtn
        key={i}
        onClick={() => {
          setValue(value);
        }}
      >{`${Math.ceil(value / 10)}%`}</SliderValueBtn>
    ));
    return valueBtn;
  };
  return (
    <Container>
      <Wrap>
        <TextWrap>
          <Text>{Math.ceil(value / 10)}</Text>
          <span>%</span>
        </TextWrap>
        <SliderWrap>
          <CircleWrap>{makeCircle(valueArr)}</CircleWrap>
          <NewInput
            type="range"
            onInput={e => setValue(e.target.value)}
            value={value}
            min="1"
            max="1000"
          ></NewInput>
        </SliderWrap>
        <SliderContainer>{makeValuebtn(valueArr)}</SliderContainer>
      </Wrap>
    </Container>
  );
};

export default Slider;
