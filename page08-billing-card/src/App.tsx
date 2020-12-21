import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import { Cookies } from "react-cookie";

import ChooseCard from "./view/ChooseCard";
import PayButton from "./components/PayButton";

export const cookie = new Cookies();

const styles = createStyles({
  root: {
    textAlign: "center",
    fontFamily: "Noto Sans KR",
  },
});

interface ComponentProps {}

function App(props: ComponentProps & WithStyles<typeof styles>) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <h1>🃏카드 선택 화면🃏</h1>
      <ChooseCard />
      <PayButton />
    </div>
  );
}

export default withStyles(styles)(App);
