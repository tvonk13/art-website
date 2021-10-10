import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import CssBaseLine from "@material-ui/core/CssBaseline";

import App from "./App";

const theme = createMuiTheme({ 
  palette: {
    primary: { main: "#272522" },
    secondary: { main: "#E98145" },
    logoColors: {
      orange: "#E98145",
      yellow: "#EBB071"
    },
  },
  typography: {
    fontFamily: "Roboto"
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseLine />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root"),
);