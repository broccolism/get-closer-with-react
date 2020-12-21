import React from "react";
import { makeStyles } from "@material-ui/core";

import Month from "./Month";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "50px",
    overflow: "hidden",
  },
}));

function Year() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      2020
      <div>
        <Month />
      </div>
    </div>
  );
}

export default Year;
