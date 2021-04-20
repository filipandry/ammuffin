import { IProps } from "./Interface";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center"
  },
  logo: {
    height: (props: IProps) => (props.bigger ? 180 : 60),
    padding: (props: IProps) => (props.bigger ? 10 : 2),
    transition: "all .2s linear"
  },
  spacer: {
    height: 160
  },
  left: {
    flexGrow: 1
  },
  center: {},
  right: {
    flexGrow: 1
  }
}));
