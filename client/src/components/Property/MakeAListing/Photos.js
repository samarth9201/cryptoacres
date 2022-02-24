import React from "react";
import PhotosForm from "./PhotosForm";
import ProgressBar from "./ProgressBar";

function Photos() {
  const currentActiveStep = 4;
  return (
    <>
      <ProgressBar currentActiveStep={currentActiveStep} />
      <PhotosForm />
    </>
  );
}

export default Photos;
