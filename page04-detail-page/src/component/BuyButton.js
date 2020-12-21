import React from "react";

import Button from "@material-ui/core/Button";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";

import { withStyles } from "@material-ui/core";
import colors from "../consts/colors";

const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100vw",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#fff",
    boxShadow: `0px -2px 4px ${colors.midGray}`,
    padding: "12px 12px 12px 0px",
    [theme.breakpoints.up("md")]: {
      width: "280px",
      position: "relative",
      boxShadow: "none",
    },
  },
  orangeButton: {
    width: "calc(100vw - 150px)",
    paddingTop: "10px",
    paddingBottom: "10px",
    color: "#fff",
    backgroundColor: `${colors.lightOrange}`,
    fontWeight: "800",
    fontSize: "16px",
    borderRadius: "4px",
  },
  icons: {
    fontSize: "26px",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
});

function BuyButton({ classes }) {
  return (
    <div className={classes.root}>
      <FavoriteBorderIcon className={classes.icons} />
      <CardGiftcardIcon className={classes.icons} />
      <Button className={classes.orangeButton} disableElevation>
        수강 옵션 구경하기
      </Button>
    </div>
  );
}

export default withStyles(styles)(BuyButton);
