import React from "react";
import classes from "./styles.module.scss";

/**
 * Componenent holding buffet banner image a text to entice caterers
 * to join the platform
 */
const WhyJoinBanner:React.FC = () => {
  return (
    <div className={classes.WhyJoinBanner}>
      <h1 className={classes.Text}>
        Why Join Caev as a <span className="red">Caterer</span>?
      </h1>
    </div>
  );
};

export default WhyJoinBanner;
