import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import {Table,Column,VehicleNumberTag,VehicleNumber,PendingChallan,HeadTag,MainContainer,Notice,Thead,Tbody} from './styled.js';
// import Header from "./components/Header/index.js";
import axios from "axios";
import {LiU,LiP, HeadContainer ,HeadSubContainer,Ul,PayButton,A} from "./components/Header/styled";



        
      function Challan() {
        const [vehicleData,setVehicleData] = useState([]);
        const[paidViolation,setPaidViolation]= useState(false);
        const [loader,setLoader]=useState(true);
        const [payAmount,setPayAmount] = useState(0);
        const {choice,id} = useParams();


        
        useEffect (()=>{
          axios
              .get ("https://4d9e0af3-08e5-4271-a537-129c5de57f68.mock.pstmn.io//dashboard/payment/unpaid-violation?licensePlaterNumber=KA27EE9417&violationid=CA3277798")
              .then((res)=>{
                setVehicleData(res.data);
                setLoader(false);
                setPayAmount(0);
              }).catch((error)=>{
                console.log(error);
              })
        },[]);

       

        const handleCheckbox = (e)=>{
            const {name,checked} = e.target;
            if(name === "select_all"){
              let tempId = vehicleData.map((vehicleId) => {return {...vehicleId , isChecked : checked}});
              // console.log(tempId);
              setPayAmount(sumAmount(tempId));
              setVehicleData(tempId);
            }else {
              let tempId = vehicleData.map((vehicleId) => vehicleId.violationId === name ? {...vehicleId, isChecked: checked}: vehicleId);

             setPayAmount(sumAmount(tempId));
            // console.log(payAmount);
              setVehicleData(tempId);
            }

        };
        useEffect (()=>{
          setPayAmount(payAmount);
          console.log(payAmount);
       },[payAmount])

       

        

        const handlePaidChallan = ()=>{
          setPaidViolation(true);
        }
        const handleUnpaidChallan = ()=>{
          setPaidViolation(false);
        }

        useEffect(()=>{
          setPaidViolation(paidViolation);
          if(paidViolation ===true){
            axios.get ("https://4d9e0af3-08e5-4271-a537-129c5de57f68.mock.pstmn.io//dashboard/payment/paid-violation?licensePlaterNumber=KA27EE9417&violationid=CA3277798")
              .then((res)=>{
                setVehicleData(res.data);
                setLoader(false);
                setPayAmount(0);
              }).catch((error)=>{
                console.log(error);
              });
          }
        },[paidViolation])
       


        const sumAmount = (tempId)=>{
          var sum = 0;
          for(let i=0;i<tempId.length;i++){
           if(tempId[i].isChecked ===true){
            sum+=parseInt(tempId[i].fineAmount);
           }
          }
          return sum;
        }

        

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

          <HeadContainer>
            <HeadSubContainer>
            <nav>
                <Ul>
                    
                    <LiU><A onClick={handleUnpaidChallan} to={`./`}>Unpaid Challan</A></LiU>
                    <LiP><A onClick={handlePaidChallan} >Paid Challan</A></LiP>
                </Ul>
            </nav>
            </HeadSubContainer>
           {paidViolation ===false?  
           <PayButton >
                pay {payAmount}
            </PayButton>
            : <div></div>
            }
            
        
        </HeadContainer>

            <Table id="data-table">
              <Thead>
              <tr>
                {paidViolation === false ? 
                  <th >
                <p>Select All</p>
                <input name="select_all"
                       value="1" 
                       type="checkbox"
                       checked={vehicleData.filter((vehicleId) => vehicleId?.isChecked!==true).length < 1}
                       onChange={handleCheckbox}
                       
                      

                        />
                </th>: <></>}
                <th >Challan ID</th>
                <th>Date</th>
                <th>City</th>
                <th>Area</th>
                <th>Licence Number</th>
                <th>Violation Type</th>
                <th>Fine Amount</th>
               {paidViolation === true? <th>Reciept</th>: <th>Due Date</th>}
                <th>Evidence</th>
              </tr>
              </Thead>
              {vehicleData.map((val, key) => {
                return (
                  <Tbody className="checkboxInput">
                  <tr key={key}>
                    {paidViolation === false ? 
                      <td>
                   
                      <input type="checkbox" 
                            name={val.violationId}
                            onChange={handleCheckbox}
                            checked={val?.isChecked||false}
                      />
                    </td>: <></>
                    }
                    <td>{val.violationId}</td>
                    <td>{val.violationDate.slice(0,10)}</td>
                    <td>{val.cityName}</td>
                    <td>{val.regionName}</td>
                    <td>{val.licensePlateNumber}</td>
                    <td>{val.violationType}</td>
                    <td>{val.fineAmount}</td>
                   {paidViolation ===false?  <td>{val.dueDate.slice(0,10)}</td>: <td></td> }
                    <td><a href={val.imageUrl}>View</a></td>
                  </tr>
                  </Tbody>
                )
              })}
            </Table>
          </MainContainer>
        );
      }
        
      export default Challan;
