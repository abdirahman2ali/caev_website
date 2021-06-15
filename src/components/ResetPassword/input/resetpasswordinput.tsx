import React from "react";
import { connect } from "react-redux";

import {
  fade,
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    height: "25px",
    fontSize: 16,
    width: "375px",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

type ResetInputProps = {
  email: string;
  type: string;
  text: string;
  name : string;
  setText: any;
};

const ResetInput = (props: ResetInputProps) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <FormControl className={classes.margin}>
        <InputLabel shrink htmlFor="bootstrap-input">
          {props.name}
        </InputLabel>
        <BootstrapInput
          type={props.type}
          autoComplete="off"
          placeholder={props.name}
          name={props.name}
          id="bootstrap-input"
          style={{ width: "100%" }}
          onChange={props.setText}
        />
      </FormControl>
    </React.Fragment>
  );
};

export default ResetInput;