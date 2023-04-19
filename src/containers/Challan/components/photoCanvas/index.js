import { useEffect, useRef, useState } from "react";
import { imageData } from "../canvas/data";
import { Images, Img, Img2 } from "../../../view/styles";
// import { Container,Svg } from "./style";
import PropTypes from "prop-types";

function PhotoCanvas() {
  const canvasRef = useRef();

  const getCanvas = (currentIndex) => {
    const ctx = canvasRef.current.getContext("2d"); // this canvas is for the image
    const image = new Image();
    image.src = imageData[currentIndex].img_url;
    image.onload = () => {
      // for the image
      canvasRef.current.height = image.height;
      canvasRef.current.width = image.width;
      ctx.drawImage(image, 0, 0, image.width, image.height);
      const boxCtx = canvasRef.current.getContext("2d"); //this is for the yellow box
      const block = imageData[currentIndex].bbox;

      boxCtx.lineWidth = 7;
      boxCtx.beginPath();
      boxCtx.strokeStyle = "yellow";
      boxCtx.rect(
        block[0][0],
        block[0][1],
        block[1][0] - block[0][0],
        block[1][1] - block[0][1]
      );

      // for violation type
      boxCtx.fillStyle = "yellow";
      let y1Axis = null;
      const x1Axis = block[0][0];
      let boxText = null;
      const boxWidth = Math.min(700, block[1][0] - block[0][0]);
      let position = null;
      const lineHeight = 40;

      y1Axis = block[0][1];
    boxText = block[0][1];
    position = lineHeight - 10;

      boxCtx.fillRect(
        x1Axis - 4,
        y1Axis,
        boxWidth + 8,
        lineHeight + 10
      );
      boxCtx.fillStyle = "#000000";
      boxCtx.textAlign = "center";
      boxCtx.textBaseline = "middle";
      boxCtx.font = "26px interExtraSmall";

    //   let wrappedText = challanInfo.violationType;
       
    //   for (let i = 0; i < wrappedText.length; i += 1) {
    //     boxCtx.fillText(
    //       wrappedText[i],
    //       (x1Axis * 2 + boxWidth) / 2,
    //       boxText + i * position + (position > 0 ? 22 : -16)
    //     );
    boxCtx.stroke();
      }
 

    };

    return (
        <Images>
          <Img>
            <canvas ref={canvasRef}  />
          </Img>
          <Img2>
          <canvas ref={canvasRef}  />
          </Img2>
        </Images>
      );
  };

export default PhotoCanvas;
