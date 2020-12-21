import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "float",
    backgroundColor: "#000",

    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  content: {
    width: "100vw",
    padding: "4rem 20vw 4rem 20vw",
    color: "#aaa",
    fontFamily: "Nunito",
    fontSize: "1rem",
    lineHeight: "160%",
    display: "inline-block",
  },
  coloredText: {
    color: "#FC9424",
    fontSize: "1.5rem",
    fontWeight: "bold",
    letterSpacing: "-1px",
  },
  boldText: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#eee",
  },
  link: {
    color: "#eee",
  },
}));

export default function AboutPretzel() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="about">
      <div className={classes.content}>
        <span className={classes.coloredText}>Pretzel </span>
        <span className={classes.boldText}>was created by </span>
        Pretzel Global Connection Group Co., Ltd., a corporation founded by
        alumni of Hanyang University under the Global Campus Community App.
        Pretzel is a campus community that mediates information exchange and
        communication among global university students by theme and advocates a
        portal for recommending personalized content.
        <br />
        <br />
        This website is made by one of those engineers who developed the app,
        just for practice to get famillier with using React library. It shows
        Pretzel's users mostly based on their friends. The basic design idea and
        implementation of this website was from here:
        <br />
        <Link
          className="link"
          href="https://www.youtube.com/watch?v=rK0Lz8x7npA&t=2s"
          target="_blank"
          color="inherit"
          underline="always"
        >
          https://www.youtube.com/watch?v=rK0Lz8x7npA&t=2s
        </Link>
        .
      </div>
    </div>
  );
}
