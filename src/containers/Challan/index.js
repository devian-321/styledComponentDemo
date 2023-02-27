import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import {Table,VehicleNumberTag,VehicleNumber,PendingChallan,HeadTag,MainContainer,Notice,Thead,Tbody} from './styled.js';
import { HeadPContainer,SubContainer,P,PageNumber,Button } from "./components/pagenation/styles";
import axios from "axios";
import { Link } from "react-router-dom";
// import { getPrevPage,getNextPage } from "./services.js";
// import Pagenation from "./components/pagenation/index.js";
import $ from "jquery"
import {LiU,LiP, HeadContainer ,HeadSubContainer,Ul,PayButton,A} from "./components/Header/styled";


        
      function Challan() {
        const [vehicleData,setVehicleData] = useState([]);
        const [paidChallanData,setPaidChallan] = useState([]);
        const[paidViolation,setPaidViolation]= useState(false);
        const [loader,setLoader]=useState(true);
        const [payAmount,setPayAmount] = useState(0);
    

        const [currPage,setCurrentPage] = useState(0)
        const [totalPages,setTotalPages] = useState(0);

       


        const {choice,id} = useParams();


        
        useEffect (()=>{
          axios
              .get ('https://965522bd-97eb-46de-8b4a-dbb9caca99c4.mock.pstmn.io//dashboard/payment/unpaid-violation'
                    ,{params: {
                        licensePlaterNumber: id.toString(),
                        violationId : "CA3277798"
                    }})
              .then((res)=>{
                setVehicleData(res.data);
                console.log(res.data);
                setLoader(false);
                setPayAmount(0);
              }).catch((error)=>{
                console.log(error);
              })
        },[]);
        // useEffect(()=>{
        //   setVehicleData(data);
        //   setLoader(false);
        // },[]);
        

          const getPrevPage =()=>{
            setCurrentPage(Math.ceil(0,currPage));
        };
    
        const getNextPage =()=>{
            setCurrentPage(currPage+1);
        };


        useEffect(()=>{
          setPaidViolation(paidViolation);
          setCurrentPage(currPage);
          if(paidViolation ===true){
            axios.get (
              'https://965522bd-97eb-46de-8b4a-dbb9caca99c4.mock.pstmn.io//dashboard/payment/paid-violation?',
              {params: {
            licensePlaterNumber: id.toString(),
            violationId : "CA3277798",
            pageNum: currPage.toString()
        }}
            )
              .then((res)=>{
                 setPaidChallan(res.data.content);
                setCurrentPage(res.data.number);
                setTotalPages(res.data.totalPages);  
                setLoader(false);
                console.log(totalPages);
                console.log(currPage);
                console.log("here we go",vehicleData);
              }).catch((error)=>{
                alert(error.message)
                console.log(error);
              });
          }
          if(paidViolation===false){
            axios
              .get ('https://965522bd-97eb-46de-8b4a-dbb9caca99c4.mock.pstmn.io//dashboard/payment/unpaid-violation'
                    ,{params: {
                        licensePlaterNumber: id.toString(),
                        violationId : "CA3277798"
                    }})
              .then((res)=>{
                setVehicleData(res.data);
                console.log(vehicleData)
                setLoader(false);
                setPayAmount(0);
              }).catch((error)=>{
                console.log(error);
              })
          }
          
        },[paidViolation,currPage])


       

        const handleCheckbox = (e)=>{
            const {name,checked} = e.target;
            if(name === "select_all"){
              let tempId = vehicleData.map((vehicleId) => {return {...vehicleId , isChecked : checked}});
              setPayAmount(sumAmount(tempId));
              setVehicleData(tempId);
            }else {
              let tempId = vehicleData.map((vehicleId) => vehicleId.violationId === name ? {...vehicleId, isChecked: checked}: vehicleId);

             setPayAmount(sumAmount(tempId));
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
        if(paidViolation){
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
           {/* {paidViolation ===false?  
           <PayButton >
                pay {payAmount}
            </PayButton>
            : <div></div>
            } */}
            
        
        </HeadContainer>

            <Table id="data-table">
              <Thead>
              <tr>
                <th >Challan ID</th>
                <th>Date</th>
                <th>City</th>
                <th>Area</th>
                <th>Licence Number</th>
                <th>Violation Type</th>
                <th>Fine Amount</th>
                <th>Due Date</th>
                <th>Evidence</th>
              </tr>
              </Thead>
              { paidChallanData.map((val, key) => {
                return (
                  <Tbody >
                  <tr key={key}>
                    <td>{val.violationId}</td>
                    <td>{val.violationDate.slice(0,10)}</td>
                    <td>{val.cityName}</td>
                    <td>{val.regionName}</td>
                    <td>{val.licensePlateNumber}</td>
                    <td>{val.violationType}</td>
                    <td>{val.fineAmount}</td>
                    <td><a href={val.imageUrl}>View</a></td>
                  </tr>
                  </Tbody>
                )
              })}
            </Table>
            
              <HeadPContainer>
            <SubContainer>
                <Button onClick={getPrevPage}>
                    Prev
                </Button>
                <PageNumber>
                    {currPage}
                </PageNumber>
                <PageNumber onClick={getNextPage}>{currPage+1}</PageNumber>
                <Button onClick={getNextPage}>
                    Next
                </Button>
            </SubContainer>
            <div>
                <P>
                    Page {currPage} of {totalPages}
                </P>
            </div>
        </HeadPContainer>
          </MainContainer>

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
              { vehicleData.map((val, key) => {
                return (
                  <Tbody >
                  <tr key={key}>
                    {paidViolation === false ? 
                      <td>
                   
                      <input type="checkbox" 
                              value= "1"
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
                    <td>
                    <Link to={`./View/${val.violationId}` }>  <button>View</button> </Link></td> 
                  </tr>
                  </Tbody>
                )
              })}
            </Table>
            {paidViolation ===true? 
              <HeadPContainer>
            <SubContainer>
                <Button onClick={getPrevPage}>
                    Prev
                </Button>
                <PageNumber>
                    {currPage}
                </PageNumber>
                <PageNumber>{currPage+1}</PageNumber>
                <Button onClick={getNextPage}>
                    Next
                </Button>
            </SubContainer>
            <div>
                <P>
                    Page {currPage} of {totalPages}
                </P>
            </div>
        </HeadPContainer>: <></>}
          </MainContainer>
        );
      }
        
      export default Challan;
