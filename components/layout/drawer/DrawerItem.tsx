import React, { useState } from "react";
import { SvgIconComponent } from "@mui/icons-material";
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { UrlObject } from "url";

import IconExpandMore from "@mui/icons-material/ExpandMore";
import IconExpandLess from "@mui/icons-material/ExpandLess";

interface DrawerCollapsableProps {
  open: boolean;
  items?: any[];
}

const DrawerCollapsable = ({ open, items }: DrawerCollapsableProps) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items &&
          items.map((item: any, key: any) => (
            <DrawerItem {...item} key={key} />
          ))}
      </List>
    </Collapse>
  );
};

interface DrawerItemProps {
  name: string;
  Icon?: SvgIconComponent;
  href?: string | UrlObject;
  items?: any[];
}

const DrawerItem = ({ name, Icon, href, items }: DrawerItemProps) => {
  const [open, setOpen] = useState(false);
  const isExpandable = items && items.length > 0;

  const handleExpand = () => {
    setOpen(!open);
  };

  return href && !isExpandable ? (
    <Link href={href} passHref>
      <ListItem button>
        {Icon && <ListItemIcon>{<Icon />}</ListItemIcon>}
        <ListItemText primary={name} />
      </ListItem>
    </Link>
  ) : (
    <>
      <ListItem button onClick={handleExpand}>
        {Icon && <ListItemIcon>{<Icon />}</ListItemIcon>}
        <ListItemText primary={name} />
        {isExpandable && !open && <IconExpandMore />}
        {isExpandable && open && <IconExpandLess />}
      </ListItem>
      <DrawerCollapsable open={open} items={items} />
    </>
  );
};

export default DrawerItem;
