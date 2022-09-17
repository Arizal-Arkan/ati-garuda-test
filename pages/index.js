import Head from "next/head";
import Image from "next/image";
import { Container, Grid } from "@mui/material";
import Footer from "../components/Footer";

//Components
import PaymentProcess from "../components/paymentProcess";
import BoxPayment from "../components/BoxPayment";
import SidePrice from '../components/sideDetailPrice'

export default function Home() {
  return (
    <>
      <Container sx={{ marginTop: "25px" }}>
        <PaymentProcess />
        <Grid container spacing={2} marginTop={2}>
          <Grid item xs={12} sm={12} xl={9} md={9} lg={9}>
            <BoxPayment />
          </Grid>
          <Grid item xs={0} sm={0} xl={3} md={3} lg={3} width="100%">
            <SidePrice />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
