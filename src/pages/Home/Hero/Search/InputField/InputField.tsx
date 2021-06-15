import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import classes from "./styles.module.scss";

/**
 * label: label for the input field
 * placeholder: placeholder text for the input field
 * name: name for the input field (useful when trying to get data from form)
 */
type InputFieldProps = {
  label: string;
  placeholder: string;
};


/**
 * Component used for users to input some data into the hero search form
 * @param props 
 */
const InputField = (props: InputFieldProps) => {

  const [values, setValues] = React.useState({
    name: props.placeholder
  });
  
  const handleChange = (name: string) => (event: any) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <React.Fragment>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="standard-name"
          label={props.label}
          className={classes.textField}
          placeholder={props.placeholder}
         
          onChange={handleChange("name")}
          margin="normal"
        />
      </Box>
    </React.Fragment>
  );
};

export default InputField;
