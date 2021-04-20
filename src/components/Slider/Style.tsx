import { IProps } from "./Interface";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative"
  },
  buttonLeft: {
    position: "absolute",
    top: "50%",
    left: 0,
    transform: "translateY(-50%)"
  },
  buttonRight: {
    position: "absolute",
    top: "50%",
    right: 0,
    transform: "translateY(-50%)"
  }
}));
