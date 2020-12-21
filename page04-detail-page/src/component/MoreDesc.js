import React from "react";

import Grid from "@material-ui/core/grid";
import Button from "@material-ui/core/Button";

import adPaint from "../assets/ad-paints.png";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import GetAppIcon from "@material-ui/icons/GetApp";

import colors from "../consts/colors";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      width: "280px",
    },
  },
  leftText: {
    fontSize: "14px",
    fontWeight: "700",
  },
  priceWrapper: {
    marginTop: "15px",
  },
  couponSmallText: {
    color: `${colors.gray}`,
    fontSize: "11px",
    fontWeight: "500",
    textAlign: "end",
  },
  installmentPrice: {
    fontSize: "18px",
    fontWeight: "700",
  },
  redText: {
    fontSize: "18px",
    fontWeight: "800",
    color: `${colors.red}`,
  },
  divider: {
    backgroundColor: `${colors.lightGray}`,
    height: "2px",
    marginTop: "15px",
    marginBottom: "15px",
    [theme.breakpoints.up("md")]: {
      height: "1px",
    },
  },
  getCuponButton: {
    width: "calc(100vw - 45px)",
    marginTop: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
    fontSize: "14px",
    fontWeight: "800",
    color: "#fff",
    backgroundColor: `${colors.red}`,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  getIcon: { fontSize: "22px" },
  iconAndTextGrid: { marginTop: "24px" },
  iconAndText: {
    width: "200px",
    height: "10px",
    marginBottom: "8px",
    [theme.breakpoints.up("md")]: {
      width: "auto",
    },
  },
  icon: { fontSize: "18px", display: "inline" },
  text: {
    fontSize: "14px",
    fontWeight: "500",
    display: "inline",
  },
  grayButton: {
    width: "calc((100vw - 80px)/2)",
    backgroundColor: `${colors.lightLightGray}`,
    fontSize: "15px",
    fontWeight: "500",
    [theme.breakpoints.up("md")]: {
      width: "130px",
    },
  },
  ad: {
    width: "calc(100vw - 52px)",
    margin: "15px 0 18px 0",
    backgroundColor: `${colors.lightLightGray}`,
    textAlign: "end",
    border: `2px solid ${colors.lightGray}`,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  adTextWrapper: {
    textAlign: "start",
    margin: "16px 0 12px 22px",
  },
  adTextTop: {
    fontSize: "14px",
    paddingBottom: "4px",
  },
  adTextBottom: {
    fontSize: "14px",
    fontWeight: "500",
    color: `${colors.orange}`,
  },
  adImage: {
    width: "20vw",
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
      width: "auto",
    },
  },
});

function MoreDesc({ classes }) {
  return (
    <div className={classes.root}>
      <Grid
        className={classes.priceWrapper}
        container
        direction="row"
        alignItems="flex-end"
        justify="space-between"
      >
        <div className={classes.leftText}>5개월 할부</div>
        <div>
          <div className={classes.couponSmallText}>쿠폰 적용 시</div>
          <div className={classes.installmentPrice}>
            <span className={classes.redText}>52% </span>월 35,360원
          </div>
        </div>
      </Grid>
      <div className={classes.divider} />
      <Grid
        className={classes.priceWrapper}
        container
        direction="row"
        alignItems="flex-end"
        justify="space-between"
      >
        <div className={classes.leftText}>총 할인액</div>
        <div className={classes.redText}>-192,200원</div>
      </Grid>
      <Button
        className={classes.getCuponButton}
        variant="contained"
        disableElevation
      >
        할인쿠폰 받기&nbsp;
        <GetAppIcon className={classes.getIcon} />
      </Button>
      <div className={classes.divider} />
      <Grid
        className={classes.iconAndTextGrid}
        container
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Grid
          container
          item
          direction="row"
          alignItems="center"
          xs={6}
          className={classes.iconAndText}
        >
          <OndemandVideoIcon className={classes.icon} />
          <div className={classes.text}>&nbsp;&nbsp;콘텐츠 이용권</div>
        </Grid>
        <Grid
          container
          item
          direction="row"
          alignItems="center"
          xs={6}
          className={classes.iconAndText}
        >
          <CardGiftcardIcon className={classes.icon} />
          <div className={classes.text}>&nbsp;&nbsp;준비물 키트</div>
        </Grid>
      </Grid>
      <Grid
        className={classes.iconAndTextGrid}
        container
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Grid
          container
          item
          direction="row"
          alignItems="center"
          xs={6}
          className={classes.iconAndText}
        >
          <PersonOutlineIcon className={classes.icon} />
          <div className={classes.text}>&nbsp;&nbsp;중급자 대상</div>
        </Grid>
        <Grid
          container
          item
          direction="row"
          alignItems="center"
          xs={6}
          className={classes.iconAndText}
        >
          <ThumbUpAltOutlinedIcon className={classes.icon} />
          <div className={classes.text}>&nbsp;&nbsp;강의 만족도 98%</div>
        </Grid>
      </Grid>
      <div className={classes.divider} />
      <Grid container direction="row" justify="space-between">
        <Button
          className={classes.grayButton}
          variant="contained"
          disableElevation
        >
          <FavoriteBorderOutlinedIcon className={classes.icon} />
          &nbsp;&nbsp;7413
        </Button>
        <Button
          className={classes.grayButton}
          variant="contained"
          disableElevation
        >
          <ShareOutlinedIcon className={classes.icon} />
          &nbsp;&nbsp;공유하기
        </Button>
      </Grid>
      <div className={classes.ad}>
        <Grid container direction="row" justify="space-between">
          <div className={classes.adTextWrapper}>
            <div className={classes.adTextTop}>지금 가입하고</div>
            <div className={classes.adTextBottom}>준비물 0원 혜택 받기 ></div>
          </div>
          <img className={classes.adImage} alt="ad" src={adPaint} />
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(MoreDesc);
