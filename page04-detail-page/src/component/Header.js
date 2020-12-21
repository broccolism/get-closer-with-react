import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";

import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  sectionDesktop: {
    width: "80vw",
    verticalAlign: "middle",
    backgroundColor: "white",
    marginTop: "16px",
    marginBottom: "16px",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionPhone: {
    display: "block",
    verticalAlign: "middle",
    backgroundColor: "white",
    marginTop: "8px",
    marginBottom: "8px",

    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  rootGridDesktop: {
    width: "auto",
    paddingLeft: "10px",
    [theme.breakpoints.up("md")]: {
      paddingLeft: "10vw",
    },
  },
  rootGridPhone: {
    display: "inline-flex",
    width: "auto",
  },
  textButtons: {
    width: "auto",
    fontSize: "15px",
  },
  logoDesktop: {
    fontSize: "24px",
    display: "inline-block",
    fontFamily: "Montserrat",
  },
  logoPhone: {
    fontSize: "16px",
    display: "inline-block",
    fontFamily: "Montserrat",
    marginLeft: "6px",
    marginRight: "4px",
  },
  searchWrapperDesktop: {
    display: "inline-flex",
    backgroundColor: "#fff",
    boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.15)",
    borderRadius: "2px",
    padding: "4px 8px 4px 0px",
    alignItems: "center",

    width: "400px",
    marginLeft: "30px",
  },
  searchWrapperPhone: {
    display: "inline-flex",
    width: "calc(100vw - 250px)",
    backgroundColor: "#fff",
    boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.15)",
    borderRadius: "2px",
    padding: "4px 8px 4px 0px",
    alignItems: "center",
  },
  searchBaseDesktop: {
    width: "90%",
  },
  searchBasePhone: {
    width: "90%",
  },
  searchInput: {
    color: "#000",
    fontSize: "14px",
    margin: "2px 0 0 16px",
  },
  searchIconWrapper: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchIcon: {
    fontSize: "24px",
    position: "absolute",
    right: 180,
    [theme.breakpoints.up("md")]: {
      position: "relative",
      right: 0,
    },
  },
  textCreateDesktop: {
    marginRight: "1vw",
  },
  textsPhone: {
    position: "absolute",
    right: "1vw",
  },
  textCreatePhone: {
    fontSize: "14px",
    marginRight: "6px",
    marginLeft: "6px",
  },
  textLoginPhone: {
    fontSize: "14px",
  },
});

function Header({ classes }) {
  return (
    <div>
      <div className={classes.sectionDesktop}>
        <Grid
          xs={12}
          item
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.rootGridDesktop}
        >
          <Grid
            xs={9}
            item
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            className={classes.logoAndSearchBar}
          >
            <Typography className={classes.logoDesktop}>FAKE1O1</Typography>
            <div className={classes.searchWrapperDesktop}>
              <InputBase
                classes={{
                  root: classes.searchBaseDesktop,
                  input: classes.searchInput,
                }}
                placeholder="배우고 싶은 것이 있나요?"
              />
              <div className={classes.searchIconWrapper}>
                <SearchIcon className={classes.searchIcon} />
              </div>
            </div>
          </Grid>
          <Grid
            xs={3}
            item
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            className={classes.textButtons}
          >
            <span className={classes.textCreateDesktop}>크리에이터 지원</span>
            <span>로그인</span>
          </Grid>
        </Grid>
      </div>
      <div className={classes.sectionPhone}>
        <Typography className={classes.logoPhone}>FAKE1O1</Typography>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-evenly"
          className={classes.rootGridPhone}
        >
          <Grid item className={classes.searchWrapperPhone}>
            <InputBase
              classes={{
                root: classes.searchBasePhone,
                input: classes.searchInput,
              }}
              placeholder="검색"
            />
            <div className={classes.searchIconWrapper}>
              <SearchIcon className={classes.searchIcon} />
            </div>
          </Grid>
          <div className={classes.textsPhone}>
            <span className={classes.textCreatePhone}>크리에이터 지원</span>
            <span className={classes.textLoginPhone}>로그인</span>
          </div>
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(Header);
