import React from "react";

import { withStyles } from "@material-ui/core";
import colors from "../consts/colors";

const styles = (theme) => ({
  category: {
    fontSize: "14px",
    fontWeight: "500",
  },
  productName: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "12px",
  },
  grayTag: {
    display: "inline",
    backgroundColor: `${colors.lightLightGray}`,
    padding: "4px 6px",
    margin: "2px",
    fontSize: "12px",
    fontWeight: "700",
    color: `${colors.gray}`,
    borderRadius: "4px",
  },
  redTag: {
    display: "inline",
    backgroundColor: `${colors.lightLightGray}`,
    padding: "4px 6px",
    margin: "2px",
    fontSize: "12px",
    fontWeight: "700",
    color: `${colors.red}`,
    borderRadius: "4px",
  },
});

function Title({ classes }) {
  return (
    <div>
      <div className={classes.category}>영상/디자인 · 큐리</div>
      <div className={classes.productName}>
        [🔥인생역전혜택] 이성과 감성을 넘나들다. 시선을 사로잡는 브랜드 디자인
      </div>
      <div className={classes.redTag}>선물하기</div>
      <div className={classes.grayTag}>바로 수강 가능</div>
    </div>
  );
}

export default withStyles(styles)(Title);
