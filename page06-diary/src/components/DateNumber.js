import React from "react";
import { makeStyles } from "@material-ui/core";
import styled, { keyframes } from "styled-components";

const useStyles = makeStyles((theme) => ({
  dateText: {
    fontSize: (props) => props.fontSize || "100px",
    fontWeight: (props) => props.fontWeight || "400",
    color: "#fff",

    "&:hover": {
      animation: `$scaleEffect 300ms ${theme.transitions.easing.easeInOut}`,
      fontSize: "200px",
    },
  },
  "@keyframes scaleEffect": {
    from: {
      transform: "scale(0.5)",
    },
    to: {
      transform: "scale(1)",
    },
  },
}));

const MovingText = styled.div`
  animation: ${(props) => translateEffect(props.direction)} 8s;
  animation-iteration-count: infinite;
`;

const translateEffect = (props) => keyframes`
0%{
  transform: translate(0px, 0px);
}
30%{
  transform: translate(${props.x}px, ${props.y}px);
}
100%{
  transform: translate(0px, 0px);
}
`;

function DateNumber({ date, direction, fontStyle }) {
  const classes = useStyles(fontStyle);
  return (
    <MovingText
      className={classes.dateText}
      direction={direction}
      fontStyle={fontStyle}
      color="#fff"
    >
      {date}
    </MovingText>
  );
}

export default DateNumber;
