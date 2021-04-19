import { IProps } from "./Interface";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: 20,
    left: "50%",
    transform: "translateX(-50%)"
  },
  item: {
    width: 15,
    height: 15,
    display: "inline-block",
    padding: 5,
    margin: 5,
    background: theme.palette.secondary.main,
    borderRadius: "50%",
    cursor: "pointer",
    userSelect: "none"
  },
  active: {
    background: theme.palette.primary.main
  }
}));

export { useStyles };
