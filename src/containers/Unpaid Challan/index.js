import React,{useState} from "react";
import {Table,Column,VehicleNumberTag,VehicleNumber,PendingChallan} from './styled.js';
import Header from "../Header/index.js";




    const data = [
        { challan_id: "Anom", date: 19/12/22, city: "Bengluru",area: "kormangla",licenceNumber: "KA01CA4214",violationType:"no helmet",fineAmount:"4000",reciept:"--",evidence:"--" },
        { challan_id: "anshuman", date: 19/12/22, city: "Bengluru",area: "kormangla",licenceNumber: "KA01CA4214",violationType:"no helmet",fineAmount:"4000",reciept:"--",evidence:"--" },
        { challan_id: "Anom", date: 19/12/22, city: "Bengluru",area: "kormangla",licenceNumber: "KA01CA4214",violationType:"no helmet",fineAmount:"4000",reciept:"--",evidence:"--" },
        { challan_id: "Anom", date: 19/12/22, city: "Bengluru",area: "kormangla",licenceNumber: "KA01CA4214",violationType:"no helmet",fineAmount:"4000",reciept:"--",evidence:"--" },
        { challan_id: "Anom", date: 19/12/22, city: "Bengluru",area: "kormangla",licenceNumber: "KA01CA4214",violationType:"no helmet",fineAmount:"4000",reciept:"--",evidence:"--" },
        { challan_id: "Anom", date: 19/12/22, city: "Bengluru",area: "kormangla",licenceNumber: "KA01CA4214",violationType:"no helmet",fineAmount:"4000",reciept:"--",evidence:"--" },
        { challan_id: "Anom", date: 19/12/22, city: "Bengluru",area: "kormangla",licenceNumber: "KA01CA4214",violationType:"no helmet",fineAmount:"4000",reciept:"--",evidence:"--" },

       
      ]
        
      function UnpaidChallan() {
        return (
          <div >

          <div>
            <VehicleNumberTag>
              Vehicle Number:
            </VehicleNumberTag>
            <VehicleNumber>
              RJCA4214
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
              {data.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.challan_id}</td>
                    <td>{val.date}</td>
                    <td>{val.city}</td>
                    <td>{val.area}</td>
                    <td>{val.licenceNumber}</td>
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
        
      export default UnpaidChallan;