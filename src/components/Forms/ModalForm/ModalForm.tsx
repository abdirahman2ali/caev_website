import React, { useState } from "react";
import {IModalForm} from "./IModalForm";
import Modal from '@material-ui/core/Modal';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

export const ModalForm = (props: IModalForm) =>{
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
      
      const handleClose = () => {
        setOpen(false);
      };

    return(
    <React.Fragment>
        <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div  className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          {props.children}
        </div>
      </Modal>
    </React.Fragment>
    )
}