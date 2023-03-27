import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import dogPic from "./dog.png";
import {
  ModalBackground,
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
  //   ViolationType
} from "./styles";

function View(props) {
  const imageUrl = "https://www.youtube.com/watch?v=XINPVXV3XdI";
  // const imageUrl = props.imageUrl;

  // // console.log(violationId);

  // useEffect(()=>{
  //     axios.get(imageUrl,{
  //         responseType: "arraybuffer"
  //     }).then((res)=>{
  //         const base64 = btoa(
  //             new Uint8Array(res.data).reduce(
  //               (data, byte) => data + String.fromCharCode(byte),
  //               ''
  //             )
  //           )
  //         //   setImage(base64);
  //     })
  // },[])

  return (
    <ModalBackground>
      <ModalMain>
        {/* Header  */}
        <ModalHeader>
          <ModalSubHeader>
            <ModalBack>
              <button>back</button>
            </ModalBack>
            <ModalHeading>Challan Details</ModalHeading>
          </ModalSubHeader>

          <ModalSubCancel>
            <ModalCancel>X</ModalCancel>
          </ModalSubCancel>
        </ModalHeader>

        {/* Header end */}
        <ModalLine />

        <ModalBody>
          <ModalSubBody1>
            <ModalBodyElement>
              <ModalElementStat>Challan ID:</ModalElementStat>
              <ModalElementDyn>403097</ModalElementDyn>
            </ModalBodyElement>
            <ModalBodyElement>
              <ModalElementStat>Violation Type :</ModalElementStat>
              <ModalElementDyn color="red">No Helmet</ModalElementDyn>
            </ModalBodyElement>
            <ModalBodyElement>
              <ModalElementStat>Licence Number:</ModalElementStat>
              <ModalElementDyn color="licenceNumber">
                KA27EE9417
              </ModalElementDyn>
            </ModalBodyElement>
            <ModalBodyElement>
              <ModalElementStat>Penalty :</ModalElementStat>
              <ModalElementDyn>1000</ModalElementDyn>
            </ModalBodyElement>
            <ModalBodyElement>
              <ModalElementStat>Date:</ModalElementStat>
              <ModalElementDyn>13 Dec 2022</ModalElementDyn>
            </ModalBodyElement>
            <ModalBodyElement>
              <ModalElementStat>Time:</ModalElementStat>
              <ModalElementDyn>05:12PM</ModalElementDyn>
            </ModalBodyElement>
          </ModalSubBody1>
          <ModalSubBody2>
            <ModalBodyElement>
              <ModalElementStat>Challan status :</ModalElementStat>
              <ModalElementDyn color="challanStatus">Approved</ModalElementDyn>
            </ModalBodyElement>
            <ModalBodyElement>
              <ModalElementStat>Approver:</ModalElementStat>
              <ModalElementDyn>Kiran Kulkarni</ModalElementDyn>
            </ModalBodyElement>
            <ModalBodyElement>
              <ModalElementStat>City :</ModalElementStat>
              <ModalElementDyn>Hubli</ModalElementDyn>
            </ModalBodyElement>
            <ModalBodyElement>
              <ModalElementStat>Area :</ModalElementStat>
              <ModalElementDyn>Vidya Nagar</ModalElementDyn>
            </ModalBodyElement>
            <ModalBodyElement>
              <ModalElementStat>Junction:</ModalElementStat>
              <ModalElementDyn>BVB</ModalElementDyn>
            </ModalBodyElement>
            <ModalBodyElement>
              <ModalElementStat>Payment status:</ModalElementStat>
              <ModalElementDyn color="paymentStatus">Not paid</ModalElementDyn>
            </ModalBodyElement>
            <ModalBodyElement>
              <ModalElementStat>IPC section:</ModalElementStat>
              <ModalElementDyn>129</ModalElementDyn>
            </ModalBodyElement>
          </ModalSubBody2>
        </ModalBody>
        <ModalImage>
          <ReactPlayer url={imageUrl} width="85%" height="660px" />
          
          <Images>
            <Img>
              <img src={dogPic} alt=" " />
            </Img>
            <Img>
              <img src={dogPic} alt=" " />
            </Img>
          </Images>
        </ModalImage>
      </ModalMain>
    </ModalBackground>
  );
}

export default View;
