import styled from 'styled-components';
import './App.css';
import Form from './components/form';

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

function App() {
  return (
    <Container>
      <Title>React Components</Title>
      <Form conponentName={'Toggle'} renderComponent={''}></Form>
      <Form conponentName={'Tab'} renderComponent={''}></Form>
      <Form conponentName={'Slider'} renderComponent={''}></Form>
      <Form conponentName={'Input'} renderComponent={''}></Form>
      <Form conponentName={'Dropdown'} renderComponent={''}></Form>
    </Container>
  );
}

export default App;
