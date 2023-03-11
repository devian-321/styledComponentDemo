import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Table,
  VehicleNumberTag,
  VehicleNumber,
  PendingChallan,
  HeadTag,
  MainContainer,
  Notice,
  Thead,
  Tbody,
  ChallanCheckbox,
  ViewButton,
} from "./styled.js";
import {
  HeadPContainer,
  SubContainer,
  P,
  PageNumber,
  Button,
} from "./components/pagenation/styles";
import axios from "axios";
import { Link } from "react-router-dom";
import $ from "jquery";
import View from "../view/index.js";
import {
  LiU,
  LiP,
  HeadContainer,
  HeadSubContainer,
  Ul,
  PayButton,
  A,
} from "./components/Header/styled";

function Challan() {
  const [vehicleData, setVehicleData] = useState([]);
  const [paidChallanData, setPaidChallan] = useState([]);
  const [paidViolation, setPaidViolation] = useState(false);
  const [loader, setLoader] = useState(true);
  const [payAmount, setPayAmount] = useState(0);
  const [showModal,setShowModal] = useState(false);

  const url =
    "https://traffic-light-videos.s3.ap-south-1.amazonaws.com/frames/1/1/1/2556/2022/10/11/8/34/1-1-1-2556-2022-10-11-8-34-40-20171.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230120T102333Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=AKIAUOXUF53222GR23MD%2F20230120%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=dd22ad2678b73c41009a333ec1d52f31f440ae68afdd5dbba063bda0e95d60d6";
  const [ChallanImageUrl, setImageUrl] = useState(url);

  const [currPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // const [isView,setView] = useState(false);

  const { choice, id } = useParams();

  useEffect(() => {
    axios
      .get(
        "https://965522bd-97eb-46de-8b4a-dbb9caca99c4.mock.pstmn.io//dashboard/payment/unpaid-violation",
        {
          params: {
            licensePlaterNumber: id.toString(),
            violationId: "CA3277798",
          },
        }
      )
      .then((res) => {
        setVehicleData(res.data);
        console.log(res.data);
        setLoader(false);
        setPayAmount(0);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // useEffect(()=>{
  //   setVehicleData(data);
  //   setLoader(false);
  // },[]);

  const getPrevPage = () => {
    setCurrentPage(Math.ceil(0, currPage));
  };

  const getNextPage = () => {
    setCurrentPage(currPage + 1);
  };

  useEffect(() => {
    setPaidViolation(paidViolation);
    setCurrentPage(currPage);
    if (paidViolation === true) {
      axios
        .get(
          "https://965522bd-97eb-46de-8b4a-dbb9caca99c4.mock.pstmn.io//dashboard/payment/paid-violation?",
          {
            params: {
              licensePlaterNumber: id.toString(),
              violationId: "CA3277798",
              pageNum: currPage.toString(),
            },
          }
        )
        .then((res) => {
          setVehicleData(res.data.content);
          setCurrentPage(res.data.number);
          setTotalPages(res.data.totalPages);
          setLoader(false);
          console.log(totalPages);
          console.log(currPage);
          console.log("here we go", vehicleData);
        })
        .catch((error) => {
          alert(error.message);
          console.log(error);
        });
    } else if (paidViolation === false) {
      axios
        .get(
          "https://965522bd-97eb-46de-8b4a-dbb9caca99c4.mock.pstmn.io//dashboard/payment/unpaid-violation",
          {
            params: {
              licensePlaterNumber: id.toString(),
              violationId: "CA3277798",
            },
          }
        )
        .then((res) => {
          setVehicleData(res.data);
          setCurrentPage(0);
          console.log(vehicleData);
          setLoader(false);
          setPayAmount(0);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [paidViolation, currPage]);

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    if (name === "select_all") {
      let tempId = vehicleData.map((vehicleId) => {
        return { ...vehicleId, isChecked: checked };
      });
      setPayAmount(sumAmount(tempId));
      setVehicleData(tempId);
    } else {
      let tempId = vehicleData.map((vehicleId) =>
        vehicleId.violationId === name
          ? { ...vehicleId, isChecked: checked }
          : vehicleId
      );

      setPayAmount(sumAmount(tempId));
      setVehicleData(tempId);
    }
  };
  useEffect(() => {
    setPayAmount(payAmount);
    console.log(payAmount);
  }, [payAmount]);

  const handlePaidChallan = () => {
    setPaidViolation(true);
  };
  const handleUnpaidChallan = () => {
    setPaidViolation(false);
  };

  const sumAmount = (tempId) => {
    var sum = 0;
    for (let i = 0; i < tempId.length; i++) {
      if (tempId[i].isChecked === true) {
        sum += parseInt(tempId[i].fineAmount);
      }
    }
    return sum;
  };

  const handleView = (props) => {
    console.log(props);
    setImageUrl(props.imageUrl);
    // set  ImageUrl()
  };

  if (loader) {
    return <div>loading....</div>;
  }
  if (paidViolation) {
    <MainContainer>
      <HeadTag>
        <VehicleNumberTag>Vehicle Number:</VehicleNumberTag>
        <VehicleNumber>{id}</VehicleNumber>
      </HeadTag>
      <PendingChallan>
        <p> You have {vehicleData.length} pending challans</p>
      </PendingChallan>
      <Notice>
        <p> NOTE:</p>
        <p className="staticNote">
          Further failure to pay the challans within 90 days, will lead to
          further penalities, or your vehicles will be seized
        </p>
      </Notice>

      <HeadContainer>
        <HeadSubContainer>
          <nav>
            <Ul>
              <LiU>
                <A onClick={handleUnpaidChallan} to={`./`}>
                  Unpaid Challan
                </A>
              </LiU>
              <LiP>
                <A onClick={handlePaidChallan}>Paid Challan</A>
              </LiP>
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
        </Thead>
        {paidChallanData.map((val, key) => {
          return (
            <Tbody>
              <tr key={key}>
                <td>{val.violationId}</td>
                <td>{val.violationDate.slice(0, 10)}</td>
                <td>{val.cityName}</td>
                <td>{val.regionName}</td>
                <td>{val.licensePlateNumber}</td>
                <td>{val.violationType}</td>
                <td>{val.fineAmount}</td>
                <td>
                  <a href={val.imageUrl}>View</a>
                </td>
              </tr>
            </Tbody>
          );
        })}
      </Table>

      <HeadPContainer>
        <SubContainer>
          <Button onClick={getPrevPage}>Prev</Button>
          <PageNumber>{currPage}</PageNumber>
          <PageNumber onClick={getNextPage}>{currPage + 1}</PageNumber>
          <Button onClick={getNextPage}>Next</Button>
        </SubContainer>
        <div>
          <P>
            Page {currPage} of {totalPages}
          </P>
        </div>
      </HeadPContainer>
    </MainContainer>;
  }

  return (
    <MainContainer>
      <HeadTag>
        <VehicleNumberTag>Vehicle Number:</VehicleNumberTag>
        <VehicleNumber>{id}</VehicleNumber>
      </HeadTag>
      <PendingChallan>
        <p> You have {vehicleData.length} pending challans</p>
      </PendingChallan>
      <Notice>
        <p> NOTE:</p>
        <p className="staticNote">
          Further failure to pay the challans within 90 days, will lead to
          further penalities, or your vehicles will be seized
        </p>
      </Notice>

      <HeadContainer>
        <HeadSubContainer>
          <nav>
            <Ul>
              <LiU>
                <A onClick={handleUnpaidChallan} to={`./`}>
                  Unpaid Challan
                </A>
              </LiU>
              <LiP>
                <A onClick={handlePaidChallan}>Paid Challan</A>
              </LiP>
            </Ul>
          </nav>
        </HeadSubContainer>
        {paidViolation === false ? (
          <PayButton>pay {payAmount}</PayButton>
        ) : (
          <div></div>
        )}
      </HeadContainer>

      <Table id="data-table">
        <Thead>
          <tr>
            {paidViolation === false ? (
              <th>
                <p>Select All</p>
                <ChallanCheckbox
                  name="select_all"
                  value="1"
                  type="checkbox"
                  checked={
                    vehicleData.filter(
                      (vehicleId) => vehicleId?.isChecked !== true
                    ).length < 1
                  }
                  onChange={handleCheckbox}
                />
              </th>
            ) : (
              <></>
            )}
            <th>Challan ID</th>
            <th>Date</th>
            <th>City</th>
            <th>Area</th>
            <th>Licence Number</th>
            <th>Violation Type</th>
            <th>Fine Amount</th>
            {paidViolation === true ? <th>Reciept</th> : <th>Due Date</th>}
            <th>Evidence</th>
          </tr>
        </Thead>
        {vehicleData.map((val, key) => {
          return (
            <Tbody>
              <tr key={key}>
                {paidViolation === false ? (
                  <td>
                    <ChallanCheckbox
                      type="checkbox"
                      value="1"
                      name={val.violationId}
                      onChange={handleCheckbox}
                      checked={val?.isChecked || false}
                    />
                  </td>
                ) : (
                  <></>
                )}
                <td>{val.violationId}</td>
                <td>{val.violationDate.slice(0, 10)}</td>
                <td>{val.cityName}</td>
                <td>{val.regionName}</td>
                <td>{val.licensePlateNumber}</td>
                <td>{val.violationType}</td>
                <td>{val.fineAmount}</td>
                {paidViolation === false ? <td>{val.dueDate}</td> : <td></td>}
                <td>
                  <Link
                    to={`./View/${val.violationId}`}
                    state={{ ChallanImageUrl: ChallanImageUrl }}
                  >
                    {" "}
                    <ViewButton>View</ViewButton>{" "}
                  </Link>
                </td>
                {/* <View></View> */}
              </tr>
            </Tbody>
          );
        })}
      </Table>
      {paidViolation === true ? (
        <HeadPContainer>
          <SubContainer>
            <Button onClick={getPrevPage}>Prev</Button>
            <PageNumber>{currPage}</PageNumber>
            <PageNumber>{currPage + 1}</PageNumber>
            <Button onClick={getNextPage}>Next</Button>
          </SubContainer>
          <div>
            <P>
              Page {currPage} of {totalPages}
            </P>
          </div>
        </HeadPContainer>
      ) : (
        <></>
      )}
    </MainContainer>
  );
}

export default Challan;
