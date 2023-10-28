import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const sampleLists = ["Products", "Solutions", "Pricing", "Enterprise"];

const DrawerComp = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {sampleLists.map((item, index) => (
            <ListItemButton onClick={() => setOpen(false)} key={index}>
              <ListItemText>{item}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(true)} sx={{ ml: "auto" }}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
