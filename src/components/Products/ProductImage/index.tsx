import { useStyles } from "./Style";
import { IProps } from "./Interface";

export const ProductImage = (props: IProps) => {
  const classes = useStyles(props);
  return <div className={classes.root}></div>;
};
