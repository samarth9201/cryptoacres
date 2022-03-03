import React from "react";
import PhotosForm from "./PhotosForm";
import ProgressBar from "../ProgressBar";

function Photos(props) {
  const currentActiveStep = 4;
  return (
    <>
      <ProgressBar currentActiveStep={currentActiveStep} />
      <PhotosForm property={props.property} setProperty={props.setProperty} />
    </>
  );
}

export default Photos;
