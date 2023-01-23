
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Form from './components/Form';
import PaidChallan from './components/Paid Challan';
import UnpaidChallan from './components/Unpaid Challan';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Form />} />
          <Route exact path='/paidChallan' element={<PaidChallan />} />
          <Route exact path='/unpaidChallan' element={<UnpaidChallan />} />
        </Routes>
      </BrowserRouter>
       {/* <Form>Form Component</Form>
    <UnpaidChallan> unpaidChallan</UnpaidChallan> */}
    </div>
    
  
  );
}

export default App;
