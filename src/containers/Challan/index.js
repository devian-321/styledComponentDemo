import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import {Table,Column,VehicleNumberTag,VehicleNumber,PendingChallan,HeadTag,MainContainer,Notice} from './styled.js';
import Header from "./components/Header/index.js";
import axios from "axios";



        
      function Challan() {
        const [vehicleData,setVehicleData] = useState([]);
        const {choice,id} = useParams();
        const [loader,setLoader]=useState(true);


        

        


        console.log(id);


        useEffect (()=>{
          axios
              .get ("https://4d9e0af3-08e5-4271-a537-129c5de57f68.mock.pstmn.io//dashboard/payment/unpaid-violation?licensePlaterNumber=KA27EE9417&violationid=CA3277798")
              .then((res)=>{
                setVehicleData(res.data);
                setLoader(false);
              }).catch((error)=>{
                console.log(error);
              })
        },[]);
        
        let i=1;
        // const ids =  Array(vehicleData.length).fill(false);

        const handleCheckbox = (e)=>{
            const {name,checked} = e.target;
            if(name === "select_all"){
              let tempId = vehicleData.map((vehicleId) => {return {...vehicleId , isChecked : checked}});
              console.log(tempId);
              setVehicleData(tempId);
            }else {
              let tempId = vehicleData.map((vehicleId) => vehicleId.violationId === name ? {...vehicleId, isChecked: checked}: vehicleId);
            // console.log(tempId);


              setVehicleData(tempId);
            }
        };








        if(loader){
          return(<div>loading....</div>)
        }

        

        
        return (
          <MainContainer >

          <HeadTag>
            <VehicleNumberTag>
              Vehicle Number:
            </VehicleNumberTag>
            <VehicleNumber>
              {id}
            </VehicleNumber>  
          </HeadTag>
          <PendingChallan>
         <p> You have {vehicleData.length} pending challans</p>
          </PendingChallan>
          <Notice>
            <p> NOTE:</p>
            <p className="staticNote">Further failure to pay the challans within 90 days, will lead to further penalities, or your vehicles will be seized</p>
          </Notice>

          <Header>

          </Header>

            <Table id="data-table">
              <thead>
              <tr style={{backgroundColor: '#D5D8DE'}}>
                <th>
                <input name="select_all"
                       value="1" 
                       type="checkbox"
                       checked={vehicleData.filter((vehicleId) => vehicleId?.isChecked!==true).length < 1}
                       onChange={handleCheckbox}
                       
                      

                        />
                </th>
                <th>Challan ID</th>
                <th>Date</th>
                <th>City</th>
                <th>Area</th>
                <th>Licence Number</th>
                <th>Violation Type</th>
                <th>Fine Amount</th>
                <th>Due Date</th>
                <th>Evidence</th>
              </tr>
              </thead>
              {vehicleData.map((val, key) => {
                return (
                  <tbody className="checkboxInput">
                  <tr key={key}>
                    <td>
                      <input type="checkbox" 
                            name={val.violationId}
                            onChange={handleCheckbox}
                            checked={val?.isChecked||false}
                      />
                    </td>
                    <td>{val.violationId}</td>
                    <td>{val.violationDate.slice(0,10)}</td>
                    <td>{val.cityName}</td>
                    <td>{val.regionName}</td>
                    <td>{val.licensePlateNumber}</td>
                    <td>{val.violationType}</td>
                    <td>{val.fineAmount}</td>
                    <td>{val.dueDate.slice(0,10)}</td>
                    <td><a href={val.imageUrl}>View</a></td>
                  </tr>
                  </tbody>
                )
              })}
            </Table>
          </MainContainer>
        );
      }
        
      export default Challan;
