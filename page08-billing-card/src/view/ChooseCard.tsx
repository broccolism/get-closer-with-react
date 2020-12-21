import React, { useState } from "react";

import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import CardSlider from "../components/CardSlider";
import AddCard from "../view/AddCard";
import { withStyles, Theme, StyleRules } from "@material-ui/core";

import * as id from "../const/elementIds";

const styles = (theme: Theme): StyleRules => ({
  root: { margin: 0, padding: theme.spacing(2), textAlign: "center" },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

interface DialogProps {
  id: string;
  children: any;
  classes: any;
  onClose: any;
}

const DialogTitle = withStyles(styles)((props: DialogProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(6),
    fontFamily: "Noto Sans KR",
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: { margin: 0, padding: theme.spacing(1) },
}))(MuiDialogActions);

function ChooseCard() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickAddButton = () => {
    const alias = document.getElementById(id.addCardAliasId)?.innerText;
    const cardNo = document.getElementById(id.addCardNoId)?.innerText;
    const expireYear = document.getElementById(id.addCardExpireYearId)
      ?.innerText;
    const expireMonth = document.getElementById(id.addCardExpireMonthId)
      ?.innerText;
    const cardPw = document.getElementById(id.addCardPwId)?.innerText;
    const cvcNo = document.getElementById(id.addCardCvcId)?.innerText;

    const newCard = {
      alias: alias,
      card_no: cardNo,
      cvcNumber: cvcNo,
      card_pw: cardPw,
      expire_year: expireYear,
      expire_month: expireMonth,
    };

    console.log(newCard);
  };

  return (
    <div style={{ width: "100vw", textAlign: "center" }}>
      <CardSlider addCard={handleClickOpen} />

      <Dialog
        onClose={handleClose}
        aria-labelledby="add-card-dialog-title"
        open={open}
        fullWidth
        maxWidth="md"
      >
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <DialogTitle id="add-card-dialog-title" onClose={handleClose}>
            카드 추가하기
          </DialogTitle>
          <DialogContent>
            <AddCard setOpen={setOpen} />
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}

export default ChooseCard;
