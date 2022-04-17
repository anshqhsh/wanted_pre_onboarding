import styled from 'styled-components';
import './App.css';
import Form from './components/form';
import Input from './components/Input';
import Slider from './components/slider';
import Tab from './components/tab';
import Toggle from './components/toggle';

// container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 3rem;
  margin: 1rem;
  text-align: center;
  color: rgb(80, 173, 174);
`;

// 각 기능컴포넌트를 form.js에 담아 렌더링
function App() {
  return (
    <Container>
      <Title>React Components</Title>
      <Form componentName={'Toggle'} componentForm={<Toggle />}></Form>
      <Form componentName={'Tab'} componentForm={<Tab />}></Form>
      <Form componentName={'Slider'} componentForm={<Slider />}></Form>
      <Form componentName={'Input'} componentForm={<Input />}></Form>
      <Form componentName={'Dropdown'} componentForm={''}></Form>
    </Container>
  );
}

export default App;
