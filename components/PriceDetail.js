import React from "react";
import { Box, Typography } from "@mui/material";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

export default function PriceDetail() {
  return (
    <Box
      width="100%"
      mt={3}
      borderRadius={2}
      padding={2}
      sx={{ backgroundColor: "#F7F7F7" }}
    >
      <Typography fontWeight={600} color="#16558B">
        PRICE DETAILS
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Typography color="#696969" sx={{ fontSize: { xs: '13px', sm: '13px', md: '15px' } }}>Air Transportaion Charge</Typography>
        <Typography color="#696969" sx={{ fontSize: { xs: '13px', sm: '13px', md: '15px' } }}>IDR 2.167.000</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography color="#696969" sx={{ fontSize: { xs: '13px', sm: '13px', md: '15px' } }}>Baggae</Typography>
        <Typography color="#46A8AA" sx={{ fontSize: { xs: '13px', sm: '13px', md: '15px' } }}>FREE</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography color="#696969" sx={{ fontSize: { xs: '13px', sm: '13px', md: '15px' } }}>Flight Insurance</Typography>
        <Typography color="#696969" sx={{ fontSize: { xs: '13px', sm: '13px', md: '15px' } }}>IDR 60.000</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography color="#696969" sx={{ fontSize: { xs: '13px', sm: '13px', md: '15px' } }}>Service Fee</Typography>
        <Typography color="#696969" sx={{ fontSize: { xs: '13px', sm: '13px', md: '15px' } }}>IDR 11.000</Typography>
      </Box>
      <hr />
      <Box display="flex" justifyContent="space-between">
        <Typography color="#696969">Total Price</Typography>
        <Box display="flex">
          <ReportGmailerrorredIcon sx={{ color: "#CC6541" }} />
          <Typography color="#696969">IDR 2.238.000</Typography>
        </Box>
      </Box>
    </Box>
  );
}
