import React, { useState } from "react";
import BreakPoint from "../utils/BreakPoint";
import { phoneMarginHorizontal } from "../consts/width";

import Header from "../component/Header";
import Images from "../component/Images";
import Title from "../component/Title";
import MoreDesc from "../component/MoreDesc";
import Menu from "../component/Menu";
import Contents from "../component/Contents";
import BuyButton from "../component/BuyButton";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  withHorizPadding: {
    paddingLeft: `${phoneMarginHorizontal}px`,
    paddingRight: `${phoneMarginHorizontal}px`,
  },
  contentWithTopPadding: {
    height: "1500px",
    backgroundColor: (props) => props.col,
    paddingTop: (props) => props.topPadding,
  },
});

export const top = document.documentElement.scrollTop;

function Phone() {
  const [contentTopPadding, setContentTopPadding] = useState(0);
  const props = { col: "#ddd", topPadding: contentTopPadding };
  const classes = useStyles(props);
  return (
    <BreakPoint name="phone">
      <Header />
      <Images />
      <div className={classes.withHorizPadding}>
        <Title />
        <MoreDesc />
      </div>
      <Menu paddingSetter={setContentTopPadding} />
      <Contents className={classes.contentWithTopPadding} />
      <BuyButton />
    </BreakPoint>
  );
}

export default Phone;
