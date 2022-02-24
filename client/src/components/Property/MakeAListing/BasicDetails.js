import React from "react";
import BasicDetailsForm from "./BasicDetailsForm";
import ProgressBar from "./ProgressBar";

function BasicDetails() {
  const currentActiveStep = 0;
  return (
    <>
      <ProgressBar currentActiveStep={currentActiveStep} />
      <BasicDetailsForm />
    </>
  );
}

export default BasicDetails;
