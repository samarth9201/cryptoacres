import React from "react";
import AmenitiesForm from "./AmenitiesForm";
import ProgressBar from "./ProgressBar";

function Amenities() {
  const currentActiveStep = 3;
  return (
    <>
      <ProgressBar currentActiveStep={currentActiveStep} />
      <AmenitiesForm />
    </>
  );
}

export default Amenities;
