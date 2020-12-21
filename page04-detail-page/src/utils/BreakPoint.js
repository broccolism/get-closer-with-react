import React from "react";
import MediaQuery from "react-responsive";

const breakpoints = {
  desktop: "(min-width: 1086px)",
  phone: "(max-width: 1085px)",
};

export const minDesktopBreakPoint = 1086;

export default function Breakpoint(props) {
  const { name, children } = props;
  const breakpoint = breakpoints[name] || breakpoints.desktop;
  return (
    <MediaQuery {...props} query={breakpoint}>
      {children}
    </MediaQuery>
  );
}
