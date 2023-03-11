import styled from "styled-components";

export const ModalBackground = styled.div`
  /* position: fixed; */
  width: 100vw;
  height: 100vh;
  left: 0px;
  margin-top: 0px;
  padding-top: 0px;
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
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
`;
export const ModalHeader = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 80%;
  margin-top: 4%;
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
  /* identical to box height */

  letter-spacing: -0.3px;

  color: #000000;
`;
export const ModalCancel = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  background-color: transparent;
`;

export const ModalBody = styled.div``;

export const ModalImage = styled.div``;
