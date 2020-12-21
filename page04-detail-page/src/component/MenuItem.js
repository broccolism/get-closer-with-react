import React from "react";
import colors from "../consts/colors";
import { withStyles } from "@material-ui/core";

import { Link as Scroll } from "react-scroll";
import menus from "../consts/menuItems";

const styles = (theme) => ({
  default: {
    display: "inline-block",
    color: `${colors.gray}`,
    fontSize: "14px",
    fontWeight: "700",
    paddingTop: "12px",
    borderBottom: "5px solid rgba(0, 0, 0, 0)",
    marginRight: "24px",
    cursor: "pointer",
  },
  selected: {
    display: "inline-block",
    fontSize: "14px",
    fontWeight: "700",
    paddingTop: "12px",
    paddingBottom: "12px",
    borderBottom: "5px solid #000",
    marginRight: "24px",
    marginBottom: "-2px",
    cursor: "pointer",
  },
});

function MenuItem({ index, isSelected, onClick, classes }) {
  const menuHeight = 50;
  return (
    <Scroll to={menus[index].id} offset={-menuHeight} smooth={false}>
      <div
        className={isSelected ? classes.selected : classes.default}
        onClick={onClick}
      >
        {menus[index].name}
      </div>
    </Scroll>
  );
}

export default withStyles(styles)(MenuItem);
