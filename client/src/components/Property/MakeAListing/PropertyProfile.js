import React from "react";
import ProgressBar from "./ProgressBar";
import PropertyProfileForm from "./PropertyProfileForm";

function PropertyProfile() {
  const currentActiveStep = 2;
  return (
    <>
      <ProgressBar currentActiveStep={currentActiveStep} />
      <PropertyProfileForm />
    </>
  );
}

export default PropertyProfile;
