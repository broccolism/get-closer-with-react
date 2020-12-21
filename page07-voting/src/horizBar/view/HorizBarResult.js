import React from "react";
import { makeStyles } from "@material-ui/core";
import styled, { keyframes } from "styled-components";

import { prices } from "../../App";

import { Fade } from "react-reveal";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
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
  items: {
    width: "100%",
    textAlign: "center",
    marginTop: "26px",
    marginBottom: "32px",
  },
  item: {
    width: "90%",
    verticalAlign: "middle",
    textAlign: "center",
    padding: "12px",
    margin: "6px 0px 6px 0px",
    fontSize: "16px",
    borderRadius: "6px",
    transition: "all 0.3s",
  },
  itemText: {
    fontSize: "20px",
  },
  itemBar: {
    height: "20px",
    marginLeft: "8px",
    borderRadius: "0px 12px 12px 0px",
    animation: `$growEffect 5000ms ${theme.transitions.easing.easeInOut}`,
  },
  itemPercent: {
    marginLeft: "8px",
    color: "#aaa",
  },
  submitButton: {
    width: "200px",
    margin: "0px 32px 0px 32px",
    padding: "12px",
    backgroundColor: "#8762d1",
    fontSize: "16px",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
  },
}));

const GrowingBar = styled.div`
  animation: ${(props) => growEffect(props.width)} 2s;
`;

const growEffect = (width) => keyframes`
0%{
  width: 0px;
}
1000%{
  width: ${width}px;
}`;

function HorizBarResult({ goPrev, scores }) {
  const classes = useStyles();
  const accentBarColor = "#f7688e";
  const defaultBarColor = "#c4c4c4";
  const sum = scores.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  const maxIndex = scores.reduce((acc, cur, index) => {
    console.log("acc: ", acc);
    return acc < cur ? index : acc;
  }, -1);

  function renderItem(index) {
    const percent = ((scores[index] / sum) * 100).toFixed(1);
    const width = (50 + percent * 3).toString() + "px";
    const color = index === maxIndex ? accentBarColor : defaultBarColor;

    return (
      <Grid
        className={classes.item}
        container
        item
        key={index}
        direction="row"
        alignItems="center"
      >
        {/* <Fade left duration={700}> */}
        <div className={classes.itemText}>{prices[index]}</div>
        <GrowingBar
          className={classes.itemBar}
          style={{ width: width, backgroundColor: color }}
        ></GrowingBar>
        <div className={classes.itemPercent}>{percent}%</div>
        {/* </Fade> */}
      </Grid>
    );
  }

  return (
    <Fade duration={500} delay={200}>
      <div className={classes.root}>
        <div className={classes.title}>🙃이만큼 심을거에요🙂</div>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid
            className={classes.items}
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            {prices.map((item, index) => {
              return renderItem(index, classes);
            })}
          </Grid>
          <div className={classes.submitButton} onClick={goPrev}>
            다시 심기
          </div>
        </Grid>
      </div>
    </Fade>
  );
}

export default HorizBarResult;
