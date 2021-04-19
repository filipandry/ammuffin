import { useStyles } from "./Style";
import { IProps } from "./Interface";
import { AppBar, Toolbar } from "@material-ui/core";
import Logo from "../../assets/images/LOGO.png";

const Header = (props: IProps) => {
  const classes = useStyles(props);
  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.root}>
        <Toolbar>
          <div className={classes.left} />
          <div className={classes.center}>
            <img className={classes.logo} src={Logo} alt="logo" />
          </div>
          <div className={classes.right} />
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.spacer} />
    </>
  );
};

export { Header };
