import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";

import { Link as Scroll } from "react-scroll";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.4)",

    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/header_image.jpg"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundColor: "#000",
    backgroundSize: "contain",
    backgroundPosition: "center",
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "cover",
      backgroundPosition: "-1300px -600px",
    },
  },
  coloredText: {
    color: "#FC9424",
  },
  titleWrapper: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontFamily: "Nunito",
    fontSize: "2.5rem",
  },
  buttonDesc: {
    padding: "30px 0px -30px",
    color: "rgba(256, 256, 256, 0.5)",
    fontFamily: "Nunito",
  },
  goDown: {
    color: "#FC9424",
    fontSize: "3rem",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  });
  return (
    <div className={classes.root} id="header">
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1500 } : {})}
        collapsedHeight={10}
      >
        <div className={classes.titleWrapper}>
          <h1 className={classes.title}>
            Welcome to <br /> Pretzel
            <span className={classes.coloredText}>Friends</span>.
          </h1>
          <Scroll to="user" smooth={true}>
            <div className={classes.buttonDesc}>quick scroll</div>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
