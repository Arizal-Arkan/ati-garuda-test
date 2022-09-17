import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Garuda from "../public/images/garuda.svg";
import Alarm from '../public/images/alarm_on-24px.svg'
import Image from 'next/future/image'

const css = { maxWidth: '100%', height: 'auto'}

const ResponsiveAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Image style={css} src={Garuda} alt="garuda" className="garuda" />
          </Box>
          <Box padding={1} borderRadius="5px" display="flex" sx={{ backgroundColor: '#DFDFDF' }}>
            <Typography mr={1} variant="caption" sx={{ color: '#42749F' }}>Complete Payment In</Typography>
            <Typography mr={1} variant="caption" sx={{ color: '#C65029' }}>00:01:19</Typography>
            <Image src={Alarm} width="14" height="14" alt="alarm" />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default ResponsiveAppBar;
