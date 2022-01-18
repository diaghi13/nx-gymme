import React from "react";
import { styled, useTheme } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const StyledDrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface DrawerHeaderProps {
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

const DrawerHeader = ({ open, setOpen }: DrawerHeaderProps) => {
  const theme = useTheme();

  const handleDrawerClose = () => {
    if (open && setOpen) {
      setOpen(false);
    }
  };

  return (
    <StyledDrawerHeader>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </StyledDrawerHeader>
  );
};

export default DrawerHeader;
