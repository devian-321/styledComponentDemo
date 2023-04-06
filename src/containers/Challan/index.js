import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import dogPic from "../view/images/dog.png";
import first from "../view/images/first.jpg";
import second from "../view/images/second.jpg";
import third from "../view/images/third.jpg";
import forth from "../view/images/forth.jpg";
import $ from "jquery";
import { imageData } from "./components/canvas/data";

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
import {
  LiU,
  LiP,
  HeadContainer,
  HeadSubContainer,
  Ul,
  PayButton,
  A,
} from "./components/Header/styled";

import {
  ModalWrapper,
  ModalMain,
  ModalHeading,
  ModalBody,
  ModalImage,
  ModalHeader,
  ModalBack,
  ModalCancel,
  ModalSubHeader,
  ModalSubCancel,
  ModalLine,
  ModalSubBody1,
  ModalSubBody2,
  ModalBodyElement,
  ModalElementStat,
  ModalElementDyn,
  Images,
  Img,
  Img2,
  //   ViolationType
} from "../view/styles";
import VideoPlayer from "./components/canvas";

function Challan() {
  const [vehicleData, setVehicleData] = useState([]);
  const [paidViolation, setPaidViolation] = useState(false);
  const [loader, setLoader] = useState(true);
  const [payAmount, setPayAmount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [modalInfo, setModalInfo] = useState([]);

  const [selectedRow, setSelectedRow] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (info) => {
    setShowModal(true);
    setModalInfo(info);
    console.log(info);
  };

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
        console.log(res.data.length);
        setLoader(false);
        setPayAmount(0);
        if (currPage + 2 >= totalPages || currPage < 0) {
          setDisableButton(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Get Previous and next pages
  const getPrevPage = () => {
    if(currPage>0){
      setDisableButton(false);
    }

    setCurrentPage(Math.max(0,currPage-1));
  };

  const getNextPage = () => {
    if (currPage + 2 >= totalPages || currPage < 0) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
    setCurrentPage(currPage + 1);
  };



  //To set the data for paid Violation 
  useEffect(() => {
    setPaidViolation(paidViolation);
    setCurrentPage(currPage);

    // if (currPage + 2 >= totalPages || currPage < 0) {
    //   setDisableButton(true);
    // }
    
    
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
          setTotalPages(Math.ceil(res.data.length / 10));
          console.log(vehicleData);
          console.log(totalPages);
          setLoader(false);
          setPayAmount(0);
          if (currPage + 2 >= totalPages || currPage < 0) {
            setDisableButton(true);
          };
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [paidViolation, currPage]);


  // To set back the disabled button

  useEffect(()=>{setDisableButton(false)},[paidViolation])


  //Check Box 

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

  //  pay amount for pay buttom
  
  useEffect(() => {
    setPayAmount(payAmount);
    console.log(payAmount);
  }, [payAmount]);


  //toggle between paid and unpaid Challan

  const handlePaidChallan = () => {
    setPaidViolation(true);
  };
  const handleUnpaidChallan = () => {
    setPaidViolation(false);
  };

  //sum Algo for total
  const sumAmount = (tempId) => {
    var sum = 0;
    for (let i = 0; i < tempId.length; i++) {
      if (tempId[i].isChecked === true) {
        sum += parseInt(tempId[i].fineAmount);
      }
    }
    return sum;
  };

  // video player data

  const View = () => {
    const imageUrl = "https://www.youtube.com/watch?v=XINPVXV3XdI";

    return (
      <ModalWrapper>
        <ModalMain>
          <ModalHeader>
            <ModalSubHeader>
              <ModalBack>
                <button onClick={handleClose}>back</button>
              </ModalBack>
              <ModalHeading>Challan Details</ModalHeading>
            </ModalSubHeader>

            <ModalSubCancel>
              <ModalCancel>
                <button onClick={handleClose}>X</button>
              </ModalCancel>
            </ModalSubCancel>
          </ModalHeader>

          <ModalLine />

          <ModalBody>
            <ModalSubBody1>
              <ModalBodyElement>
                <ModalElementStat>Challan ID:</ModalElementStat>
                <ModalElementDyn>{modalInfo.violationId}</ModalElementDyn>
              </ModalBodyElement>
              <ModalBodyElement>
                <ModalElementStat>Violation Type :</ModalElementStat>
                <ModalElementDyn color="red">
                  {modalInfo.violationType}
                </ModalElementDyn>
              </ModalBodyElement>
              <ModalBodyElement>
                <ModalElementStat>Licence Number:</ModalElementStat>
                <ModalElementDyn color="licenceNumber">
                  {modalInfo.licensePlateNumber}
                </ModalElementDyn>
              </ModalBodyElement>
              <ModalBodyElement>
                <ModalElementStat>Penalty :</ModalElementStat>
                <ModalElementDyn>{modalInfo.fineAmount}</ModalElementDyn>
              </ModalBodyElement>
              <ModalBodyElement>
                <ModalElementStat>Date:</ModalElementStat>
                <ModalElementDyn>
                  {modalInfo.violationDate.slice(0, 10)}
                </ModalElementDyn>
              </ModalBodyElement>
              <ModalBodyElement>
                <ModalElementStat>Time:</ModalElementStat>
                <ModalElementDyn>05:12PM</ModalElementDyn>
              </ModalBodyElement>
            </ModalSubBody1>
            <ModalSubBody2>
              <ModalBodyElement>
                <ModalElementStat>Challan status :</ModalElementStat>
                <ModalElementDyn color="challanStatus">
                  Approved
                </ModalElementDyn>
              </ModalBodyElement>
              <ModalBodyElement>
                <ModalElementStat>Approver:</ModalElementStat>
                <ModalElementDyn>Kiran Kulkarni</ModalElementDyn>
              </ModalBodyElement>
              <ModalBodyElement>
                <ModalElementStat>City :</ModalElementStat>
                <ModalElementDyn>{modalInfo.cityName}</ModalElementDyn>
              </ModalBodyElement>
              <ModalBodyElement>
                <ModalElementStat>Area :</ModalElementStat>
                <ModalElementDyn>{modalInfo.regionName}</ModalElementDyn>
              </ModalBodyElement>
              <ModalBodyElement>
                <ModalElementStat>Junction:</ModalElementStat>
                <ModalElementDyn>{modalInfo.intersectionName}</ModalElementDyn>
              </ModalBodyElement>
              <ModalBodyElement>
                <ModalElementStat>Payment status:</ModalElementStat>
                <ModalElementDyn color="paymentStatus">
                  {paidViolation === true ? "Paid" : "Not Paid"}
                </ModalElementDyn>
              </ModalBodyElement>
              <ModalBodyElement>
                <ModalElementStat>IPC section:</ModalElementStat>
                <ModalElementDyn>129</ModalElementDyn>
              </ModalBodyElement>
            </ModalSubBody2>
          </ModalBody>
          <ModalImage>
            {/* <ReactPlayer url={imageUrl} width="85%" height="660px" /> */}
            <VideoPlayer challanInfo={modalInfo.violationId} />
            <Images>
              <Img>
                <img src={first} alt=" " width="100%" />
              </Img>
              <Img2>
                <img src={first} alt=" " width="100%" />
              </Img2>
            </Images>
          </ModalImage>
        </ModalMain>
      </ModalWrapper>
    );
  };

  if (loader) {
    return <div>loading....</div>;
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
              <LiU paidViolation={paidViolation}>
                <A onClick={handleUnpaidChallan} to={`./`} >
                  Unpaid Challan
                </A>
              </LiU>
              <LiP  paidViolation={paidViolation}>
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
                  <ViewButton
                    onClick={(e) => {
                      handleShow(val);
                    }}
                  >
                    View
                  </ViewButton>
                </td>
              </tr>
            </Tbody>
          );
        })}
      </Table>

      <HeadPContainer>
        <SubContainer>
          <Button onClick={getPrevPage} >
            Prev
          </Button>
          <PageNumber primary>{currPage}</PageNumber>
          <PageNumber onClick={getNextPage} disabled={disableButton}>{currPage + 1}</PageNumber>
          <Button onClick={getNextPage} disabled={disableButton}>
            Next
          </Button>
        </SubContainer>
        <div>
          <P>
            Page {currPage} of {totalPages}
          </P>
        </div>
      </HeadPContainer>

      {showModal && <View />}
    </MainContainer>
  );
}

export default Challan;
