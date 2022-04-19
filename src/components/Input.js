import { useState } from 'react';
import styled from 'styled-components';
import { ImEye } from 'react-icons/im';
import { BsCheckCircleFill } from 'react-icons/bs';
import { colorCode } from '../common/color';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;

  .onLogo {
    color: ${colorCode.project_green};
  }
  .offLogo {
    color: ${colorCode.light_gray};
  }
`;

const ItemsWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colorCode.wrap_gray};
  padding: 20px;
  border-radius: 10px;
  div.print_invaild {
    font-size: 0.5rem;
    margin: 4px;
    color: ${colorCode.red};
  }
  div.subTitle {
    font-size: 0.8rem;
    margin-bottom: 4px;
    margin-left: 4px;
    color: ${colorCode.font_gray};
  }
`;
const Item = styled.div`
  margin-bottom: 5px;
`;
const Label = styled.label`
  width: 220px;
  height: 32px;
  display: flex;
  border: 2px solid ${colorCode.border_gray};
  border-radius: 2px;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  // 내부요소 focus를 부모테그에서 사용
  &:focus-within {
    border: 2px solid ${colorCode.focus_gray};
    border-radius: 4px;
  }
`;

const ItemInput = styled.input`
  height: 22px;
  background-color: ${colorCode.wrap_gray};
  outline: none;
  border: none;
  border-radius: 4px;
`;

const Input = () => {
  const [showPwd, setShowPwd] = useState(false); // 패스워드
  const [vaildEmail, setVaildEmail] = useState(false); // 입력된 텍스트의 형식
  const [printMsg, setPrintMsg] = useState(false); // vaildText 출력 여부
  const [emailTxt, setEmailTxt] = useState(''); // 등록되는 텍스트 값

  // 이메일 정규식으로 형태 판별
  const checkRgexEmail = e => {
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e)) {
      setVaildEmail(true);
    } else {
      setVaildEmail(false);
    }
  };
  return (
    <Container>
      <ItemsWrap>
        <Item>
          <div className="subTitle">E-mail</div>
          <Label>
            <ItemInput
              name="E-mail"
              type="text"
              placeholder="Email"
              onChange={e => {
                checkRgexEmail(e.target.value);
              }}
              onBlur={e => {
                setEmailTxt(e.target.value); // onchange에서 state를 변경해주면 component의 렌더링이 일어나 Input밖을 선택했을때 text를 set
                !vaildEmail ? setPrintMsg(true) : setPrintMsg(false);
              }}
            ></ItemInput>
            <BsCheckCircleFill className={vaildEmail ? 'onLogo' : 'offLogo'} />
          </Label>
          {printMsg && emailTxt !== '' && !vaildEmail ? (
            <div className="print_invaild">invaild e-mail address.</div>
          ) : null}
        </Item>
        <Item>
          <div className="subTitle">Password</div>
          <Label>
            <ItemInput
              name="password"
              type={!showPwd ? 'password' : 'text'}
              placeholder="Password"
              className="form-input"
            />
            <ImEye
              className={showPwd ? 'onLogo' : 'offLogo'}
              onClick={() => {
                setShowPwd(!showPwd); // 비밀번호 노출여부
              }}
            />
          </Label>
        </Item>
      </ItemsWrap>
    </Container>
  );
};

export default Input;
