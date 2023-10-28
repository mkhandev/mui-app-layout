import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography
        fontSize={{ lg: 30, md: 24, sm: 18, xs: 14 }}
        fontWeight={"bold"}
        variant="h3"
        style={{ padding: "30px 20px 0px 20px" }}
        textAlign={"center"}
      >
        Ready for any tem size
      </Typography>
      <Typography
        fontSize={{ lg: 24, md: 20, sm: 16, xs: 12 }}
        variant="subtitl2"
        style={{ padding: "20px 20px 10px 20px" }}
        textAlign={"center"}
      >
        Optimized for any team
      </Typography>
      <Box
        display={"flex"}
        margin={"auto"}
        justifyContent={"center"}
        padding={5}
      >
        <Button
          sx={{ mr: 1, fontSize: { lg: 20, md: 17, sm: 12, xs: 8 } }}
          variant="contained"
        >
          Try CodeEnv for free
        </Button>
        <Button sx={{ ml: 1, fontSize: { lg: 20, md: 17, sm: 12, xs: 8 } }} variant="outlined">Try CodeEnv for free</Button>
      </Box>
    </Box>
  );
};

export default Footer;
