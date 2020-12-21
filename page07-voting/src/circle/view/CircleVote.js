import React, { useState } from "react";
import { withStyles } from "@material-ui/core";

import { prices } from "../../App";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";

const style = (theme) => ({
  root: {
    width: "50vw",
    textAlign: "center",
    alignItems: "center",
    justifyContents: "center",
  },
  fadeOut: {
    width: "50vw",
    textAlign: "center",
    alignItems: "center",
    justifyContents: "center",

    opacity: 0,
    transition: "opacity 0.5s",
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
  },
  wrapper: {
    width: "100%",
  },
  container: {
    height: "300px",
    marginTop: "40px",
    width: "50%",
  },
  priceTags: {
    height: "100%",
  },
  priceTag: { width: "100px" },
  tagIcon3: {
    width: "40px",
    height: "40px",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/3.jpg"})`,
    backgroundSize: "cover",
  },
  tagIcon2: {
    width: "40px",
    height: "40px",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/2.jpg"})`,
    backgroundSize: "cover",
  },
  tagIcon1: {
    width: "40px",
    height: "40px",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/1.jpg"})`,
    backgroundSize: "cover",
  },
  tagIcon0: {
    width: "40px",
    height: "40px",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/0.jpg"})`,
    backgroundSize: "cover",
  },
  transparent: { opacity: 0 },
  submitButton: {
    width: "50px",
    height: "50px",
    borderRadius: "50px",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8762d1",
    fontSize: "16px",
    color: "#fff",
    cursor: "pointer",
  },
});

function CircleVote({ goNext, scores, setScore, classes }) {
  const [selectedItem, setSelectedItem] = useState(-1);
  const [fadeOut, setFadeOut] = useState(false);
  const [checked, setChecked] = useState(true);

  return (
    <div className={fadeOut ? classes.fadeOut : classes.root}>
      <div className={classes.title}>🧐얼마면 돼? 얼마면 되겠냐고!🧐</div>
      <Grid
        className={classes.wrapper}
        container
        direction="row"
        alignItems="center"
        justify="space-between"
      >
        <Grid className={classes.container} container item direction="row">
          <div>
            <Grid
              className={classes.priceTags}
              item
              container
              direction="column"
              justify="space-between"
            >
              <div className={classes.priceTag}>{prices[0]}</div>
              <div className={classes.priceTag}>{prices[1]}</div>
              <div className={classes.priceTag}>{prices[2]}</div>
              <div className={classes.priceTag}>{prices[3]}</div>
            </Grid>
          </div>
          <Grid item>
            <Slider
              orientation="vertical"
              defaultValue={1}
              step={1}
              onChange={(_, value) => handleClickItem(value)}
              min={0}
              max={3}
            />
          </Grid>
          <div>
            <Grid
              className={classes.priceTags}
              item
              container
              direction="column"
              justify="space-between"
            >
              <Slide direction="left" in={checked} timeout={{ exit: 700 }}>
                <div
                  className={
                    selectedItem === 3 ? classes.tagIcon3 : classes.transparent
                  }
                ></div>
              </Slide>
              <Slide direction="left" in={checked} timeout={{ exit: 700 }}>
                <div
                  className={
                    selectedItem === 2 ? classes.tagIcon2 : classes.transparent
                  }
                ></div>
              </Slide>
              <Slide direction="left" in={checked} timeout={{ exit: 700 }}>
                <div
                  className={
                    selectedItem === 1 ? classes.tagIcon1 : classes.transparent
                  }
                ></div>
              </Slide>
              <Slide direction="left" in={checked} timeout={{ exit: 700 }}>
                <div
                  className={
                    selectedItem === 0 ? classes.tagIcon0 : classes.transparent
                  }
                ></div>
              </Slide>
            </Grid>
          </div>
        </Grid>
        <Grid item>
          <div
            className={classes.submitButton}
            onClick={handleClickSubmitButton}
          >
            GO
          </div>
        </Grid>
      </Grid>
    </div>
  );

  function handleClickItem(index) {
    console.log("INDEX: ", index);
    setSelectedItem(index);
  }

  function handleClickSubmitButton() {
    if (selectedItem !== -1) {
      let newScore = [0, 0, 0, 0];
      scores.map((value, index) => {
        if (index === selectedItem) {
          newScore[index] = value + 1;
        } else {
          newScore[index] = value;
        }
      });

      setScore(newScore);
      setChecked(false);
      setTimeout(() => goNext(), 500);
    } else {
      window.alert("가격을 골라주세요.");
    }
  }
}

export default withStyles(style)(CircleVote);
