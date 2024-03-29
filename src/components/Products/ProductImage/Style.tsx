import { IProps } from "./Interface";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundImage: (props: IProps) => `url(${props.image})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    paddingTop: "56.25%"
  }
}));
