import React from "react";
import { Route } from "react-router-dom";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import { CssBaseline, makeStyles } from "@material-ui/core";

import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    minHeight: "100vh",
  },
  appbar: {
    fontFamily: "Nunito",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    alignItems: "center",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
    fontSize: "1.3rem",
  },
  icon: {
    color: "#fff",
    fontSize: "1.3rem",
  },
  coloredText: {
    color: "#FC9424",
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Pretzel<span className={classes.coloredText}>Friends</span>.
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Route exact path="/" component={MainPage} />
      <Route path="/user" component={UserPage} />
    </div>
  );
}
