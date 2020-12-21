import { Theme, makeStyles } from "@material-ui/core/styles";
import React from "react";

import Grid from "@material-ui/core/Grid";

import { cardWidth, cardHeight } from "../const/cardSize";

interface StyleProps {
  start: string;
  end: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    display: "inline-block",
    width: `${cardWidth}px`,
    height: `${cardHeight}px`,
    background: (props) =>
      `linear-gradient(45deg, ${props.start}, ${props.end})`,
    borderRadius: "16px",
    cursor: "pointer",
  },
  selectedRoot: {
    display: "inline-block",
    width: `${cardWidth}px`,
    height: `${cardHeight}px`,
    background: (props) =>
      `linear-gradient(45deg, ${props.start}, ${props.end})`,
    borderRadius: "16px",
    border: "2px solid #333",
    cursor: "pointer",
  },
  cardCorp: {
    margin: "20px 12px 0px 20px",
    color: "rgba(255, 255, 255, 0.7)",
    textAlign: "start",
    fontSize: "14px",
  },
  cardAlias: {
    margin: "12px 12px 40px 12px",
    padding: "8px 0px 8px 36px",
    fontSize: "18px",
    letterSpacing: "2px",
    textAlign: "start",
    color: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "30px",
  },
  cardNo: {
    marginLeft: "50px",
  },
  splitedCardNum: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "20px",
    letterSpacing: "2px",
    marginRight: "14px",
  },
  cardExpires: {
    color: "rgba(255, 255, 255, 0.4)",
    marginLeft: "50px",
    textAlign: "start",
  },
}));

interface ComponentProps {
  card: any;
  isSelected?: boolean;
}

function Card(props: ComponentProps) {
  const { card } = props;
  const colors = { start: card.colorStart, end: card.colorEnd };
  const classes = useStyles(colors);

  return (
    <Grid
      container
      direction="column"
      className={props.isSelected ? classes.selectedRoot : classes.root}
    >
      <div className={classes.cardCorp}>{card.cardCorp}</div>
      <div className={classes.cardAlias}>{card.alias}</div>
      <div>{renderCardNo(card.card_no)}</div>
      <div className={classes.cardExpires}>
        {renderExpireDate(card.expire_year, card.expire_month)}
      </div>
    </Grid>
  );

  function renderCardNo(num: string) {
    const splitedNums = splitCardNo(num);
    return (
      <div className={classes.cardNo}>
        <Grid container direction="row">
          {splitedNums.map((val, index) => {
            return (
              <div className={classes.splitedCardNum} key={index}>
                {val}
              </div>
            );
          })}
        </Grid>
      </div>
    );
  }

  function splitCardNo(num: string) {
    let result = [];
    let tmpStringLen = 0;
    let tmpString = "";

    for (var i = 0; i < num.length; ++i) {
      tmpString += num[i];

      if (tmpStringLen === 3) {
        result.push(tmpString);
        tmpString = "";
        tmpStringLen = 0;
      } else {
        tmpStringLen++;
      }
    }
    if (tmpString !== "") {
      result.push(tmpString);
    }

    return result;
  }

  function renderExpireDate(year: number, month: number) {
    if (year !== -1) {
      if (month !== -1) {
        return renderExpireYear(year) + " / " + renderExpireMonth(month);
      } else {
        return renderExpireYear(year);
      }
    } else {
      return "";
    }
  }

  function renderExpireYear(year: number) {
    if (year !== -1) {
      return year.toString().substr(2, 2);
    } else {
      return "";
    }
  }

  function renderExpireMonth(month: number) {
    if (month === 0) {
      return "0";
    } else if (month !== -1) {
      return month < 10 ? "0" + month.toString() : month.toString();
    } else {
      return "";
    }
  }
}

export default Card;
