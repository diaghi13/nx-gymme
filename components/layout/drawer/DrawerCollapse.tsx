import { Collapse, Divider, List } from "@mui/material";
import React from "react";
import DrawerRow, { DrawerRowProps } from "./DrawerRow";

interface DrawerCollapseProps {
  items: DrawerRowProps[];
  open: boolean;
}

const DrawerCollapse = ({ items, open }: DrawerCollapseProps) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {items.map((item: DrawerRowProps) => {
          <DrawerRow {...item} />;
        })}
      </List>
    </Collapse>
  );
};

export default DrawerCollapse;
