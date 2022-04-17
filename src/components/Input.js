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
`;

const Input = () => {
  const [isEmail, setIsEmail] = useState(false);
  const [isPwd, setIsPwd] = useState(false);

  return (
    <Container>
      <form>
        <input
          name="username"
          type="text"
          placeholder="Id"
          className="form-input"
          required
        ></input>
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="form-input"
        />
      </form>
    </Container>
  );
};

export default Input;
