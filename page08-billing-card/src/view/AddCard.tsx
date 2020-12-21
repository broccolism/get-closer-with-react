import React, { useState, useRef } from "react";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";

import Card from "../components/Card";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import * as id from "../const/elementIds";
import { colors, vinNumbers } from "../const/cardCorp";

const styles = createStyles({
  root: {
    alignText: "center",
  },
  cardWrapper: {
    boxShadow: "2px 2px 10px 4px #999",
    borderRadius: "16px",
  },
  inputWrapper: {
    width: "320px",
  },
  fieldName: {
    textAlign: "start",
  },
  fieldInputLong: {
    width: "100%",
    outline: "none",
    border: "none",
    borderBottom: "1px solid #444",
    fontSize: "18px",
    marginTop: "8px",
    marginBottom: "20px",
  },
  fieldInputMid: {
    width: "60px",
    outline: "none",
    border: "none",
    borderBottom: "1px solid #444",
    fontSize: "18px",
    marginTop: "8px",
  },
  fieldInputShort: {
    width: "25px",
    outline: "none",
    border: "none",
    borderBottom: "1px solid #444",
    fontSize: "18px",
    marginTop: "8px",
  },
  marginBetweenYearAndMonth: {
    display: "inline-block",
    height: "1px",
    width: "16px",
  },
  bottomWrapper: {
    textAlign: "start",
  },
  button: {
    backgroundColor: "#ddd",
    marginTop: "20px",
    fontSize: "16px",
  },
});

interface ComponentProps {
  setOpen: any;
}

function AddCard(props: ComponentProps & WithStyles<typeof styles>) {
  const { classes } = props;
  const defaultCardStartColor = "#bbb";
  const defaultCardEndColor = "#888";

  const [card, setCard] = useState({
    alias: "별명을 입력하세요.",
    cardCorp: "",
    card_no: "",
    cvcNumber: "",
    card_pw: "",
    expire_year: -1,
    expire_month: -1,
    colorStart: defaultCardStartColor,
    colorEnd: defaultCardEndColor,
  });

  const handleChangeAlias = (e: any) => {
    const text =
      e.target.value.length === 0 ? "별명을 입력하세요." : e.target.value;
    setCard({ ...card, alias: text });
  };

  const handleChangeCardNo = (e: any) => {
    let curText = e.target.value.replace(/ /gi, "");
    let color = { start: defaultCardStartColor, end: defaultCardEndColor };
    let cardCorp = card.cardCorp;
    const curLen = curText.length;

    if (e.nativeEvent.inputType !== "deleteContentBackward") {
      if (curLen % 4 === 0) {
        e.target.value += " ";
      } else if (curLen > 16) {
        e.target.value = e.target.value.substr(0, 19);
        curText = curText.substr(0, 16);
      }
    }

    if (curLen === 0) {
      cardCorp = "";
      color = { start: defaultCardStartColor, end: defaultCardEndColor };
    } else if (curLen === 6) {
      for (const [key, value] of vinNumbers) {
        if (curText === key) {
          color = colors.get(value);
          cardCorp = value;
        }
      }
    }

    const newCard =
      curLen === 6 || curLen === 0
        ? {
            ...card,
            card_no: curText,
            colorStart: color.start,
            colorEnd: color.end,
            cardCorp: cardCorp,
          }
        : { ...card, card_no: curText, cardCorp: cardCorp };
    setCard(newCard);
  };

  const handleChangeCardExpireYear = (e: any) => {
    let curText = e.target.value;

    if (curText.length > 2) {
      curText = curText.substr(0, 2);
      e.target.value = curText;
    }

    const year = Number.parseInt("20" + curText);

    const newCard = { ...card, expire_year: year };
    setCard(newCard);
  };

  const handleChangeCardExpireMonth = (e: any) => {
    let curText = e.target.value;

    if (curText.length > 2) {
      curText = curText.substr(0, 2);
      e.target.value = curText;
    }

    const month = curText.length > 0 ? Number.parseInt(curText) : -1;

    const newCard = { ...card, expire_month: month };
    setCard(newCard);
  };

  const handleChangeCardCvc = (e: any) => {
    const curText = e.target.value;
    if (curText.length > 3) {
      e.target.value = curText.substr(0, 3);
    }
  };

  const handleChangeCardPw = (e: any) => {
    const curText = e.target.value;
    if (curText.length > 4) {
      e.target.value = curText.substr(0, 4);
    }
  };

  const handleClickButton = (e: any) => {
    console.log(card);
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        spacing={5}
        alignItems="center"
        alignContent="center"
      >
        <Grid item>
          <div className={classes.cardWrapper}>
            <Card card={card} />
          </div>
        </Grid>
        <Grid item>
          <form className={classes.inputWrapper}>
            <div className={classes.fieldName}>카드 별명</div>
            <input
              id={id.addCardAliasId}
              className={classes.fieldInputLong}
              type="text"
              onChange={handleChangeAlias}
            />
            <div className={classes.fieldName}>카드 번호</div>
            <input
              id={id.addCardNoId}
              className={classes.fieldInputLong}
              type="text"
              onChange={handleChangeCardNo}
            />
            <Grid item container direction="row" justify="space-between">
              <Grid item>
                <div className={classes.fieldName}>유효 기한</div>
                <div className={classes.bottomWrapper}>
                  <span className={classes.fieldName}>20</span>
                  <input
                    id={id.addCardExpireYearId}
                    className={classes.fieldInputShort}
                    type="text"
                    onChange={handleChangeCardExpireYear}
                  />
                  <span className={classes.fieldName}>년</span>
                  <div className={classes.marginBetweenYearAndMonth} />
                  <input
                    id={id.addCardExpireMonthId}
                    className={classes.fieldInputShort}
                    type="text"
                    onChange={handleChangeCardExpireMonth}
                  />
                  <span className={classes.fieldName}>월</span>
                </div>
              </Grid>
              <Grid item>
                <div className={classes.fieldName}>CVC</div>
                <input
                  id={id.addCardCvcId}
                  className={classes.fieldInputMid}
                  type="text"
                  onChange={handleChangeCardCvc}
                />
              </Grid>
              <Grid item>
                <div className={classes.fieldName}>비밀번호</div>
                <input
                  id={id.addCardPwId}
                  className={classes.fieldInputMid}
                  type="password"
                  onChange={handleChangeCardPw}
                />
              </Grid>
            </Grid>
          </form>
          <div onClick={handleClickButton}>
            <Button className={classes.button}>등록하기</Button>
          </div>{" "}
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(AddCard);
