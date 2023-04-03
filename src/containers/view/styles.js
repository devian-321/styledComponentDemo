import styled from "styled-components";

const handleColorType = (color) => {
  switch (color) {
    case "red":
      return "color : #D7051E";
    case "licenceNumber":
      return "color : #3179E4";
    case "challanStatus":
      return "color: #28882C";
    case "paymentStatus":
      return "color: #F58706";

    default:
      return "#000000";
  }
};

export const ModalWrapper = styled.div`
  position: fixed;
  /* width: 100vw;
  height: 100%; */
  left: 0px;
  margin-top: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* top: 67px; */

  background: rgba(0, 0, 0, 0.44);
`;
export const ModalMain = styled.div`
  position: relative;
  width: 90vw;
  height: 98vh;
  margin-top: 45px;
  background: #ffffff;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  flex-direction: column;
`;
export const ModalHeader = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 80%;
  margin-top: 4%;
  margin-left: 70px;
`;

export const ModalLine = styled.div`
  width: 80%;
  height: 0px;
  border: 1px solid #dbdbdb;
  margin-top: 8px;
  margin-left: 70px;
`;
export const ModalSubHeader = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-self: flex-start;
`;
export const ModalBack = styled.div`
  display: flex;
  justify-content: flex-start;
  background: #000000;
  /* transform: matrix(-1, 0, 0, 1, 0, 0); */
  background-color: transparent;
`;

export const ModalHeading = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-left: 30px;
  width: fit-content;
  /* identical to box height */

  letter-spacing: -0.3px;

  color: #000000;
`;

export const ModalSubCancel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  padding-left: 80%;
`;

export const ModalCancel = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  background-color: transparent;
`;

/// Header end

export const ModalBody = styled.div`
  display: flex;
  align-items: center;
  margin-left: 70px;
  margin-top: 10px;
`;
export const ModalSubBody1 = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  align-self: flex-start;
  flex-direction: column;
`;

export const ModalBodyElement = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-top: 30px;

  /* width: 50px; */
`;
export const ModalElementStat = styled.span`
  position: relative;
  width: 120px;
  height: 17px;
  /* left: 557px;
    top: 94px; */
  font-family: "InterExtraLight";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 17px;
  /* line-height: 27px; */
  /* identical to box height */
  display: flex;
  align-items: center;
  color: #808080;
`;

// export const ViolationType = styled(ModalElementStat)`
//     width: 90px;
// `

export const ModalElementDyn = styled.span`
  position: relative;
  width: 90px;
  height: 17px;
  display: flex;
  align-items: center;

  font-family: "InterExtraLight";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  ${({ color }) => handleColorType(color)};
`;

export const ModalSubBody2 = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  align-self: flex-end;
  flex-direction: column;
  margin-left: 50%;
`;

export const ModalImage = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4%;
  /* align-items: center; */
  margin-top: 30px;
`;
export const Images = styled.div`
  display: flex;
  margin-top: 20px;
`;
export const Img = styled.div`
  display: flex;
  align-self: flex-start;
  width: 80%;
  height: 438px;
`;
