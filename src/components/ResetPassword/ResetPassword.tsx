import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import ResetInput from "./input/resetpasswordinput"
import { Navigation } from '../../components';
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import LoginInput from "../Login/LoginInput/LoginInput";
import { reset } from "../../actions/resetpassword/resetPasswordActions";


function getModalStyle() {
  const top = 25;
  const left = 35;
  return {
    top: `${top}%`,
    left: `${left}%`,
    margin: "auto",
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    borderRadius: 0,
    border: "0.5px solid rgba(0,0,0,0.5)",
    padding: theme.spacing(2, 4, 4),
    justifyContent: "space-between"
  },
  buttonMargin: {
    marginRight: theme.spacing(7),
    marginLeft: theme.spacing(7),
    marginTop: 0,
    marginBottom: 0,
  },
}));

export const ResetComponent: React.FC = (props: any) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [email, setEmail] = React.useState("");
    const [resetCode, setResetCode] = React.useState("");
    const [password, setPassword] = React.useState("");

    const emailChangeHandler = (event: Event) => {
        //@ts-ignore
        setEmail(event.target.value);
      };

    const resetCodeChangeHandler = (event: Event) => {
        //@ts-ignore
        setResetCode(event.target.value);
      };

      const passwordChangeHandler = (event: Event) => {
        //@ts-ignore
        setPassword(event.target.value);
      };

      return ( 
        <React.Fragment>
          <Paper style={modalStyle} className={classes.paper}>
            <p>Reset Password</p>
             <LoginInput
            name="email"
            type="email"
            text={email}
            setText={emailChangeHandler}
          />
        <LoginInput
            name="code"
            type="int"
            text={resetCode}
            setText={emailChangeHandler}
          />
          <LoginInput
            name="password"
            type="password"
            text={resetCode}
            setText={passwordChangeHandler}
          />
          <Button
            className={classes.buttonMargin}
            variant="contained"
            color="primary"
            style={{ display: "block", margin: "10px", width: "100%" }}
            onClick={() => reset(email, resetCode, password)}
          >
            Reset
          </Button>
          </Paper>
        </React.Fragment>
    )

}


  export const Login = connect(null, { reset })(ResetComponent);