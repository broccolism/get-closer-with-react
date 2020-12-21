import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MaterialCard from "./MaterialCard";

import places from "../statics/places";
import useWindowPosition from "../hooks/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

export default function () {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="place">
      <MaterialCard place={places[0]} checked={checked} />
      <MaterialCard place={places[1]} checked={checked} />
    </div>
  );
}
