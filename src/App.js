
import './App.css';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`
function App() {
  return (
    <div className="App">
      <Button>Button</Button>
    </div>
  );
}

export default App;
