import React from "react";
import { makeStyles } from "@material-ui/core";

import DateNumber from "./DateNumber";

import directions from "../consts/AnimationDirection";

const useStyles = makeStyles((theme) => ({
  root: {
    animation: `$opacityEffect 3000ms ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes opacityEffect": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
}));

function Month() {
  const classes = useStyles();
  const fontStyle = {
    fontSize: "150px",
    fontWeight: "700",
  };
  return (
    <div className={classes.root}>
      <DateNumber date={27} direction={directions[0]} fontStyle={fontStyle} />
      <DateNumber date={31} direction={directions[1]} />
    </div>
  );
}

export default Month;
