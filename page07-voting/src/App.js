import HorizBarThemeVoting from "./theme/HorizBarThemeVoting";
import CircleThemeVoting from "./theme/CircleThemeVoting";
import { withStyles } from "@material-ui/core";

const style = (theme) => ({
  block: {
    width: "auto",
    height: "90vh",
    padding: "20px",
    border: "1px solid #888",
    fontFamily: "Noto Sans KR",
  },
});

function App({ classes }) {
  return (
    <div>
      <div className={classes.block}>
        <h1> 01. HorizBar Theme Voting</h1>
        <HorizBarThemeVoting />
      </div>
      <div>
        <div className={classes.block}>
          <h1> 02. Circle Theme Voting</h1>
          <CircleThemeVoting />
        </div>
      </div>
    </div>
  );
}

export const prices = ["240,000원", "237,000원", "228,000원", "210,000원"];

export default withStyles(style)(App);
