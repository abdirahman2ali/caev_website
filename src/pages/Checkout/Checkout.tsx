import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { connect } from "react-redux";
import { CheckoutForm } from "./CheckoutForm2";
import { loadStripe } from '@stripe/stripe-js';
import Navigation from '../../components/Navigation/Navigation';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import byStripe from '../../assets/images/stripe-payment-logo.png';
const CheckoutPage = (props: any) => {
  /*
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

  const handleSubmit = async () => {
    //const restaurant_id = props.shoppingCart[0].restaurant_id;
    //const orderData = await makeOrder(restaurant_id);
    //const order_id = orderData.data.order_id;
    //console.log(orderData);
    //console.log(order_id);
    const order_id = "a8d3900f-4064-49b6-9c01-ad4c70b61e22";
    //await addOrderItems(order_id);

    // history.push("/checkout", { order_id: order_id });
  };
  */
  const stripePromise = loadStripe(
    "pk_test_Nuzs3yCMZLqRUUosB7v5kwvn006LjhQyZb"
  );
  /*
    const ELEMENTS_OPTIONS = {
      fonts: [
        {
          cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
        },
      ],
    };
     
  */
  return (
    <div>
      <Navigation />
      <div style={{ marginTop: 120 }}>
        <Container maxWidth="md">
          <Typography component="h4" variant="h4" align="left" style={{ marginBottom: 20 }}>
            Checkout
        </Typography>
        <img src={byStripe} alt = "stripe" className="byStripe"/>
          {props.shoppingCart.map((item: any, index:number) => {
		  return (<h5 key={index}>{item.menu_item_name} - ${item.price}</h5>);
          })}
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
          
        </Container>
        
      </div>
    </div>
  );
};

const mapStateToProps = (state: any): any => {
  return {
    shoppingCart: state.shoppingCartReducer.shoppingCart,
  };
};

export const Checkout = connect(mapStateToProps, null)(CheckoutPage);
