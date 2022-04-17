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

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Items = styled.div``;

const Input = () => {
  const [isEmail, setIsEmail] = useState(false);
  const [isPwd, setIsPwd] = useState(false);

  return (
    <Container>
      <InputForm>
        <Items>
          <label>
            <div>E-mail</div>
            <input
              name="E-mail"
              type="text"
              placeholder="Email"
              required //
            ></input>
          </label>
        </Items>
        <Items>
          <label>
            <div>Password</div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="form-input"
            />
          </label>
        </Items>
      </InputForm>
    </Container>
  );
};

export default Input;
