import React from "react";
import { Box, Typography } from "@mui/material";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

export default function sideDetailPrice() {
  return (
    <Box sx={{ width: '100%', backgroundColor: "#fff", padding: '20px' , boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} borderRadius={2}>
      <Box display="flex" justifyContent="space-between">
        <Typography fontSize={14} color="#16558B">YOUR BOOKING</Typography>
        <Typography fontSize={14} color="#009EDB">Details</Typography>
      </Box>
      <hr style={{ borderTop: "1px dashed #888888" }} />
      <Typography fontSize={13} color="#0A2741">
        LIST OF PASSENGER(S)
      </Typography>
      <Box display="flex" justifyContent="space-between" mt={1} mb={1}>
        <Typography fontSize={14} color="#525252">Mr. Jhon Doe</Typography>
        <Typography fontSize={14} color="#525252">Adult</Typography>
      </Box>
      <hr />
      <Typography fontSize={13} color="#0A2741" mt={2}>
        FLIGHT
      </Typography>
      <Box display="flex" mt={1} mb={1} alignItems="center">
        <AirplanemodeActiveIcon sx={{ marginRight: '5px' }} />
        <Typography fontSize={11} color="#525252">Jakarta (CGK)</Typography>
        <ArrowForwardIcon sx={{ marginRight: '5px', marginLeft: '5px' }} /> 
        <Typography fontSize={11} color="#525252">Denpasar (DPS)</Typography>
      </Box>
      <Box display="flex" mt={1} mb={1} alignItems="center">
        <CalendarMonthIcon sx={{ marginRight: '5px' }} />
        <Typography fontSize={13} color="#525252">23 Nov 202</Typography>
      </Box>
      <hr />
      <Typography fontSize={13} color="#0A2741" mt={2}>
        PRICE
      </Typography>
      <Box display="flex" justifyContent="space-between" mt={1}>
        <Typography fontSize={14} color="#525252">Total</Typography>
        <Box display="flex">
          <ReportGmailerrorredIcon sx={{ color: "#CC6541" }} />
          <Typography color="#696969">IDR 2.238.000</Typography>
        </Box>
      </Box>
    </Box>
  );
}
