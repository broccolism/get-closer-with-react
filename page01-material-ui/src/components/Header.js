import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";

import { Link as Scroll } from "react-scroll";

import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  appbar: {
    background: "none",
    fontFamily: "Nunito",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  coloredText: {
    color: "#AAF89E",
  },
  titleWrapper: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontFamily: "Nunito",
    fontSize: "3rem",
  },
  goDown: {
    color: "#AAF89E",
    fontSize: "3rem",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  });
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.coloredText}>Island</span>.
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1500 } : {})}
        collapsedHeight={10}
      >
        <div className={classes.titleWrapper}>
          <h1 className={classes.title}>
            Welcome to <br /> My
            <span className={classes.coloredText}>Island</span>.
          </h1>
          <Scroll to="place" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
