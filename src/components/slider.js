import { useState } from 'react';
import styled from 'styled-components';
import { colorCode } from '../common/color';

// const trackFill = css`
//   height: 6px;
//   background-color: transparent;
//   background-image: linear-gradient(#ffc069, #ffc069),
//     linear-gradient(#ccced0, #ccced0);
//   background-size: var(--sx) 6px, calc(100% - var(--sx)) 4px;
//   background-position: left center, right center;
//   background-repeat: no-repeat;
// `;

// const fill = css`
//   height: 0.4em;
//   background: ffc069;
//   border-radius: 4px;
// `;

// const thumb = css`
//   box-sizing: border-box;
//   border: none;
//   width: 1.5em;
//   height: 1.5em;
//   border-radius: 50%;
//   background: rgb(253, 253, 253);
// `;

// const Input = styled.input`
//   &,
//   &::-webkit-slider-thumb {
//     -webkit-appearance: none;
//   }

//   &:focus {
//     outline: none;
//   }

//   // 브라우저 대응
//   &:focus::-webkit-slider-thumb {
//     box-shadow: 0 0 5px red;
//   }

//   &:focus::-moz-range-thumb {
//     outline: -webkit-focus-ring-color auto px;
//   }

//   &:focus::-ms-thumb {
//     outline: -webkit-focus-ring-color auto 5px;
//   }

//   --range: calc(var(--max) - var(--min));
//   --ratio: calc((var(--val) - var(--min)) / var(--range));
//   --sx: calc(0.5 * 1.5em + var(--ratio) * (100% - 1.5em));

//   margin: 0;
//   padding: 0;
//   height: 1.5em;
//   background: transparent;
//   font: 1em/1 arial, sans-serif;

//   &::-webkit-slider-runnable-track {
//     ${trackFill};
//   }

//   &::-moz-range-progress {
//     ${fill};
//   }

//   &::-ms-fill-lower {
//     ${fill};
//   }

//   &::-webkit-slider-thumb {
//     margin-top: calc(0.5 * (0.4em - 1.5em));
//     ${thumb};
//   }
// `;
// chrome과 safari에서 Webkit 스타일시트로 교체 해서 적용이 안됨 - 해결법
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

  &:focus {
    outline: none;
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
    box-shadow: ${uperSlider(colorCode.button_gray, '-13px')};
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

const Slider = ({ percent }) => {
  // 실제 사용시에 퍼센테이지를 받아 value를 셋팅 할 것 같아 percent를 받아와서 setState
  const [value, setValue] = useState(percent > 100 ? 1000 : percent * 10);
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
