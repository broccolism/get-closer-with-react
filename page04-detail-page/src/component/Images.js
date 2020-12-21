import React from "react";

import { images } from "../assets/images";
import { phoneMarginHorizontal } from "../consts/width";

import SmartGallery from "react-smart-gallery";
import Image from "material-ui-image";

import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {},
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionPhone: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  phoneBigImage: {
    display: "block",
    overflow: "hidden",
    height: "90vw",
    marginBottom: "10px",
  },
  phoneSmallImageList: {
    marginLeft: `${phoneMarginHorizontal}px`,
  },
  phoneSmallImageWrapper: {
    display: "inline-flex",
    width: "88px",
    height: "68px",
    overflow: "hidden",
    borderRadius: "3px",
    marginRight: "12px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
  },
  phoneSmallImage: {
    width: "128px",
    height: "100px",
    objectFit: "cover",
  },
  desktopImageList: {
    width: "100vw",
    overflow: "hidden",
  },
  wrapper: { height: "100px" },
});
function onSelect(event, src, index) {
  window.open(src);
}

function Images({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.sectionPhone}>
        <div className={classes.phoneBigImage}>
          <Image src={images[0]} cover="true" />
        </div>
        <div className={classes.phoneSmallImageList}>
          {images.map((value, index) => {
            if (index !== 0) {
              return (
                <div key={index} className={classes.phoneSmallImageWrapper}>
                  <img
                    className={classes.phoneSmallImage}
                    key={index}
                    src={value}
                    alt=""
                  />
                </div>
              );
            }
            return;
          })}
        </div>
      </div>
      <div className={classes.sectionDesktop}>
        <div className={classes.desktopImageList}>
          <SmartGallery
            width="100vw"
            height={740}
            images={images}
            onImageSelect={onSelect}
          />
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Images);
