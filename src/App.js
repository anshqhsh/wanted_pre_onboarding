import styled from 'styled-components';
import './App.css';
import Form from './common/form';
import Input from './components/Input';
import Slider from './components/slider';
import Tab from './components/tab';
import Toggle from './components/toggle';
import DropDown from './components/dropdown';
import { colorCode } from './common/color';

// container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colorCode.white};
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 3rem;
  margin: 1rem;
  text-align: center;
  color: ${colorCode.project_green};
`;

// 각 기능컴포넌트를 form.js에 담아 렌더링
function App() {
  return (
    <Container>
      <Title>React Components</Title>
      <Form componentName={'Toggle'} componentForm={<Toggle />}></Form>
      <Form componentName={'Tab'} componentForm={<Tab />}></Form>
      <Form
        componentName={'Slider'}
        componentForm={<Slider percent={50} />}
      ></Form>
      <Form componentName={'Input'} componentForm={<Input />}></Form>
      <Form componentName={'Dropdown'} componentForm={<DropDown />}></Form>
    </Container>
  );
}

export default App;
