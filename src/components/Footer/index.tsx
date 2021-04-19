import { useStyles } from "./Style";
import { IProps } from "./Interface";

const Footer = (props: IProps) => {
  const classes = useStyles(props);
  return <div className={classes.root}></div>;
};

export { Footer };
