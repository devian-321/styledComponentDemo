
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Form from './components/Enter Detail';
import UnpaidChallan from './components/Paid Challan';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Form />} />
          <Route exact path='/unpaidChallan' element={<UnpaidChallan />} />
        </Routes>
      </BrowserRouter>
       {/* <Form>Form Component</Form>
    <UnpaidChallan> unpaidChallan</UnpaidChallan> */}
    </div>
    
  
  );
}

export default App;
