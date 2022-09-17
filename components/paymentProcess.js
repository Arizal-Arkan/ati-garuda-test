import React from "react";
import { Box } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
    'SELECT',
    'BOOK',
    'PAYMENT',
  ];

export default function paymentProcess() {
  return (
    <Box borderRadius={1} padding={2} sx={{ width: "100%", backgroundColor: '#fff', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
      <Stepper activeStep={2}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
