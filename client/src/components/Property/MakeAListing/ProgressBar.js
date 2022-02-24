import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  "Basic Details",
  "Location Details",
  "Property Profile",
  "Amenities",
  "Photos",
  "Pricing",
];

export default function ProgressBar(props) {
  return (
    <Box sx={{ width: "100%", marginTop: 5 }}>
      <Stepper activeStep={props.currentActiveStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
