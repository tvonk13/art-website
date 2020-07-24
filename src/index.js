import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { HashRouter } from "react-router-dom";
import CssBaseLine from "@material-ui/core/CssBaseline";

import App from "./App";

const theme = createMuiTheme({ 
  palette: {
    primary: { main: "#343434" },
    secondary: { main: "#81CDC6" },
    logoColors: {
      pink: "#FF91B4",
      green: "#81CDC6",
      yellow: "#FFC350",
      purple: "#B073BD"
    },
  },
  typography: {
    fontFamily: "Nunito"
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