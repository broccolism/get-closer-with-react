import React, { useState } from "react";
import BreakPoint from "../utils/BreakPoint";
import Header from "../component/Header";
import Images from "../component/Images";
import Menu from "../component/Menu";
import Contents from "../component/Contents";
import TitleBox from "../component/TitleBox";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  grid: {
    marginTop: "20px",
  },
  contentWithTopPadding: {
    height: "1500px",
    backgroundColor: (props) => props.col,
    paddingTop: (props) => props.topPadding,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
  },
  horizMargin: {
    marginLeft: "15vw",
    marginRight: "16px",
  },
  rightFixer: {},
});

function Desktop() {
  const [contentTopPadding, setContentTopPadding] = useState(0);
  const props = { col: "#ddd", topPadding: contentTopPadding };
  const classes = useStyles(props);
  return (
    <BreakPoint name="desktop">
      <Header />
      <Images />

      <div className={classes.wrapper}>
        <div className={classes.horizMargin}>
          <Menu paddingSetter={setContentTopPadding} />
          <Contents className={classes.contentWithTopPadding} />
        </div>
        <TitleBox paddingSetter={setContentTopPadding} />
      </div>
    </BreakPoint>
  );
}

export default Desktop;
