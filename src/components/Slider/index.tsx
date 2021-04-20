import React, { useState } from "react";
import { useStyles } from "./Style";
import { IProps } from "./Interface";
import { Grid, IconButton } from "@material-ui/core";
import { SliderItem, SliderIndicator } from "../index";

export const Slider = (props: IProps) => {
  const classes = useStyles(props);
  const [currentItem, setCurrentItem] = useState<number>(0);

  const onIndicatorChange = (index: number) => {
    setCurrentItem(index);
  };
  const onPreviousClick = () => {
    if (props.items.length === 0) {
      return;
    }
    if (currentItem === 0) {
      setCurrentItem(props.items.length - 1);
    } else {
      setCurrentItem(currentItem - 1);
    }
  };
  const onNextClick = () => {
    if (props.items.length === 0) {
      return;
    }
    if (currentItem === props.items.length - 1) {
      setCurrentItem(0);
    } else {
      setCurrentItem(currentItem + 1);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} className={classes.root}>
        <IconButton
          color="primary"
          className={classes.buttonLeft}
          onClick={onPreviousClick}
        >
          P
        </IconButton>
        {props.items.length > 0 && props.items.length >= currentItem + 1 && (
          <SliderItem item={props.items[currentItem]} />
        )}
        <IconButton
          color="primary"
          className={classes.buttonRight}
          onClick={onNextClick}
        >
          N
        </IconButton>
        <SliderIndicator
          onChange={onIndicatorChange}
          length={props.items.length}
          current={currentItem}
        />
      </Grid>
    </Grid>
  );
};
