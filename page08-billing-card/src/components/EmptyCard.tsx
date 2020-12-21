import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import React from "react";

import Grid from "@material-ui/core/Grid";
import AddBoxIcon from "@material-ui/icons/AddBox";

import { cardWidth, cardHeight } from "../const/cardSize";

const styles = createStyles({
  root: {
    display: "inline-block",
    width: `${cardWidth}px`,
    height: `${cardHeight}px`,
    backgroundColor: "#ededed",
    borderRadius: "16px",
    cursor: "pointer",
  },
  addText: {
    fontSize: "18px",
    color: "#555",
  },
  addIcon: {
    marginTop: "70px",
    marginBottom: "10px",
    fontSize: "60px",
    color: "#aaa",
  },
});

interface ComponentProps {
  onClick: any;
}

function EmptyCard(props: ComponentProps & WithStyles<typeof styles>) {
  const { classes } = props;

  return (
    <div onClick={props.onClick}>
      <Grid
        container
        direction="column"
        className={classes.root}
        alignItems="center"
      >
        <AddBoxIcon className={classes.addIcon} />
        <div className={classes.addText}>카드 추가하기</div>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(EmptyCard);
