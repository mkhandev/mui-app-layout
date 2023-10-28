import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { CustomizedTypography } from "../styled/styled";

const Contentitem = ({ title, description, img, swap }) => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));
  return (
    <Box
      bgcolor={!swap && "#fff"}
      padding={isMatch ? 2 : 5}
      display={"flex"}
      flexDirection={isMatch ? "column" : "row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      {swap ? (
        <>
          <Box>
            <CustomizedTypography
              fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
              color="#734950"
              padding={3}
              variant="h3"
            >
              {title}
            </CustomizedTypography>
            <Typography
              fontSize={{ lg: 24, md: 20, sm: 16, xs: 14 }}
              variant="subtitle1"
              padding={3}
            >
              {description}
            </Typography>
          </Box>
          <img
            src={img}
            alt={title}
            loading="lazy"
            width={isMatch ? "100%" : "40%"}
            style={{
              boxShadow: "10px 10px 20px #ccc",
              marginLeft: isMatch ? "0%" : "2%",
              borderRadius: 20,
            }}
          />
        </>
      ) : (
        <>
          <img
            src={img}
            alt={title}
            loading="lazy"
            width={isMatch ? "100%" : "40%"}
            style={{
              boxShadow: "10px 10px 20px #ccc",
              marginRight: isMatch ? "0%" : "2%",
              borderRadius: 20,
            }}
          />
          <Box>
            <CustomizedTypography
              fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
              color="#734950"
              padding={3}
              variant="h3"
            >
              {title}
            </CustomizedTypography>
            <Typography
              fontSize={{ lg: 24, md: 20, sm: 16, xs: 14 }}
              padding={3}
              variant="subtitle1"
            >
              {description}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Contentitem;
