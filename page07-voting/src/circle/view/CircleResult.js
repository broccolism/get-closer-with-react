import React from "react";
import { Fade } from "react-reveal";

import { prices } from "../../App";

import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
import { VictoryPie } from "victory";

const style = (theme) => ({
  root: {
    width: "50vw",
    textAlign: "center",
    alignItems: "center",
    justifyContents: "center",
    opacity: 1,
    transition: "opacity 0.5s",
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
  },
  prevButton: {
    width: "200px",
    margin: "0px 32px 0px 32px",
    padding: "12px",
    backgroundColor: "#8762d1",
    fontSize: "16px",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
  },
  chart: { width: "60%" },
});

function CircleResult({ goPrev, scores, classes }) {
  const chart = scores.map((value, index) => {
    return { x: prices[index], y: value };
  });

  return (
    <Fade duration={500} delay={200}>
      <div className={classes.root}>
        <div className={classes.title}>🙃이만큼 심을거에요🙂</div>
        <Grid container direction="column" justify="center" alignItems="center">
          <div className={classes.chart}>
            <VictoryPie
              data={chart}
              radius={120}
              colorScale={["#f8f0ff", "#efe3fa", "#e8d7f7", "#e6c9ff"]}
            />
          </div>
          <div className={classes.prevButton} onClick={goPrev}>
            다시 심기
          </div>
        </Grid>
      </div>
    </Fade>
  );
}

export default withStyles(style)(CircleResult);
