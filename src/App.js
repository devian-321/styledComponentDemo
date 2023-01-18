
import './App.css';
import {Button,FancyButton} from './components/button'
function App() {
  return (
    <div className="App">
      <Button>Button</Button>
      <div>
        <br />
      </div>
      <Button primary>StyledButton</Button>
      <div>
        <br />
      </div>
      <FancyButton as='a'>StyledButton</FancyButton>
    </div>
  );
}

export default App;
