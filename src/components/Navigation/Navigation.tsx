import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Link} from 'react-router-dom';
import { ShoppingCart } from "../ShoppingCart";
import Button from '@material-ui/core/Button';
import { Login } from "../Login/Login";
import { Signup } from "../Signup/Signup";
import { connect } from "react-redux";
import Signout from "../Signout/Signout";
import {Home} from "../../pages";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export const Navigation = (props: any) => {
  const classes = useStyles();
  console.log(props);
  // const preventDefault = (event: React.SyntheticEvent) =>
  // event.preventDefault();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            <Link to="/" style={{ fontSize:"0.8em", color: "white", textDecoration: "None" }}>
              {props.loggedIn === true ? `Welcome to Caev ${props.first_name} ${props.last_name}`: 'Caev'
              }
            </Link>
          </Typography>
          <ShoppingCart />
		  <Link to="/browse"style={{ fontSize:"0.8em", color: "white", textDecoration: "None", marginLeft:'40px' }}> <Button color="inherit">BROWSE</Button> </Link>
          {props.loggedIn === true ? (
            <Signout />
          ) : (
            <React.Fragment>
              <Login /> <Signup white={true} />
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
const mapStateToProps = (
  state: any
): { loggedIn: boolean; first_name: string, last_name: string } => {
  return {
    loggedIn: state.userReducer.loggedIn,
    first_name: state.userReducer.first_name,
    last_name: state.userReducer.last_name,
  };
};

export default connect(mapStateToProps, null)(Navigation);
