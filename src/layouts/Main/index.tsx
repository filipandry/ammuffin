import { Header, Footer } from "../../components";
import { IProps } from "./Interface";
import { useStyles } from "./Style";
import { Routes } from "../../pages";
import { Switch, Route } from "react-router-dom";
import { useScrollTrigger } from "@material-ui/core";

const Main = (props: IProps) => {
  const classes = useStyles(props);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80
  });

  return (
    <div className={classes.root}>
      <Header bigger={!trigger} />
      <div className={classes.content}>
        <Switch>
          {Routes.map((item) => (
            <Route path={item.path} exact key={item.id}>
              <item.component />
            </Route>
          ))}
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export { Main };
