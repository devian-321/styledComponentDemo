
import './App.css';
import { BrowserRouter,Route,Routes,useParams } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Form from './containers/Form';
import UnpaidChallan from './containers/Unpaid Challan';
import Spinner from './components/Spinner';

import "./fonts/Inter/Inter-SemiBold.ttf";
import "./fonts/Inter/Inter-Regular.ttf";

// const Form = lazy(()=> import("./containers/Form"));
const Challan = lazy(()=> import("./containers/Challan"));










{/* <Route path="users">
<Route path=":userId" element={<ProfilePage />} />
<Route path="me" element={...} />
</Route> */}

function App() {

    // let {vehicleNumber} = useParams();
  return (
    <div className="App">
      <BrowserRouter>
      <Suspense fallback={<div><Spinner /></div>} />
        <Routes>
          <Route exact path='/' element={<Form />} />
          <Route exact path='/Challan/:choice/:id' element={<Challan />} ></Route>
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
