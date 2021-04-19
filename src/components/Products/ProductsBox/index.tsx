import React, { useEffect } from "react";
import { useStyles } from "./Style";
import { IProps } from "./Interface";
import { Grid } from "@material-ui/core";
import { ProductItem } from "../index";
import { ApplicationState, Store } from "../../../store";
import { connect } from "react-redux";

const Component = (props: IProps) => {
  const classes = useStyles(props);
  useEffect(() => {
    props.requestProductsList();
  }, []);
  return (
    <Grid container spacing={2} className={classes.root}>
      {!props.productsLoading &&
        props.products?.map((item, index) => (
          <Grid item xs={6} md={3} key={index}>
            <ProductItem item={item} />
          </Grid>
        ))}
    </Grid>
  );
};
const ProductsBox = connect(
  (state: ApplicationState) => state.store,
  Store.actionsCreator
)(Component as any);
export { ProductsBox };
