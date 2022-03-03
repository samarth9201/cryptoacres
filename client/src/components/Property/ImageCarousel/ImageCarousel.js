import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./ImageCarousel.css";

function ImageCarousel(props) {
  const [displayImgIndex, setDisplayImgIndex] = useState(0);
  function previousImgHandle() {
    const totalImages = props.imageUrlList.length;
    if (displayImgIndex === 0) {
      setDisplayImgIndex(totalImages - 1);
    } else {
      setDisplayImgIndex((prevState) => prevState - 1);
    }
  }
  function nextImgHandle() {
    const totalImages = props.imageUrlList.length;
    setDisplayImgIndex((prevState) => (prevState + 1) % totalImages);
  }
  return (
    <>
      <div className="navigate-img-icon">
        <ArrowBackIosNewIcon onClick={previousImgHandle} />
      </div>
      <img
        src={props.imageUrlList[displayImgIndex]}
        className="property-img"
        alt="property"
      />
      <div className="navigate-img-icon">
        <ArrowForwardIosIcon onClick={nextImgHandle} />
      </div>
    </>
  );
}

export default ImageCarousel;
