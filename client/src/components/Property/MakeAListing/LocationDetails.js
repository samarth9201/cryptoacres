import React from "react";
import LocationDetailsForm from "./LocationDetailsForm";
import ProgressBar from "./ProgressBar";

function LocationDetails() {
  const currentActiveStep = 1;
  return (
    <>
      <ProgressBar currentActiveStep={currentActiveStep} />
      <LocationDetailsForm />
    </>
  );
}

export default LocationDetails;
