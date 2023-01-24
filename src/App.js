
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Form from './containers/Form';
import PaidChallan from './containers/Paid Challan';
import UnpaidChallan from './containers/Unpaid Challan';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Form />} />
          <Route exact path='/paidChallan' element={<PaidChallan />} />
          <Route exact path='/unpaidChallan' element={<UnpaidChallan />} />
          <Route default path='/' />
        </Routes>
      </BrowserRouter>
       {/* <Form>Form Component</Form>
    <UnpaidChallan> unpaidChallan</UnpaidChallan> */}
    </div>
    
  
  );
}

export default App;
