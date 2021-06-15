import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Navigation } from '../../components';
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import LoginInput from './SignupInput/LoginInput';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

function getModalStyle() {
  const top = 5;
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
    marginTop: 0,
    marginBottom: 0,
  },
}));
type SignupProps = {
  white: boolean
}
export const Signup = (props: any) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  //const [open, setOpen] = React.useState(false);
  const [registered] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [password, setPassword] = React.useState("");
  /*
const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
  setRegister(false);
};
*/
  return (
    <React.Fragment>
      <Navigation />
      <div style={{ display: 'flex', justifyContent: 'center', top: '120px', position: 'relative' }}>


        <Paper style={modalStyle} className={classes.paper}>
          {registered === false ? <div> <Typography variant="h4" align="center" component="h4" id="simple-modal-title">Sign up</Typography>
            <div style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', marginTop: '10px', marginBottom: '10px' }} />
            <LoginInput name="email" type="email" text={email} setText={setEmail} />
            <LoginInput name="First Name" type="text" text={firstname} setText={setFirstName} />
            <LoginInput name="Last Name" type="text" text={lastname} setText={setLastName} />
            <Tooltip title="Hello" placement="bottom" arrow>
              <LoginInput name="password" type="password" text={password} setText={setPassword} />
            </Tooltip>
            <Button onClick={() => props.register(email, firstname, lastname, password)} variant="contained" color="primary" style={{ display: 'block', margin: '10px', width: '100%' }}>
              Sign up123
            </Button>
            <Typography align="center" variant="body1" component="p">
              Forgot password
            </Typography>
            <div style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', marginTop: '10px', marginBottom: '10px' }} /></div>
            : <Typography variant="h4" align="center" component="h4" id="simple-modal-title">Successfuly Registered</Typography>}
        </Paper>
      </div>
    </React.Fragment>
  );
}

