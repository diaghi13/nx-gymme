import React, { forwardRef, useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
} from "@mui/material";
import IconDashboard from "@mui/icons-material/Dashboard";
import { ClassNameMap, createStyles, makeStyles } from "@mui/styles";
import { UrlObject } from "url";
import { SvgIconComponent } from "@mui/icons-material";
import DrawerCollapse from "./DrawerCollapse";
import DrawerRow, { DrawerRowProps } from "./DrawerRow";

interface DrawerMenuItemProps {
  name: string;
  link: string | UrlObject;
  Icon?: SvgIconComponent;
  items?: DrawerRowProps[];
}

const DrawerMenuItem: React.FC<DrawerMenuItemProps> = (
  { name, link, Icon, items = [] },
  props
) => {
  const [open, setOpen] = useState(false);
  const isExpandable = items && items.length > 0;

  return (
    <>
      <DrawerRow
        name={name}
        link={link}
        Icon={Icon}
        items={items}
        isExpandable={isExpandable}
        open={open}
        setOpen={setOpen}
      />
      {isExpandable ? <DrawerCollapse items={items} open={open} /> : null}
    </>
  );
};

export default DrawerMenuItem;
