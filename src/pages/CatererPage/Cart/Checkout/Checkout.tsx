import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
const Checkout = (props: any) => {
  return (
    <React.Fragment>
      <Paper
        style={{
          height: "100vh",
          minWidth: "100%",
          padding: "10px",
          marginRight: "0px  !important",
          position: "fixed",
          right: "0px  !important",
          marginLeft: "43px",
          paddingTop: "200px",
        }}
        elevation={8}
      >
        {props.shoppingCart.map((orderItem: any, index: number) => {
          console.log(orderItem.menu_item_name);
          return (
            <Typography
              variant="h6"
              component="h6"
              style={{ width: "100%", marginLeft: "80px" }}
              key={index}
            >
              {orderItem.menu_item_name}
            </Typography>
          );
        })}
      </Paper>
    </React.Fragment>
  );
};

export default Checkout;
