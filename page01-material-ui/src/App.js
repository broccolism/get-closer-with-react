import React from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";

import Header from "./components/Header";
import Place from "./components/Place";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpeg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Place />
    </div>
  );
}
