import React from "react";
import classes from "./Item.module.scss";
import Typography from "@material-ui/core/Typography";
import { Button } from "../../../../components";
import { connect } from "react-redux";
import { addItem } from "../../../../actions";
export const ItemComponent = (props: any) => {
  return (
    <React.Fragment>
      <div className={classes.item}>
        <Typography component="h6" variant="h6" className="f500">
          <span className="red"> {props.title}</span> - ${props.price}
        </Typography>
        <Typography
          component="p"
          variant="body1"
          style={{ marginLeft: "10px" }}
        >
          Serves {1} person(s)
        </Typography>
        <Typography component="p" variant="body1">
          <i>{props.description} </i>
          <Button
            className={classes.button}
            text="Add to Cart"
            onClick={() =>
              props.addItem(props.title, props.price, props.full_item)
            }
          />
        </Typography>
      </div>
    </React.Fragment>
  );
};
/*
const mapDispatchToProps = (dispatch: any) => {
  return {
    addItem: (title: string, price: number, item: any) =>
      dispatch({ type: ADD_TO_CART, title, price, item }),
  };
};
*/
export const Item = connect(null, { addItem })(ItemComponent);
