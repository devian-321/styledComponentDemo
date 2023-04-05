import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 32px 12px;
  .display {
    height: 500px;
    background-color: #d5d8de;
    canvas {
      width: 100%;
      height: 100%;
    }
  }
  .controls {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
  }
`;
export const Svg = styled.div`
  margin: 0 24px;
  width: 24px;
  cursor: pointer;
`;
