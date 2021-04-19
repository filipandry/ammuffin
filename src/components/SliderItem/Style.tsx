import { IProps } from "./Interface";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: (props: IProps) => `url(${props.item})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    //paddingTop: "56.25%"
    paddingTop: "80vh"
  }
}));

export { useStyles };
