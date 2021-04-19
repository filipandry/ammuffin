import { useStyles } from "./Style";
import { IProps } from "./Interface";
import { Card } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { ProductImage } from "../";
const ProductItem = (props: IProps) => {
  const classes = useStyles(props);

  return (
    <Card className={classes.root}>
      {/* <Skeleton variant="rect" height={200} /> */}
      <ProductImage image={props.item.images[0]} />
      <span className={classes.description}>{props.item.description}</span>
      <span className={classes.code}></span>
      <span className={classes.price}>{props.item.price}</span>
      <Skeleton variant="rect" height={35} />
    </Card>
  );
};

export { ProductItem };
