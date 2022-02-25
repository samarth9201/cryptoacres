import React from "react";
import PricingForm from "./PricingForm";
import ProgressBar from "./ProgressBar";

function Pricing(props) {
  const currentActiveStep = 5;
  return (
    <>
      <ProgressBar currentActiveStep={currentActiveStep} />
      <PricingForm property={props.property} setProperty={props.setProperty} />
    </>
  );
}

export default Pricing;
