import React from "react";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Card from "../public/images/card.svg";
import Image from "next/image";
import HelpIcon from "@mui/icons-material/Help";
import Check from "../public/images/check_circle-1.svg";
import LockIcon from "@mui/icons-material/Lock";
import PriceDetail from "../components/PriceDetail";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from 'sweetalert2'

const listPayment = [
  "Credit / Debit Card",
  "LinkAja",
  "KlikBCA",
  "e-Pay BRI",
  "Climb Clicks",
  "GoPay",
  "ATM",
  "BNI Mobile",
  "ShoppePay",
  "Bank Transfer",
  "Alfamart",
  "Indomart",
];

const schema = yup.object().shape({
  number: yup.string().min(16).required(),
  month: yup.string().required(),
  year: yup.string().required(),
  ccv: yup.string().min(3).max(3).required(),
  name: yup.string().required(),
});

export default function BoxPayment() {
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState(0);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    Swal.fire(
      'Payment Success',
      'Thank you for puchasing',
      'success'
    )
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display="flex"
        borderRadius={2}
        width="100%"
        sx={{
          backgroundColor: "#fff",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
      >
        <Box
          padding={1}
          paddingTop={4}
          width="30%"
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          {listPayment.map((val, i) => {
            return (
              <Typography
                key={i}
                mb={3}
                ml={2}
                fontWeight="600"
                color={i !== 0 ? "#16558B" : "#009EDB"}
                sx={{ cursor: "pointer" }}
              >
                {val}
                {/* <hr color='#009EDB' style={i !== 0 ? {display: 'block'} : {display: 'none'}} /> */}
              </Typography>
            );
          })}
        </Box>
        <Box
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            display: { xs: "block", sm: "block", md: "none" },
          }}
        >
          <Tabs
            value={value}
            onChange={handleChangeTab}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            {listPayment.map((val, i) => {
              return <Tab key={i} label={val} />;
            })}
          </Tabs>
        </Box>
        <div style={{ borderLeft: "1px solid #DFDFDF" }} />

        <Box padding={3} paddingTop={4} width="100%">
          <Box display="flex" justifyContent="space-between">
            <Typography color="#2E6697" fontWeight="500">
              CARD DETAILS
            </Typography>
            <Box display="flex" alignItems="center" sx={{ color: "#A4A4A4" }}>
              <LockIcon fontSize="2px" sx={{ marginRight: "5px" }} />
              <Typography color="#A4A4A4">Secure Server</Typography>
            </Box>
          </Box>
          <hr style={{ borderTop: "1px dashed #888888" }} />
          <Box
            mt={3}
            display="flex"
            sx={{
              flexDirection: {
                xs: "column-reverse",
                sm: "column-reverse",
                md: "row",
              },
            }}
          >
            <Controller
              name="number"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  id="outlined-error"
                  error={!!errors.number}
                  helperText={errors.number ? errors.number?.message : ""}
                  label="Card Number *"
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "50%" },
                    marginRight: { xs: "0", sm: "0", md: "40px" },
                    marginTop: { xs: "20px", sm: "20px", md: "0" },
                  }}
                />
              )}
            />
            <Image src={Card} alt="card" />
          </Box>
          <Box mt={3}>
            <Box
              display="flex"
              sx={{
                flexDirection: { xs: "column", sm: "column", md: "row" },
                gap: { xs: "20px", sm: "20px", md: "0" },
              }}
            >
              <Controller
                name="month"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="outlined-error"
                    error={!!errors.month}
                    helperText={errors.month ? errors.month?.message : ""}
                    label="Month Expiration *"
                    sx={{ width: "100%", marginRight: "40px" }}
                  />
                )}
              />
              <Controller
                name="year"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="outlined-error"
                    error={!!errors.year}
                    helperText={errors.year ? errors.year?.message : ""}
                    label="Year Expiration *"
                    sx={{ width: "100%", marginRight: "40px" }}
                  />
                )}
              />
              <Controller
                name="ccv"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="password"
                    id="outlined-error"
                    error={!!errors.ccv}
                    helperText={errors.ccv ? errors.ccv?.message : ""}
                    label="CCV *"
                    sx={{ width: "100%" }}
                  />
                )}
              />
            </Box>
          </Box>
          <Box mt={4}>
            <Typography color="#2E6697" fontWeight="500">
              BILLING INFORMATION
            </Typography>
          </Box>
          <hr style={{ borderTop: "1px dashed #888888" }} />
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="outlined-error"
                error={!!errors.name}
                helperText={errors.name ? errors.name?.message : ""}
                label="Card Holder Name *"
                sx={{
                  width: { xs: "100%", sm: "100%", md: "65%" },
                  marginTop: "15px",
                }}
              />
            )}
          />
          <Box
            display="flex"
            mt={3}
            sx={{
              flexDirection: { xs: "column", sm: "column", md: "row" },
              gap: { xs: "20px", sm: "20px", md: "0" },
            }}
          >
            <TextField
              id="outlined-error"
              label="Address"
              sx={{
                width: { xs: "100%", sm: "100%", md: "65%" },
                marginRight: "20px",
              }}
            />
            <TextField
              id="outlined-error"
              label="Country"
              sx={{ width: { xs: "100%", sm: "100%", md: "65%" } }}
            />
          </Box>
          <Box
            style={{ display: "flex", marginTop: "20px" }}
            sx={{
              flexDirection: { xs: "column", sm: "column", md: "row" },
              gap: { xs: "20px", sm: "20px", md: "0" },
            }}
          >
            <TextField
              id="outlined-error"
              label="Province/State"
              sx={{ width: "100%", marginRight: "40px" }}
            />
            <TextField
              id="outlined-error"
              label="City"
              sx={{ width: "100%", marginRight: "40px" }}
            />
            <TextField
              id="outlined-error"
              label="ZIP Code"
              sx={{ width: "100%" }}
            />
          </Box>
          <Box
            display="flex"
            mt={3}
            sx={{
              flexDirection: { xs: "column", sm: "column", md: "row" },
              gap: { xs: "20px", sm: "20px", md: "0" },
            }}
          >
            <TextField
              id="outlined-error"
              label="Email"
              sx={{
                width: { xs: "100%", sm: "100%", md: "60%" },
                marginRight: "20px",
              }}
            />
            <TextField
              id="outlined-error"
              label="Phone"
              sx={{ width: { xs: "100%", sm: "100%", md: "60%" } }}
            />
          </Box>
          <hr
            style={{
              borderTop: "1px dashed #888888",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ flexDirection: { xs: "column", sm: "column", md: "row" } }}
          >
            <div>
              <Box display="flex" justifyContent="space-between" mb={1.5}>
                <Typography fontSize={14}>Redeem Point</Typography>
                <HelpIcon fontSize="2px" sx={{ color: "#A4A4A4" }} />
              </Box>
              <Box display="flex">
                <Image src={Check} alt="check" style={{ marginRight: "5px" }} />
                <Typography fontSize={13}>
                  I&apos;d like to redeem points from this credit card
                </Typography>
              </Box>
            </div>
            <div>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mt={2}
              >
                <FormControl
                  fullWidth
                  sx={{ m: 1, minWidth: { xs: 190, sm: 190, md: 270 } }}
                  size="small"
                >
                  <InputLabel id="select-plan">Plan</InputLabel>
                  <Select
                    labelId="select-plan"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <HelpIcon sx={{ color: "#A4A4A4" }} fontSize="2px" />
              </Box>
            </div>
          </Box>
          <PriceDetail />
          <button className="button-dash">Use Promo Code</button>
          <Box display="flex" justifyContent="flex-end">
            <button type="submit" className="button-main">
              PAY NOW
            </button>
          </Box>
        </Box>
      </Box>
    </form>
  );
}
