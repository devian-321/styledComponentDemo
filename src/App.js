
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import { lazy, Suspense } from 'react';
import Form from './containers/Form';
// import UnpaidChallan from './containers/Unpaid Challan';
// import Spinner from './components/Spinner';
import Challan from './containers/Challan';
import "./fonts/Inter/Inter-SemiBold.ttf";
import "./fonts/Inter/Inter-Regular.ttf";

// const Form = lazy(()=> import("./containers/Form"));













function App() {

    // let {vehicleNumber} = useParams();
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Suspense fallback={<div><Spinner /></div>} /> */}
        <Routes>
          <Route exact path='/' element={<Form />} />
          <Route exact path='/Challan/:choice/:id' element={<Challan />} ></Route>
          {/* <Route exact path='/unpaidChallan' element={<UnpaidChallan />} /> */}
          <Route default path='/' />
        </Routes>
      </BrowserRouter>
       {/* <Form>Form Component</Form>
    <UnpaidChallan> unpaidChallan</UnpaidChallan> */}
    </div>
    
  
  );
}

export default App;
