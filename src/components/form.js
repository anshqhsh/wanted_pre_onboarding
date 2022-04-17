import styled from 'styled-components';

const Box = styled.div`
  min-width: 600px;
  width: 90%;
  height: 15rem;
  margin: 1rem auto;
  border-radius: 10px;
  border: 1px solid rgb(184, 184, 184);
  background-color: white;
`;

const SubTitle = styled.div`
  position: absolute;
  font-size: 1rem;
  float: left;
  margin: 10px;
`;

// 각 기능별 컴포넌트 form
const Form = ({ componentName, componentForm }) => {
  return (
    <Box>
      <SubTitle>{componentName}</SubTitle>
      {componentForm}
    </Box>
  );
};

export default Form;
