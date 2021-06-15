import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { Button as CaevButton } from "../Button/Button";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
function getModalStyle() {
  const top = 25;
  return {
    top: `${top}%`,
    margin: "auto",
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    borderRadius: 0,
    padding: theme.spacing(2, 4, 4),
  },
  buttonMargin: {
    marginRight: theme.spacing(7),
    marginLeft: theme.spacing(7),
    marginTop: 0,
    marginBottom: 0,
  },
}));

export const ShoppingCartPage = (props: any) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  //const [redirect, setRedirect] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let price = 0;
  for(let i =0; i < props.shoppingCart.length; i++){
	price += props.shoppingCart[i].price;
  }
  /**
   *  Will return the order ID
   * don't specify customer_id
   * @param restaurant_id
 
  const makeOrder = async (restaurant_id: string): Promise<any> => {
    const orderData = {
      delivery_date: new Date().getDate(),
      order_name: "Some random name",
      restaurant_id: restaurant_id,
      token: localStorage.getItem("caev-token"),
    };
    return axios
      .post("https://caevapi.com/api/order", orderData)
      .then((response: any) => {
        return response;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addOrderItems = async (order_id: string) => {
    // need to get latest order id?

    for (const item of props.shoppingCart) {
      const orderItemData = {
        order_id: order_id,
        menu_item_id: item.menu_item_id,
        order_description: "Some generic description",
        token: localStorage.getItem("caev-token"),
      };
      axios
        .post("https://caevapi.com/api/orderitem", orderItemData)
        .then((response: any) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const checkout = async (order_id: number) => {
    const orderData = {
      order_id: order_id,
      //restaurant_id: restaurant_id,
      // if i'm pasing the token why do I need the user ID?
    };
    axios.post("https://caevapi.com/api/checkout", orderData);
  };
  const history = useHistory();
  const handleSubmit = async () => {
    //const restaurant_id = props.shoppingCart[0].restaurant_id;
    //const orderData = await makeOrder(restaurant_id);
    //const order_id = orderData.data.order_id;
    //console.log(orderData);
    //console.log(order_id);
    const order_id = "a8d3900f-4064-49b6-9c01-ad4c70b61e22";
    setRedirect(true);
    //await addOrderItems(order_id);

    // history.push("/checkout", { order_id: order_id });
  };  */
  return (
    <React.Fragment>
              <ShoppingCartIcon style={{ color: "white" }} onClick={handleOpen} />

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper style={modalStyle} className={classes.paper}>
          <Typography
            variant="h4"
            align="center"
            component="h4"
            id="simple-modal-title"
          >
            Your Shopping Cart
          </Typography>
          <div
            style={{
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          />
         
            {props.shoppingCart.length === 0
		    ? <Typography align="center" component="p" variant="body1">Your shopping cart is empty.</Typography>
              : props.shoppingCart.map((item: any, index:number) => {
                return ( <Typography
            variant="body1"
            align="center"
            component="p"
            id="simple-modal-title"
	    key={index}
	    ><strong>{item.menu_item_name} ${item.price}</strong></Typography>)
;
              })}
                    {props.shoppingCart.length > 0 ? (
	    <Link to="/checkout" style={{color:'white'}}>

            <Button variant="contained" color="primary" style={{width:'100%', marginTop:'10px', color:'white'}} >
				    Checkout ${price}
	    </Button>
</Link>
          ) : null}
        </Paper>
      </Modal>
    </React.Fragment>
  );
};

const mapStateToProps = (state: any): any => {
  return {
    shoppingCart: state.shoppingCartReducer.shoppingCart,
  };
};

export const ShoppingCart = connect(mapStateToProps, null)(ShoppingCartPage);
