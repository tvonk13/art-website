import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { HashRouter } from "react-router-dom";
import CssBaseLine from "@material-ui/core/CssBaseline";

import App from "./App";

const theme = createMuiTheme({ 
  palette: {
    primary: { main: "#343434" },
    secondary: { main: "#22B8B5" },
    logoColors: {
      pink: "#FF789E",
      green: "#22B8B5",
      yellow: "#FFC141",
      purple: "#894797"
    },
  },
  typography: {
    fontFamily: "Roboto"
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseLine />
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeProvider>,
  document.getElementById("root"),
);