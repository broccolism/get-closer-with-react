import React from "react";

import Header from "../components/Header";
import Users from "../components/Users";
import AboutPretzel from "../components/AboutPretzel";

import useWindowPosition from "../hooks/useWindowPosition";
import { CssBaseline, makeStyles } from "@material-ui/core";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "5rem",
    display: "block",
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#000",
  },
}));

export default function MainPage() {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root}>
      <Header />
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <AboutPretzel />
      </Collapse>
      <Users />
    </div>
  );
}
