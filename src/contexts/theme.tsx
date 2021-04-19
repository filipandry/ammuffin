import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#C80000"
    },
    secondary: {
      main: "#283D3B"
    },
    error: {
      main: "#F1AB86"
    },
    background: {
      default: "#E5F9E0"
    }
  },
  props: {
    MuiPaper: {
      square: true
    }
  },
  overrides: {
    MuiPaper: {}
  }
});

export { theme };
