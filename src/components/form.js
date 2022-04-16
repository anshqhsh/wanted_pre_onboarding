import styled from 'styled-components';

const Box = styled.div`
  width: 90%;
  height: 15rem;
  margin: 1rem auto;
  border-radius: 10px;
  border: 1px solid rgb(184, 184, 184);
  background-color: white;
`;

const SubTitle = styled.div`
  font-size: 1rem;
  float: left;
  margin: 10px;
`;

// 각 기능별 컴포넌트 form
const Form = ({ conponentName, renderComponent }) => {
  return (
    <Box>
      <SubTitle>{conponentName}</SubTitle>
      {/* {renderComponent} */}
    </Box>
  );
};

export default Form;
