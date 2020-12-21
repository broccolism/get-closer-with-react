import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import React, { useRef, useState, useEffect } from "react";

import EmptyCard from "../components/EmptyCard";
import Card from "../components/Card";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { cards } from "../const/cards";
import { cardWidth } from "../const/cardSize";
import { cookie } from "../App";

const styles = createStyles({
  root: { width: "auto" },
  window: {
    display: "flex",
    width: "70vw",
    overflow: "hidden",
    whiteSpace: "nowrap",
    zindex: "-1",
  },
  cardList: {
    display: "flex",
  },
  arrowIcon: {
    fontSize: "28px",
    cursor: "pointer",
  },
  cardWrapper: {
    display: "inline-block",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
});

interface ComponentProps {
  addCard: any;
}

function CardSlider(props: ComponentProps & WithStyles<typeof styles>) {
  const { classes } = props;
  const [curCardIndex, setCurCardIndex] = useState(0);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const movePrev = () => {
    const resetToVeryBack = curCardIndex === 0;
    const index = resetToVeryBack ? cards.length - 1 : curCardIndex - 1;
    setCurCardIndex(index);
  };

  const moveNext = () => {
    const resetIndex = curCardIndex === cards.length - 1;
    const index = resetIndex ? 0 : curCardIndex + 1;
    setCurCardIndex(index);
  };

  const cardsToShow = cards;

  const handleClickCard = (index: number) => {
    cookie.set("card", cards[index], { path: "/" });
    setSelectedCardIndex(index);
    setCurCardIndex(index);
  };

  const handleClickEmptyCard = () => {
    props.addCard();
    setSelectedCardIndex(0);
    setCurCardIndex(0);
  };

  useEffect(() => {
    const translateAmount = curCardIndex * cardWidth;
    slideRef.current !== null
      ? (slideRef.current.style.transition = "all 0.5s ease-in-out")
      : setCurCardIndex(0);
    slideRef.current !== null
      ? (slideRef.current.style.transform = `translateX(-${translateAmount}px)`)
      : setCurCardIndex(0);
  }, [curCardIndex]);

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      alignItems="center"
      spacing={5}
    >
      <Grid item>
        <ArrowBackIosIcon className={classes.arrowIcon} onClick={movePrev} />
      </Grid>
      <Grid item>
        <div className={classes.window}>
          <div className={classes.cardList} ref={slideRef}>
            {cardsToShow.map((card, index) => {
              return card.empty ? (
                <div className={classes.cardWrapper}>
                  <EmptyCard key={index} onClick={handleClickEmptyCard} />
                </div>
              ) : (
                <div
                  className={classes.cardWrapper}
                  onClick={() => {
                    handleClickCard(index);
                  }}
                >
                  <Card
                    key={index}
                    card={card}
                    isSelected={selectedCardIndex === index}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Grid>
      <Grid item>
        <ArrowForwardIosIcon className={classes.arrowIcon} onClick={moveNext} />
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(CardSlider);
