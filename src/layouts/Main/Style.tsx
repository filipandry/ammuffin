import { IProps } from "./Interface";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  "@global": {
    body: {
      margin: 0,
      padding: 0,
      overflowX: "hidden"
    },
    "*": {
      boxSizing: "border-box"
    }
  },
  root: {},
  content: {
    //offset: theme.mixins.toolbar
    //offset: 80
  }
}));

export { useStyles };
