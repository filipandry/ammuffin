import React from "react";
import { Main } from "./layouts";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { theme } from "./contexts/theme";
import { Provider } from "react-redux";

import { store } from "./store/configureStore";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Main />
        </Router>
      </Provider>
    </ThemeProvider>
  );
}
