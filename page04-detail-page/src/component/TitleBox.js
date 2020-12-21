import React, { useState, useEffect, useRef } from "react";

import Title from "./Title";
import MoreDesc from "./MoreDesc";
import BuyButton from "./BuyButton";
import Grid from "@material-ui/core/grid";

import { withStyles } from "@material-ui/core";
import colors from "../consts/colors";

const styles = (theme) => ({
  rootDefault: {
    width: "280px",
    height: "470px",
    padding: "40px 30px 20px 30px",
    boxShadow: `0px 1px 1px 1px ${colors.lightGray}`,
    zIndex: 1,
  },
  rootFixed: {
    width: "280px",
    height: "470px",
    position: "fixed",
    top: 0,
    right: "calc(37vw - 376px)",
    backgroundColor: "#fff",
    padding: "40px 30px 20px 30px",
    boxShadow: `0px 1px 1px 1px ${colors.lightGray}`,
    zIndex: 1,
  },
});

function TitleBox({ paddingSetter, classes }) {
  const [fixed, setFixed] = useState(false);
  const [oldYOffset, setOldYOffset] = useState(0);
  const [menuTopPosition, setTopPosition] = useState(-1);
  const documentRef = useRef(document);

  const handleScroll = () => {
    const { pageYOffset } = window;
    var curMenuTopPosition = document.getElementById("Menu").offsetTop;
    const compare =
      menuTopPosition !== -1 ? menuTopPosition : curMenuTopPosition;
    const fixed = compare <= pageYOffset ? true : false;

    setFixed(fixed);
    setOldYOffset(pageYOffset);

    if (menuTopPosition === -1) {
      setTopPosition(curMenuTopPosition);
    }

    var menuHeight = document.getElementById("Menu").clientHeight;
    fixed ? paddingSetter(menuHeight + "px") : paddingSetter("0px");
  };

  useEffect(() => {
    documentRef.current.addEventListener("scroll", handleScroll);
    return () =>
      documentRef.current.removeEventListener("scroll", handleScroll);
  }, [oldYOffset]);

  return (
    <div className={fixed ? classes.rootFixed : classes.rootDefault}>
      <Grid container direction="row">
        <Title />
        <MoreDesc />
        <BuyButton />
      </Grid>
    </div>
  );
}

export default withStyles(styles)(TitleBox);
