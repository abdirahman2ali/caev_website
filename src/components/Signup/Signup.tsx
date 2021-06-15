import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LoginInput from "./SignupInput/LoginInput";
import {Modal, Paper, Button, Typography, Tooltip} from '@material-ui/core';

import "date-fns";
import styles from "./Signup.module.scss";
import axios from "axios";

function getModalStyle() {
  const top = 5;
  return {
    top: `${top}%`,
    margin: "auto",
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 1000,
    borderRadius: 0,
    border: "1px solid rgba(0,0,0,0.5)",
    padding: theme.spacing(2, 4, 4),
  },
  buttonMargin: {
    marginRight: theme.spacing(7),
    marginTop: 0,
    marginBottom: 0,
  },
  capitalToggle: {
    color: 'black'
  },
  numberToggle: {
    color: 'black'
  },
  charToggle: {
    color: 'black'
  },
  passwordVerified: {
    color: 'green'
  },
}));

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 12,
  },
}))(Tooltip);

type SignupProps = {
  white: boolean;
};
export const Signup = (props: any) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [registered, setRegister] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [city, setCity] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [invalidRegistration, setInvalidRegistration] = React.useState(false);
  const [validRegistration, setvalidRegistration] = React.useState(false);
  const emailChangeHandler = (event: Event) => {
    //@ts-ignore
    setEmail(event.target.value);
  };
  const firstNameChangeHandler = (event: Event) => {
    //@ts-ignore
    setFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event: Event) => {
    //@ts-ignore
    setLastName(event.target.value);
  };

  const passwordChangeHandler = (event: Event) => {
    //@ts-ignore
    var password = event.target.value;
    setPassword(password);
    var hasCapital = /[A-Z]/.test(password);
    var hasNumber = /[0-9]/.test(password);
    var length = password.length;

    if (hasCapital === true) {
      let capital = document.getElementById('capitalToggle')
      if(capital) capital.classList.add(classes.passwordVerified)   
    }
    if (hasCapital === false) {
      let capital = document.getElementById('capitalToggle')
      if(capital) capital.classList.remove(classes.passwordVerified)   
    }

    if (hasNumber === true) {
      let number = document.getElementById('numberToggle')
      if(number) number.classList.add(classes.passwordVerified)   
    }
    if (hasNumber === false) {
      let number = document.getElementById('numberToggle')
      if(number) number.classList.remove(classes.passwordVerified)   
    }

    if (length >= 8) {
      let char = document.getElementById('charToggle')
      if(char) char.classList.add(classes.passwordVerified)   
    }
    if (length < 8) {
      let char = document.getElementById('charToggle')
      if(char) char.classList.remove(classes.passwordVerified)   
    }
  };

  const password2ChangeHandler = (event: Event) => {
    //@ts-ignore
    setPassword2(event.target.value);
  };
  const phoneNumberChangeHandler = (event: Event) => {
    //@ts-ignore
    setPhoneNumber(event.target.value);
  };
  const cityChangeHandler = (event: Event) => {
    //@ts-ignore
    setCity(event.target.value);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setRegister(false);
  };

  const register = (
    email: string,
    firstname: string,
    lastname: string,
    phonenumber: string,
    password: string,
    password2: string,
    city: string
  ) => {
    console.log(email);
    const data: any = {
      first_name: firstname,
      last_name: lastname,
      email: email,
      phone_number: phonenumber,
      password: password,
      phonenumber: phonenumber,
      city: city,
      signup_date: new Date(),
      customer_type: "customer",
    };

    axios
      .post("https://caevapi.com/api/customer/", data)
      .then((response: any) => {
        console.log(response);
        setInvalidRegistration(false);
        setvalidRegistration(true);
      })
      .catch((error: any) => {
        console.log(error);
        setInvalidRegistration(true);
        setvalidRegistration(false);
      });
  };

  return (
    <div>
      <Button
        variant={props.white ? "outlined" : "contained"}
        color={props.white ? "inherit" : "primary"}
        className={classes.buttonMargin}
        onClick={handleOpen}
      >
        Sign up
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
          {registered === false ? (
            <div>
              {" "}
              <Typography
                variant="h4"
                align="center"
                component="h4"
                id="simple-modal-title"
              >
                Sign up
              </Typography>
              <p>
                {" "}
                {invalidRegistration === false ? null : `An Error has occured`}
                {validRegistration === false
                  ? null
                  : `You have successfuly made an account!`}
              </p>
              <div
                style={{
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              />
              <form>
              <div className={styles.emailContainer}>
                <div className={styles.input}>
                  <LoginInput
                    name="Email"
                    type="email"
                    text={email}
                    setText={emailChangeHandler}
                  />
                </div>
                </div>
                <div className={styles.container}>
                <div className={styles.input}>
                  <LoginInput
                    name="First Name"
                    type="text"
                    text={firstname}
                    setText={firstNameChangeHandler}
                  />
                </div>
                <div className={styles.input}>
                  <LoginInput
                    name="Last Name"
                    type="text"
                    text={lastname}
                    setText={lastNameChangeHandler}
                  />
                </div>
                <div className={styles.input}>
                  <LoginInput
                    name="Phone Number"
                    type="text"
                    text={phoneNumber}
                    setText={phoneNumberChangeHandler}
                  />
                </div>
                <div className={styles.input}>
                  <LoginInput
                    name="City"
                    type="text"
                    text={city}
                    setText={cityChangeHandler}
                  />
                </div>
                <LightTooltip title={
                  <React.Fragment>
                    <Typography align="center">Password Requirements</Typography>
                      <li id='capitalToggle'>Password must have a Capital Letter</li>
                      <li id='numberToggle'>Password must have a Number</li>
                      <li id='charToggle'>Password must be 6+ characters long</li>
                  </React.Fragment>
                } placement="left" arrow>
                  <div className={styles.input}>
                      <LoginInput
                        name="Password"
                        type="password"
                        text={password}
                        setText={passwordChangeHandler}
                      />
                  </div>
                </LightTooltip>
                <div className={styles.input}>
                  <LoginInput
                    name="Re-type Password"
                    type="password"
                    text={password2}
                    setText={password2ChangeHandler}
                  />
                </div>
              </div>
              <Button
                type="submit"
                onClick={() =>
                  register(
                    email,
                    firstname,
                    lastname,
                    phoneNumber,
                    password,
                    password2,
                    city
                  )
                }
                variant="contained"
                color="primary"
                style={{
                  display: "block",
                  margin: "10px",
                  width: "100%",
                  maxWidth: "400px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Sign up
              </Button>
              </form> 
              <div
                style={{
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              />
            </div>
          ) : (
              <Typography
                variant="h4"
                align="center"
                component="h4"
                id="simple-modal-title"
              >
                Successfuly Registered
              </Typography>
            )}
        </Paper>
      </Modal>
    </div>
  );
};
