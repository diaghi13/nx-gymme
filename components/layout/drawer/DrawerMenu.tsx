import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
} from "@mui/material";
import React, { useState } from "react";

import IconExpandLess from "@mui/icons-material/ExpandLess";
import IconExpandMore from "@mui/icons-material/ExpandMore";
import IconDashboard from "@mui/icons-material/Dashboard";
import IconShoppingCart from "@mui/icons-material/ShoppingCart";
import IconPeople from "@mui/icons-material/People";
import IconBarChart from "@mui/icons-material/BarChart";
import IconLibraryBooks from "@mui/icons-material/LibraryBooks";
import { makeStyles, createStyles } from "@mui/styles";
import DrawerMenuItem from "./DrawerMenuItem";
import DrawerSingleItem from "./DrawerRow";

const menuItems = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: IconDashboard,
  },
  {
    name: "Clienti",
    link: "/dashboard",
    icon: IconDashboard,
    items: [
      {
        name: "Lista Clienti",
        link: "/dashboard",
        icon: IconDashboard,
      },
      {
        name: "Aggiungi Cliente",
        link: "/dashboard",
        icon: IconDashboard,
      },
    ],
  },
];

const DrawerMenu: React.FC = () => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {menuItems.map((item, index) => (
        <DrawerMenu {...item} key={index} />
      ))}
    </List>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: "100%",
    },
  })
);

export default DrawerMenu;
