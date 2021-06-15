import React from "react";
import FormControl from '@material-ui/core/FormControl';
import { useTheme, Theme } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from "@material-ui/core/InputLabel";
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import classes from './styles.module.scss';


const names = [
   'Indian',
   'Greek',
   'Japanese',
   'Chinese',
   'Italian'
  ];
  
  function getStyles(name:string, personName:any,theme:Theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const HeroSelectField = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  function handleChange(event:any) {
    setPersonName(event.target.value);
    handleClose();
  }

  return (
    <React.Fragment>
      <FormControl className={classes.formControl} >
        <InputLabel htmlFor="select-multiple">Type of Cusine</InputLabel>
        <Select
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple" />}
          MenuProps={MenuProps}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
         
        >
          {names.map(name => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </React.Fragment>
  );
};

export default HeroSelectField;
