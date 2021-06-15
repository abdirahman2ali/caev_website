import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { signoutUser } from "../../actions/login";

const Signout = (props: any) => {
  return (
    <div style={{ marginLeft: "5px" }}>
      <Button onClick={props.signoutUser} color="inherit">
        Sign Out
      </Button>
    </div>
  );
};

export default connect(null, { signoutUser })(Signout);
