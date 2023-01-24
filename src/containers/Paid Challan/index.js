import React,{useState,useEffect} from "react";
import {Table,Column,VehicleNumberTag,VehicleNumber,PendingChallan} from './styled.js';
import Header from "./components/Header/index.js";
import axios from "axios";







    // const data = [
    //     { challan_id: "Anom", date: 19/12/22, city: "Bengluru",area: "kormangla",licenceNumber: "KA01CA4214",violationType:"no helmet",fineAmount:"4000",reciept:"--",evidence:"--" },
    //     { challan_id: "anshuman", date: 19/12/22, city: "Bengluru",area: "kormangla",licenceNumber: "KA01CA4214",violationType:"no helmet",fineAmount:"4000",reciept:"--",evidence:"--" },
    //     { challan_id: "Anom", date: 19/12/22, city: "Bengluru",area: "kormangla",licenceNumber: "KA01CA4214",violationType:"no helmet",fineAmount:"4000",reciept:"--",evidence:"--" },
    //     { challan_id: "Anom", date: 19/12/22, city: "Bengluru",area: "kormangla",licenceNumber: "KA01CA4214",violationType:"no helmet",fineAmount:"4000",reciept:"--",evidence:"--" },
    //     { challan_id: "Anom", date: 19/12/22, city: "Bengluru",area: "kormangla",licenceNumber: "KA01CA4214",violationType:"no helmet",fineAmount:"4000",reciept:"--",evidence:"--" },
    //     { challan_id: "Anom", date: 19/12/22, city: "Bengluru",area: "kormangla",licenceNumber: "KA01CA4214",violationType:"no helmet",fineAmount:"4000",reciept:"--",evidence:"--" },
    //     { challan_id: "Anom", date: 19/12/22, city: "Bengluru",area: "kormangla",licenceNumber: "KA01CA4214",violationType:"no helmet",fineAmount:"4000",reciept:"--",evidence:"--" },

       
    //   ]
        
      function PaidChallan() {
        const [vehicleData,setVehicleData] = useState([]);

        useEffect (()=>{
          axios
              .get ("https://4d9e0af3-08e5-4271-a537-129c5de57f68.mock.pstmn.io//dashboard/payment/unpaid-violation?licensePlaterNumber=KA27EE9417&violationid=CA3277798")
              .then((res)=>{
                setVehicleData(res.data);
              })
        },[]);


        return (
          <div >

          <div>
            <VehicleNumberTag>
              Vehicle Number:
            </VehicleNumberTag>
            <VehicleNumber>
              KA01CA4214
            </VehicleNumber>  
          </div>
          <Header></Header>
          {/* <div>
            <PendingChallan>You have 8 pending challans</PendingChallan>
          </div> */}

            <Table>
              <tr style={{backgroundColor: '#D5D8DE'}}>
                <th>Challan ID</th>
                <th>Date</th>
                <th>City</th>
                <th>Area</th>
                <th>Licence Number</th>
                <th>Violation Type</th>
                <th>Fine Amount</th>
                <th>Reciept</th>
                <th>Evidence</th>
              </tr>
              {vehicleData.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.violationId}</td>
                    <td>{val.violationDate.slice(0,10)}</td>
                    <td>{val.cityName}</td>
                    <td>{val.regionName}</td>
                    <td>{val.licensePlateNumber}</td>
                    <td>{val.violationType}</td>
                    <td>{val.fineAmount}</td>
                    <td>{val.reciept}</td>
                    <td>{val.evidence}</td>
                  </tr>
                )
              })}
            </Table>
          </div>
        );
      }
        
      export default PaidChallan;
