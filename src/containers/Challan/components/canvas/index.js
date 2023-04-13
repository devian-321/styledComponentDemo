
import { useEffect, useRef, useState } from "react";
import { imageData } from "./data";
import { Container,Svg } from "./style";
import PropTypes from "prop-types";
// import {
//   ForwardIcon,
//   PauseIcon,
//   ResumeIcon,
//   RewindIcon,
// } from "../../common/assets/svg";
// import { wrapText } from "../../common/helpers";



function VideoPlayer({ challanInfo }) {
  const [resume, setResume] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const canvasRef = useRef();
//  

    // const wrapText = ()


  const updateImage = () => {
    const ctx = canvasRef.current.getContext("2d"); // this canvas is for the image
    const image = new Image();
    image.src = imageData[currentIndex].img_url;
    image.onload = () => {
      // for the image
      canvasRef.current.height = image.height;
      canvasRef.current.width = image.width;
      ctx.drawImage(image, 0, 0, image.width, image.height);
      const boxCtx = canvasRef.current.getContext("2d");  //this is for the yellow box
      const block = imageData[currentIndex].bbox;

      // for the rectangle box
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

     // wrap the violation text
    //   const wrappedText = wrapText(
    //     boxCtx,
    //     challanInfo.violationType,
    //     Math.min(700, block[1][0] - block[0][0]) / 3.5
    //   );
      // show text inside
    //   if (
    //     block[0][1] < lineHeight * wrappedText.length + 40 &&
    //     block[1][1] >
    //       canvasRef.current.height - (lineHeight * wrappedText.length + 40)
    //   ) {
    //     y1Axis = block[0][1];
    //     boxText = block[0][1];
    //     position = lineHeight - 10;
    //   }
    //   // text on bottom
    //   else if (block[0][1] < 100) {
    //     y1Axis = block[1][1];
    //     boxText = block[1][1];
    //     position = lineHeight - 10;
    //   }
    //   // text on top
    //   else {
    //     y1Axis = block[0][1] - 40 * wrappedText.length;
    //     boxText = block[0][1];
    //     position = -(lineHeight - 10);
    //   }

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
      boxCtx.font = "26px inter";

      let wrappedText = challanInfo.violationType;
       
      for (let i = 0; i < wrappedText.length; i += 1) {
        boxCtx.fillText(
          wrappedText[i],
          (x1Axis * 2 + boxWidth) / 2,
          boxText + i * position + (position > 0 ? 22 : -16)
        );
      }
      boxCtx.stroke();
    };
  };

  /**
   * if current image is last, set current index to 0
   * call updateImage()
   */
  useEffect(() => {
    if (currentIndex === imageData.length) {
      setResume(false);
      setCurrentIndex(0);
      return;
    }
    updateImage();
  }, [currentIndex]);

  /**
   * increase current index by 1 to render image as a video
   */
  useEffect(() => {
    let interval = null;
    if (resume && currentIndex < imageData.length) {
      interval = setInterval(() => {
        setCurrentIndex((value) => value + 1);
      }, 400);
    }
    return () => {
      clearInterval(interval);
    };
  }, [resume]);

  const rewind = () => {
    setResume(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const forward = () => {
    setResume(false);
    if (currentIndex < imageData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <Container>
      <div className="display w100">
        <canvas ref={canvasRef} />
      </div>
      <div className="controls">
        <Svg onClick={rewind}>
          <button isDisable={currentIndex === 0}>
          Rewind</button>
        </Svg>
        <Svg onClick={() => setResume(!resume)}>
          {resume===true ? <button >pause</button> : <button>play</button>}
        </Svg>
        <Svg onClick={forward}>
          <button isDisable={currentIndex === imageData.length - 1}>forward</button>
        </Svg>
      </div>
    </Container>
  );
}
export default VideoPlayer;

VideoPlayer.propTypes = {
  challanInfo: PropTypes.shape.isRequired,
};