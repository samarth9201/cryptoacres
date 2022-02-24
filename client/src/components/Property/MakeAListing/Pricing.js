import React from "react";
import PricingForm from "./PricingForm";
import ProgressBar from "./ProgressBar";

function Pricing() {
  const currentActiveStep = 5;
  return (
    <>
      <ProgressBar currentActiveStep={currentActiveStep} />
      <PricingForm />
    </>
  );
}

export default Pricing;
