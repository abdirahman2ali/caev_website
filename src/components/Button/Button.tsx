import React from "react";
import MaterialButton from "@material-ui/core/Button";
import { IButton } from "./IButton";

export const Button = (props:IButton) => {
    return (
        <MaterialButton
            variant="contained"
            color="primary"
            className={props.className}
            onClick={props.onClick}
        >
            {props.text}
        </MaterialButton>
    );
};

