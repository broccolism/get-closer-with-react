import "./App.css";

import { minDesktopBreakPoint } from "./utils/BreakPoint";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import DetailPage from "./component/DetailPage";

export const theme = createMuiTheme({
  values: { md: minDesktopBreakPoint },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <DetailPage />
    </MuiThemeProvider>
  );
}

export default App;
