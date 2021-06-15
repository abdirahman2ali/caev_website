import React from 'react';
import Checkout from './Checkout/Checkout';
import Default from './Default/Default';
import { connect } from 'react-redux';

export const CartSection = (props: any) => {
  console.log(props);
  return (
    <React.Fragment>

      {props.shoppingCart.length === 0 ? <Default /> : <Checkout shoppingCart={props.shoppingCart} />}

    </React.Fragment>
  )
};

const mapStateToProps = (state: any): any => {
  return {
    shoppingCart: state.shoppingCartReducer.shoppingCart,
  };
};


export const Cart = connect(
  mapStateToProps,
  null)(CartSection);
