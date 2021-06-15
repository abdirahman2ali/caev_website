import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import LoginInput from "../Login/LoginInput/LoginInput";
import { Signup } from "../Signup/Signup";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { resolveUser } from "../../actions/login/loginActions";
import axios from "axios";
import {Link} from 'react-router-dom';
function getModalStyle() {
  const top = 25;
  return {
    top: `${top}%`,
    margin: "auto",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    borderRadius: 0,
    border: "1px solid rgba(0,0,0,0.5)",
    padding: theme.spacing(2, 4, 4),
  },
  buttonMargin: {
    marginRight: theme.spacing(7),
    marginLeft: theme.spacing(7),
    marginTop: 0,
    marginBottom: 0,
  },
}));

export const LoginComponent: React.FC = (props: any) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [invalid, setInvalid] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const emailChangeHandler = (event: Event) => {
    //@ts-ignore
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event: Event) => {
    //@ts-ignore
    setPassword(event.target.value);
  };

  const Login = (email: string, password: string) => {
    return axios
      .post("https://caevapi.com/api/customer/login", {
        email: email,
        password: password,
      })
      .then((response: any) => {
	console.log(response);
	const token = response.data.token;
        localStorage.setItem("caev-token", token);
	window.location.reload(false);

	//setInvalid(false);

      })
      .catch((error: any) => {
        console.log(error);
        setInvalid(true);
      });
  };

  return (
    <div>
      <Button
        className={classes.buttonMargin}
        onClick={handleOpen}
        color="inherit"
      >
        Login
      </Button>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
              marginBottom: "10px",
            }}
          />
          {invalid === true ? (
            <p style={{ textAlign: "center", color: "red" }}>
              You have entered an invalid username or password.
            </p>
          ) : null}
          <LoginInput
            name="email"
            type="email"
            text={email}
            setText={emailChangeHandler}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ display: "block", margin: "10px", width: "100%" }}
            onClick={() => Login(email, password)}
          >
            Login
          </Button>
          <Link className = "forgotPassword" to="/forgot">Forgot Password?</Link>
          <div
            style={{
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          />
          <Typography align="left" variant="body1" component="p">
            <Signup white={true} />
          </Typography>
        </Paper>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state: any): { invalidLogin: boolean } => {
  return {
    invalidLogin: state.userReducer.invalidLogin,
  };
};

export const Login = connect(mapStateToProps, { resolveUser })(LoginComponent);
