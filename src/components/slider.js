import { useState } from 'react';
import styled from 'styled-components';

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
  color: rgb(175, 175, 175);
  background-color: rgb(235, 235, 235);
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
    background: rgb(80, 173, 174);
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: 30px;
    width: 30px;
    background: rgb(80, 173, 174);
    border-radius: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 5px solid #ffff;
    box-shadow: ${uperSlider('rgb(235, 235, 235)', '-13px')};
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
    ${({ active }) => (active ? 'rgb(80, 173, 174)' : 'rgb(235, 235, 235)')};
  background-color: ${({ active }) =>
    active ? 'rgb(80, 173, 174)' : 'rgb(235, 235, 235)'};
`;
const TextWrap = styled.div`
  width: 450px;
  text-align: right;
  font-size: 1.5rem;
  font-weight: bold;
  border: 2px solid black;
  border-radius: 10px;
  padding: 20px 0;
  padding-right: 20px;
`;
const Text = styled.span`
  color: gray;
  margin: 10px;
`;
function Slider() {
  const [value, setValue] = useState(500); // 표시값은 state/10 % 올림
  const valueArr = [1, 250, 500, 750, 1000]; // pixel 매칭을 위해 잘게 분할
  return (
    <Container>
      <TextWrap>
        <Text>{Math.ceil(value / 10)}</Text>%
      </TextWrap>
      <SliderWrap>
        <CircleWrap>
          {valueArr.map(cirValue => (
            <Circle
              active={cirValue <= value}
              onClick={() => {
                setValue(cirValue);
              }}
            />
          ))}
        </CircleWrap>
        <NewInput
          type="range"
          onInput={e => setValue(e.target.value)}
          value={value}
          min="1"
          max="1000"
        ></NewInput>
      </SliderWrap>
      <SliderContainer>
        {valueArr.map((value, i) => (
          <SliderValueBtn
            key={i}
            onClick={() => {
              setValue(value);
            }}
          >{`${Math.ceil(value / 10)}%`}</SliderValueBtn>
        ))}
      </SliderContainer>
    </Container>
  );
}

export default Slider;
