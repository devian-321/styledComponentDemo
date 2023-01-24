
import './App.css';
import { BrowserRouter,Route,Routes,useParams } from 'react-router-dom';
import Form from './containers/Form';
import PaidChallan from './containers/Paid Challan';
import UnpaidChallan from './containers/Unpaid Challan';



{/* <Route path="users">
<Route path=":userId" element={<ProfilePage />} />
<Route path="me" element={...} />
</Route> */}

function App() {

    // let {vehicleNumber} = useParams();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Form />} />
          <Route exact path='/paidChallan' element={<PaidChallan />} ></Route>
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
