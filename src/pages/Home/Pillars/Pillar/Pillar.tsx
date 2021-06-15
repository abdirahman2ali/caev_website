import React from "react";
import Typography from "@material-ui/core/Typography";
import classes from "./styles.module.scss";
/**
 * Icon: visual of pillar
 * link: link to learn more page
 * text: text explaining pillar
 */
type PillarProps = {
  children: any;
  title: string;
  text: string;
  link: string;
};

/**
 * Componenet representing one pillar of Caev
 */
const Pillar = (props: PillarProps) => {
  return (
    <React.Fragment>
      {props.children}

      <Typography
        variant="h6"
        component="h6"
        align="left"
        className={classes.Text + " f500"}
      >
        {props.title}
      </Typography>
      <Typography
        variant="body1"
        component="p"
        align="left"
        className={classes.Text}
      >
        {props.text}
      </Typography>
    </React.Fragment>
  );
};

export default Pillar;
