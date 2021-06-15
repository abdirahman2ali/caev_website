import React, { useState, FormEvent } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.scss";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

const CardField = (props: { onChange: any }) => (
  <div className="FormRow">
    <CardElement onChange={props.onChange} />
  </div>
);

const Field = (props: {
  label: any;
  id: any;
  type: any;
  placeholder: any;
  required: any;
  autoComplete: any;
  value: any;
  onChange: any;
}) => (
  <div className="FormRow">
    <label htmlFor={props.id} className="FormRowLabel">
      {props.label}
    </label>
    <input
      className="FormRowInput"
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      required={props.required}
      autoComplete={props.autoComplete}
      value={props.value}
      onChange={props.onChange}
    />
  </div>
);

const SubmitButton = (props: {
  processing: any;
  error: any;
  children: any;
  disabled: any;
}) => (
  <button
    className={`SubmitButton ${props.error ? "SubmitButton--error" : ""}`}
    type="submit"
    disabled={props.processing || props.disabled}
  >
    {props.processing ? "Processing..." : props.children}
  </button>
);

const ErrorMessage = (props: { children: any }) => (
  <div className="ErrorMessage" role="alert">
    <svg width="16" height="16" viewBox="0 0 17 17">
      <path
        fill="#FFF"
        d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
      />
      <path
        fill="#6772e5"
        d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
      />
    </svg>
    {props.children}
  </div>
);

const ResetButton = (props: { onClick: any }) => (
  <button type="button" className="ResetButton" onClick={props.onClick}>
    <svg width="32px" height="32px" viewBox="0 0 32 32">
      <path
        fill="#FFF"
        d="M15,7.05492878 C10.5000495,7.55237307 7,11.3674463 7,16 C7,20.9705627 11.0294373,25 16,25 C20.9705627,25 25,20.9705627 25,16 C25,15.3627484 24.4834055,14.8461538 23.8461538,14.8461538 C23.2089022,14.8461538 22.6923077,15.3627484 22.6923077,16 C22.6923077,19.6960595 19.6960595,22.6923077 16,22.6923077 C12.3039405,22.6923077 9.30769231,19.6960595 9.30769231,16 C9.30769231,12.3039405 12.3039405,9.30769231 16,9.30769231 L16,12.0841673 C16,12.1800431 16.0275652,12.2738974 16.0794108,12.354546 C16.2287368,12.5868311 16.5380938,12.6540826 16.7703788,12.5047565 L22.3457501,8.92058924 L22.3457501,8.92058924 C22.4060014,8.88185624 22.4572275,8.83063012 22.4959605,8.7703788 C22.6452866,8.53809377 22.5780351,8.22873685 22.3457501,8.07941076 L22.3457501,8.07941076 L16.7703788,4.49524351 C16.6897301,4.44339794 16.5958758,4.41583275 16.5,4.41583275 C16.2238576,4.41583275 16,4.63969037 16,4.91583275 L16,7 L15,7 L15,7.05492878 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z"
      />
    </svg>
  </button>
);

