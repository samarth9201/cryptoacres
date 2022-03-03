import React from "react";
import LocationDetailsForm from "./LocationDetailsForm";
import ProgressBar from "../ProgressBar";

function LocationDetails(props) {
  const currentActiveStep = 1;
  return (
    <>
      <ProgressBar currentActiveStep={currentActiveStep} />
      <LocationDetailsForm
        property={props.property}
        setProperty={props.setProperty}
      />
    </>
  );
}

export default LocationDetails;
