import React from "react";
import AmenitiesForm from "./AmenitiesForm";
import ProgressBar from "../ProgressBar";

function Amenities(props) {
  const currentActiveStep = 3;
  return (
    <>
      <ProgressBar currentActiveStep={currentActiveStep} />
      <AmenitiesForm
        property={props.property}
        setProperty={props.setProperty}
      />
    </>
  );
}

export default Amenities;