const CheckoutFormPage = (props: any) => {
  const stripe = useStripe();
  const elements = useElements();
  //const [caev, setCaevError] = useState(null);
  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [orderName, setOrderName] = useState("");
  const [orderDetails, setOrderDetails] = useState("");
  const [billingDetails, setBillingDetails] = useState({
    email: "",
    phone: "",
    name: "",
  });
  let price = 0;
  for(let i = 0; i < props.shoppingCart.length; i++){
	price += props.shoppingCart[i].price;
  }

  const getRestaurantId = () => {
    return props.shoppingCart[0].restaurant_id;
  };

  const makeOrder = async (
    restaurant_id: string,
    delivery_date: Date,
    order_name: string,
    order_details: string
  ): Promise<any> => {
    const orderData = {
      delivery_date: delivery_date,
      order_name: order_name,
      restaurant_id: restaurant_id,
      order_details: order_details,
      token: localStorage.getItem("caev-token"),
    };
    return axios
      .post("https://caevapi.com/api/order", orderData)
      .then((response: any) => {
        return response.order_id;
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

  const getClientSecret = async (order_id: string, restaurant_id: string) => {
    return await axios
      .post("https://caevapi.com/api/checkout", {
        order_id: order_id,
        token: localStorage.getItem("caev-token"),
        restaruant_id: restaurant_id,
      })
      .then((response: any) => {
        return response.data.clientSecret; // client secret contains amount;
      }); //.catch((error: any) => {
    //  setCaevError("Something went wrong");
    // });
  };

  const pay = async (stripe: any, card: any, clientSecret: String) => {
    stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
        },
      })
      .then((result: any) => {
        if (result.error) {
          // Show error to your customer
          //    showError(result.error.message);
        } else {
          // The payment has been processed!
          //      orderComplete(clientSecret);
        }
      });
  };
  /*
    const orderComplete = (stripe: any, clientSecret: string) => {
        // Just for the purpose of the sample, show the PaymentIntent response object
        stripe.retrievePaymentIntent(clientSecret).then((result: any) => {
            const paymentIntent = result.paymentIntent;
            const paymentIntentJson = JSON.stringify(paymentIntent, null, 2);
            console.log(paymentIntentJson);
        });
    };
*/

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const restaurant_id = getRestaurantId();
    const order_id = await makeOrder(
      restaurant_id,
      deliveryDate,
      orderName,
      orderDetails
    );
    addOrderItems(order_id);
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    if (error) {
      //@ts-ignore
      elements.getElement("card").focus();
      return;
    }

    if (cardComplete) {
      setProcessing(true);
    }
    //@ts-ignore
    const { paymentMethod, errorStripe } = await stripe.createPaymentMethod({
      type: "card",
      //@ts-ignore
      card: elements.getElement(CardElement),
      billing_details: billingDetails,
    });
    // get client secret
    const clientSecret = await getClientSecret(order_id, restaurant_id);
    console.log(errorStripe);
    console.log(paymentMethod);
    //@ts-ignore
    await pay(stripe, paymentMethod.card, clientSecret); // does work?

    // await orderComplete(stripe, clientSecret);
    setProcessing(false);

    if (errorStripe) {
      console.log("[error]", errorStripe);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  const reset = () => {
    setError(null);
    setProcessing(false);
    setPaymentMethod(null);
    setBillingDetails({
      email: "",
      phone: "",
      name: "",
    });
  };
  console.log(props);
  return paymentMethod ? (
    <div className="Result stripe">
      <div className="ResultTitle" role="alert">
        Payment successful
      </div>
      <div className="ResultMessage">
        Thanks for trying Stripe Elements. No money was charged, but we
        generated a PaymentMethod:{" "}
        {
          //@ts-ignore
          paymentMethod.id
        }
      </div>
      <ResetButton onClick={reset} />
    </div>
  ) : (
    <form className="Form stripe" onSubmit={handleSubmit}>
      <fieldset className="FormGroup">
        <Field
          label="Order Name"
          id="orderName"
          type="text"
          placeholder="Enter Order Name"
          required
          autoComplete="name"
          value={orderName}
          onChange={(e: any) => {
            setOrderName(e.target.value);
          }}
        />
        <Field
          label="Order Details"
          id="orderDetails"
          type="text"
          placeholder="Bring order to side door"
          required
          autoComplete="name"
          value={orderDetails}
          onChange={(e: any) => {
            setOrderDetails(e.target.value);
          }}
        />
      </fieldset>
      <fieldset className="FormGroup">
        <Field
          label="Name"
          id="name"
          type="text"
          placeholder="Jane Doe"
          required
          autoComplete="name"
          value={billingDetails.name}
          onChange={(e: any) => {
            setBillingDetails({ ...billingDetails, name: e.target.value });
          }}
        />
        <Field
          label="Email"
          id="email"
          type="email"
          placeholder="janedoe@gmail.com"
          required
          autoComplete="email"
          value={billingDetails.email}
          onChange={(e: any) => {
            setBillingDetails({ ...billingDetails, email: e.target.value });
          }}
        />
        <Field
          label="Phone"
          id="phone"
          type="tel"
          placeholder="(941) 555-0123"
          required
          autoComplete="tel"
          value={billingDetails.phone}
          onChange={(e: any) => {
            setBillingDetails({ ...billingDetails, phone: e.target.value });
          }}
        />

        <CardField
          onChange={(e: any) => {
            setError(e.error);
            setCardComplete(e.complete);
          }}
        />
      </fieldset>
      <div className="date">
        <p className="dateField">Delivery Date</p>
        <TextField
          id="datetime-local"
          className="date"
          type="datetime-local"
          //defaultValue={deliveryDate}
          value={deliveryDate}
          onChange={(e: any) => {
            setDeliveryDate(e.target.value);
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      {error && (
        <ErrorMessage>
          {
            //@ts-ignore
            error.message
          }
        </ErrorMessage>
      )}
      <Link to="/files/Caev-TermsandConditions.html" target="_blank" style={{color:'blue', padding:'2%'}}>Terms and Conditions</Link>
      <SubmitButton processing={processing} error={error} disabled={!stripe}>
        Pay ${price}
      </SubmitButton>
    </form>
  );
};
const mapStateToProps = (state: any): any => {
  return {
    shoppingCart: state.shoppingCartReducer.shoppingCart,
  };
};

export const CheckoutForm = connect(mapStateToProps, null)(CheckoutFormPage);
