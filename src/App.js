
import './App.css';
import {Button,FancyButton} from './components/button'
import Form from './components/form'

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
      <div><br /></div>
      <Form>Form Component</Form>

    </div>
    
  
  );
}

export default App;
