import React from 'react';
import { Navigation } from '../../components';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import LoginInput from "./LoginInput/LoginInput";
import Typography from "@material-ui/core/Typography";

function getModalStyle() {
  const top = 25;
  return {
    top: `${top}%`,
    margin: "auto"
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    borderRadius: 0,
    padding: theme.spacing(2, 4, 4)
  },
  buttonMargin: {
    marginRight: theme.spacing(7),
    marginLeft: theme.spacing(7),
    marginTop: 0,
    marginBottom: 0
  }
}));

export const Login = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  return (
    <React.Fragment>
      <Navigation />
      <div style={{ display: 'flex', justifyContent: 'center', top: '120px', position: 'relative' }}>
        <Paper style={modalStyle} className={classes.paper}>
          <Typography
            variant="h4"
            align="center"

            component="h4"
            id="simple-modal-title"
          >
            Login
          </Typography>
          <div
            style={{
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              marginTop: "10px",
              marginBottom: "10px"
            }}
          />
          <LoginInput name="email" type="email" />
          <LoginInput name="password" type="password" />
          <Button
            variant="contained"
            color="primary"
            style={{ display: "block", margin: "10px", width: "100%" }}
          >
            Login123
          </Button>
          <Typography align="center" variant="body1" component="p">
            Forgot password???123
          </Typography>
          <div
            style={{
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              marginTop: "10px",
              marginBottom: "10px"
            }}
          />
          <Typography align="left" variant="body1" component="p">
            Sign up and find your next meal
          </Typography>
        </Paper>
      </div>
    </React.Fragment>
  )
}