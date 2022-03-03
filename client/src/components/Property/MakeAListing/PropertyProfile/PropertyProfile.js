import React from "react";
import ProgressBar from "../ProgressBar";
import PropertyProfileForm from "./PropertyProfileForm";

function PropertyProfile(props) {
  const currentActiveStep = 2;
  return (
    <>
      <ProgressBar currentActiveStep={currentActiveStep} />
      <PropertyProfileForm
        property={props.property}
        setProperty={props.setProperty}
      />
    </>
  );
}

export default PropertyProfile;
