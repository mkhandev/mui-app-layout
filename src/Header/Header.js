import React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  createTheme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import DrawerComp from "./DrawerComp";
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import { CustomizedTypography } from "../styled/styled";

const links = ["Products", "Solutions", "Pricing", "Enterprise"];

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768, // Add a new breakpoint at 768px
      lg: 1280,
      xl: 1920,
    },
  },
});

const Header = () => {
  //const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));
  //console.log(isMatch);

  const isMatch = useMediaQuery(theme.breakpoints.down("md")); // Use the custom breakpoint
  console.log(isMatch);

  return (
    <AppBar sx={{ bgcolor: "transparent", boxShadow: "0", position: "sticky" }}>
      {isMatch ? (
        <Box display={"flex"} sx={{ display: "flex", alignItems: "center" }}>
          <ApiIcon sx={{ color: "black", paddingLeft: 1 }} />
          <Typography
            sx={{ padding: 1, color: "black" }}
            variant="h6"
            fontFamily={"fantasy"}
          >
            Abdullah
          </Typography>
          <DrawerComp />
        </Box>
      ) : (
        <Toolbar>
          <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
            <ApiIcon sx={{ color: "black" }} />
            <Box>
              <Tabs component={Link} sx={{ textDecoration: "none" }} value={0}>
                {links.map((link, index) => {
                  return (
                    <Tab
                      sx={{
                        fontWeight: "bold",
                        textDecoration: "none",
                        ":hover": {
                          textDecoration: "underline",
                          textUnderlineOffset: "5px",
                        },
                      }}
                      label={link}
                      key={index}
                    />
                  );
                })}
              </Tabs>
            </Box>
            <Box display={"flex"} marginLeft={"auto"}>
              <Button sx={{ mr: 2, fontSize: { lg: 14, md: 12, sm: 10, xs: 8 } }} variant="outlined">
                Talk to us
              </Button>
              <Button sx={{fontSize: { lg: 14, md: 12, sm: 10, xs: 8 } }} variant="contained">Try to free</Button>
            </Box>
          </Box>
        </Toolbar>
      )}

      <Box width={"100%"} height={"300px"}>
        <video
          width={"100%"}
          height={"300px"}
          autoPlay
          loop
          muted
          playsInline
          src="/video.mp4"
        ></video>
      </Box>
      <Box display={"flex"} width={"100%"}>
        <CustomizedTypography
          margin="auto"
          variant="h4"
          color="black"
          textAlign={"center"}
          fontSize={{ lg: 30, md: 24, sm: 18, xs: 14 }}
        >
          Build your software hassle free and with top notch quality
        </CustomizedTypography>
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        margin={"auto"}
        marginTop={5}
        marginBottom={10}
      >
        <Button endIcon={<EmailIcon />} variant="outlined">Signup</Button>
        <Button endIcon={<GoogleIcon />} color="error" sx={{ ml: 2 }} variant="contained">
          Signup
        </Button>
      </Box>
    </AppBar>
  );
};

export default Header;
