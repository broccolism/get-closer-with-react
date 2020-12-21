import React, { useState, useEffect, useRef } from "react";

import MenuItem from "./MenuItem";

import menus from "../consts/menuItems";
import colors from "../consts/colors";
import { phoneMarginHorizontal, desktopWidth } from "../consts/width";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  sectionPhone: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      width: desktopWidth,
      display: "flex",
    },
  },
  defaultPhone: {
    width: "100vw",
    backgroundColor: "#fff",
    paddingLeft: `${phoneMarginHorizontal}px`,
    borderBottom: `2px solid ${colors.lightGray}`,
  },
  fixedPhone: {
    width: "100vw",
    position: "fixed",
    top: 1,
    backgroundColor: "#fff",
    paddingLeft: `${phoneMarginHorizontal}px`,
    borderBottom: `2px solid ${colors.lightGray}`,
    zIndex: 1,
  },
  defaultDesktop: {
    width: desktopWidth,
    backgroundColor: "#fff",
    borderBottom: `2px solid ${colors.lightGray}`,
  },
  fixedDesktop: {
    width: desktopWidth,
    position: "fixed",
    paddingRight: "26px",
    top: 1,
    backgroundColor: "#fff",
    borderBottom: `2px solid ${colors.lightGray}`,
    zIndex: 1,
  },
});

function Menu({ paddingSetter, classes }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fixed, setFixed] = useState(false);
  const [oldYOffset, setOldYOffset] = useState(0);
  const [menuTopPosition, setTopPosition] = useState(-1);
  const documentRef = useRef(document);

  const handleScroll = () => {
    const { pageYOffset } = window;
    var curMenuTopPosition = document.getElementById("Menu").offsetTop;
    const compare =
      menuTopPosition !== -1 ? menuTopPosition : curMenuTopPosition;
    const fixed = compare <= pageYOffset ? true : false;

    setFixed(fixed);
    setOldYOffset(pageYOffset);

    if (menuTopPosition === -1) {
      setTopPosition(curMenuTopPosition);
    }

    var menuHeight = document.getElementById("Menu").clientHeight;
    fixed ? paddingSetter(menuHeight + "px") : paddingSetter("0px");
    var menu0TopPosition = document.getElementById(`${menus[0].id}`).offsetTop;
    var menu1TopPosition = document.getElementById(`${menus[1].id}`).offsetTop;
    var menu2TopPosition = document.getElementById(`${menus[2].id}`).offsetTop;
    var menu3TopPosition = document.getElementById(`${menus[3].id}`).offsetTop;
    var menu4TopPosition = document.getElementById(`${menus[4].id}`).offsetTop;
    var menu5TopPosition = document.getElementById(`${menus[5].id}`).offsetTop;
    var menu6TopPosition = document.getElementById(`${menus[6].id}`).offsetTop;

    const compareMe = pageYOffset + menuHeight;

    if (compareMe > menu0TopPosition && compareMe < menu1TopPosition) {
      setSelectedIndex(0);
    } else if (compareMe > menu1TopPosition && compareMe < menu2TopPosition) {
      setSelectedIndex(1);
    } else if (compareMe > menu2TopPosition && compareMe < menu3TopPosition) {
      setSelectedIndex(2);
    } else if (compareMe > menu3TopPosition && compareMe < menu4TopPosition) {
      setSelectedIndex(3);
    } else if (compareMe > menu4TopPosition && compareMe < menu5TopPosition) {
      setSelectedIndex(4);
    } else if (compareMe > menu5TopPosition && compareMe < menu6TopPosition) {
      setSelectedIndex(5);
    } else if (compareMe > menu6TopPosition) {
      setSelectedIndex(6);
    }
  };

  useEffect(() => {
    documentRef.current.addEventListener("scroll", handleScroll);
    return () =>
      documentRef.current.removeEventListener("scroll", handleScroll);
  }, [oldYOffset]);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div id="Menu">
      <div className={classes.sectionPhone}>
        <div className={fixed ? classes.fixedPhone : classes.defaultPhone}>
          {menus.map((menu, index) => {
            return (
              <MenuItem
                id={index}
                index={menu.index}
                isSelected={selectedIndex === menu.index}
                onClick={handleClick.bind(this, menu.index)}
              ></MenuItem>
            );
          })}
        </div>
      </div>
      <div className={classes.sectionDesktop}>
        <div className={fixed ? classes.fixedDesktop : classes.defaultDesktop}>
          {menus.map((menu, index) => {
            return (
              <MenuItem
                id={index}
                index={menu.index}
                isSelected={selectedIndex === menu.index}
                onClick={handleClick.bind(this, menu.index)}
              ></MenuItem>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Menu);
