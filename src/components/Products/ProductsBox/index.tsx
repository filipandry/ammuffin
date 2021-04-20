import React, { useEffect } from "react";
import { useStyles } from "./Style";
import { IProps } from "./Interface";
import { Grid } from "@material-ui/core";
import { ProductItem } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../../store";
import { requestTopProductsList } from "../../../store/Store";

export const ProductsBox = (props: IProps) => {
  const classes = useStyles(props);

  const { products, productsLoading } = useSelector(
    (state: ApplicationState) => state.store
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestTopProductsList(8));
  }, []);
  return (
    <Grid container spacing={2} className={classes.root}>
      {!productsLoading &&
        products?.map((item, index) => (
          <Grid item xs={6} md={3} key={index}>
            <ProductItem item={item} />
          </Grid>
        ))}
    </Grid>
  );
};
