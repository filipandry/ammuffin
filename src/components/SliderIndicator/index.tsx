import { useStyles } from "./Style";
import { IProps } from "./Interface";
import classNames from "classnames";

export const SliderIndicator = (props: IProps) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      {Array.from({ length: props.length }, (_, index) => (
        <span
          key={index}
          className={classNames(classes.item, {
            [classes.active]: index === props.current
          })}
          onClick={() => props.onChange(index)}
        />
      ))}
    </div>
  );
};
