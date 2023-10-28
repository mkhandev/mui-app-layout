import { Box } from "@mui/material";
import React from "react";
import Contentitem from "./Contentitem";

const contentArray = [
  {
    title: "Get Things done",
    description:
      "Lorem ipsum dolor sit amet consectetur and consectetur adipiscing elit sed diam nonumy eirmod tempor incididunt ut lab et al magna aliquyam erat volutpat vel aug ut aliquyam erat mag et aliquyam et aliquyam",
    img: "/1.jpg",
  },
  {
    title: "Productivity is berillant",
    description:
    "Lorem ipsum dolor sit amet consectetur and consectetur adipiscing elit sed diam nonumy eirmod tempor incididunt ut lab et al magna aliquyam erat volutpat vel aug ut aliquyam erat mag et aliquyam et aliquyam",
    img: "/2.jpg",
  },
  {
    title: "Quality of work",
    description:
    "Lorem ipsum dolor sit amet consectetur and consectetur adipiscing elit sed diam nonumy eirmod tempor incididunt ut lab et al magna aliquyam erat volutpat vel aug ut aliquyam erat mag et aliquyam et aliquyam",
    img: "/3.jpg",
  },
];

const Content = () => {
  return (
    <Box
      bgcolor={"#fbf2f2"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      width={"100%"}
      height={"100%"}
      style={{padding:2}}
    >
      {contentArray.map((content, index) => {
        return (
          <Contentitem
            title={content.title}
            description={content.description}
            img={content.img}
            key={index}
            swap={index%2 === 0}
          />
        );
      })}
    </Box>
  );
};

export default Content;
