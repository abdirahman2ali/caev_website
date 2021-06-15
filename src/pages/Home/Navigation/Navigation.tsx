import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import classes from "./styles.module.scss";
import { Link } from "react-router-dom";
import { Login } from "../../../components/Login/Login";
import { Signup } from "../../../components/Signup/Signup";
import Signout from "../../../components/Signout/Signout";
import { connect } from "react-redux";

type NavigationProps = {
  isTop: boolean;
  loggedIn?: boolean;
  first_name?: string;
  last_name?: string;
};
/**
 * General component for user navigation
 */
const Navigation = (props: NavigationProps) => {
  const navbarClass = props.isTop
    ? classes.navbarTransparent
    : classes.navbarRed;
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={navbarClass}
        elevation={0}
        id="navbar"
      >
        <Toolbar>
          <Typography
            className={classes.title}
            align="left"
            variant="h4"
            noWrap
          >
            {props.loggedIn === false ? (
              <div style={{ fontSize: "0.8em" }}>Caev</div>
            ) : (
              <div style={{ fontSize: "0.8em" }}>
                Welcome to Caev {props.first_name} {props.last_name}
              </div>
            )}
          </Typography>
          <Link className={classes.link} to="/browse">
            <Button className={classes.link} color="inherit">
              Browse
            </Button>
          </Link>
          {props.loggedIn === false ? (
            <React.Fragment>
              <Login /> <Signup white={!props.isTop} />
            </React.Fragment>
          ) : (
            <Signout />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (
  state: any
): { loggedIn: boolean; first_name: string , last_name: string} => {
  return {
    loggedIn: state.userReducer.loggedIn,
    first_name: state.userReducer.first_name,
    last_name: state.userReducer.last_name,
  };
};

export default connect(mapStateToProps, null)(Navigation);
