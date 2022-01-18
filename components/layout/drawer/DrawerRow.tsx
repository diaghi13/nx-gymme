import { SvgIconComponent } from "@mui/icons-material";
import { ListItem, ListItemIcon, ListItemText, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { default as NextLink } from "next/link";
import React, { useState } from "react";
import { UrlObject } from "url";

import IconExpandMore from "@mui/icons-material/ExpandMore";
import IconExpandLess from "@mui/icons-material/ExpandLess";

export interface DrawerRowProps {
  name: string;
  link?: string | UrlObject;
  Icon?: SvgIconComponent;
  items?: any[];
  isExpandable: boolean;
  open: boolean;
  setOpen: (isExpansable: boolean) => void;
}

const DrawerRow: React.FC<DrawerRowProps> = ({
  name,
  link,
  Icon,
  items = [],
  isExpandable = false,
  open,
  setOpen,
}) => {
  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  return link && !isExpandable ? (
    <NextLink href={link} passHref>
      <ListItem button className={classes.menuItem} component="a">
        {Icon && (
          <ListItemIcon className={classes.menuItemIcon}>
            <Icon />
          </ListItemIcon>
        )}
        <ListItemText primary={name} />
        {isExpandable && !open && <IconExpandMore />}
        {isExpandable && open && <IconExpandLess />}
      </ListItem>
    </NextLink>
  ) : (
    <ListItem
      button
      className={classes.menuItem}
      component="a"
      onClick={handleClick}
    >
      {Icon && (
        <ListItemIcon className={classes.menuItemIcon}>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} />
      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />}
    </ListItem>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuItem: {
      "&.active": {
        background: "rgba(0, 0, 0, 0.08)",
        "& .MuiListItemIcon-root": {
          color: "#fff",
        },
      },
    },
    menuItemIcon: {
      color: "#97c05c",
    },
  })
);

export default DrawerRow;
