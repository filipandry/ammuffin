import { IProps } from "./Interface";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    position: "relative"
  },
  inline: {
    display: "inline-block"
  },
  image: {
    width: "100%",
    maxHeight: "30%",
    padding: 20
  },
  description: {
    display: "inline-block",
    width: "100%"
  },
  code: {
    display: "inline-block",
    width: "50%"
  },
  price: {
    display: "inline-block",
    width: "50%",
    textAlign: "right"
  }
}));

export { useStyles };
