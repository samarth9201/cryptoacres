import React from "react";
import BasicDetailsForm from "./BasicDetailsForm";
import ProgressBar from "../ProgressBar";

function BasicDetails(props) {
  const currentActiveStep = 0;
  return (
    <>
      <ProgressBar currentActiveStep={currentActiveStep} />
      <BasicDetailsForm
        property={props.property}
        setProperty={props.setProperty}
      />
    </>
  );
}

export default BasicDetails;
