import React, { useState } from "react";
import { withStyles } from "@material-ui/core";

import { prices } from "../../App";

import Grid from "@material-ui/core/Grid";

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
    backgroundColor: "#f6f6f6",
    padding: "12px",
    margin: "6px 0px 6px 0px",
    cursor: "pointer",
    fontSize: "20px",
    borderRadius: "6px",
    "&:hover": {
      width: "100%",
      fontSize: "24px",
    },
    transition: "all 0.3s",
  },
  itemSelected: {
    width: "90%",
    verticalAlign: "middle",
    textAlign: "center",
    backgroundColor: "#ded8eb",
    padding: "12px",
    margin: "6px 0px 6px 0px",
    cursor: "pointer",
    fontSize: "20px",
    borderRadius: "6px",
    "&:hover": {
      width: "100%",
      fontSize: "24px",
    },
    transition: "all 0.3s",
  },
  submitButton: {
    width: "200px",
    margin: "0px 32px 0px 32px",
    padding: "12px",
    backgroundColor: "#8762d1",
    fontSize: "16px",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "6px",
  },
});

function HorizBarVote({ goNext, scores, setScore, classes }) {
  const [selectedItem, setSelectedItem] = useState(-1);
  const [fadeOut, setFadeOut] = useState(false);

  function renderItem(index) {
    return (
      <div
        className={classes.itemRoot}
        onClick={handleClickItem.bind(this, index)}
      >
        {prices[index]}
      </div>
    );
  }

  return (
    <div className={fadeOut ? classes.fadeOut : classes.root}>
      <div className={classes.title}>🧐얼마면 돼? 얼마면 되겠냐고!🧐</div>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid
          className={classes.items}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          {prices.map((item, index) => {
            return (
              <Grid
                item
                key={index}
                className={
                  selectedItem === index ? classes.itemSelected : classes.item
                }
              >
                {renderItem(index, classes)}
              </Grid>
            );
          })}
        </Grid>
        <div className={classes.submitButton} onClick={handleClickSubmitButton}>
          모 심으러 가기
        </div>
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
      setFadeOut(true);
      setTimeout(() => goNext(), 300);
    } else {
      window.alert("가격을 골라주세요.");
    }
  }
}

export default withStyles(style)(HorizBarVote);
