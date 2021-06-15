import { IUserState } from "./IUser";
import { LOGIN, SAVE, SIGNOUT, FORGOTPASSWORD } from "../../actions";
import axios from "axios";
import decode from "jwt-decode";

const initialState: IUserState = {
  loggedIn: false,
  username: "",
  forgotPassword: false,
  invalidLogin: false,
  id: null,
  first_name: null,
  last_name: null,
  email: null,
  phone_number: null,
  signup_date: null,
  customer_type: null,
  city: null,
  createdAt: null,
  updatedAt: null,
};

const resolveUser = () => {
  const token: any = localStorage.getItem("caev-token");
  const decodedToken = decode(token);
  console.log(decodedToken);
  return axios
    .post("https://caevapi.com/api/customer/id", {
      token: token,
      //@ts-ignore
      //id: decodedToken.id,
    })
    .then((response: any) => {
      const data = response.data[0];
      return data;
    })
    .catch((error: any) => {
      console.log(error);
    });
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("caev-token", action.payload.data["token"]);
      resolveUser();
      return {
        ...state,
        loggedIn: true,
        //username: action.payload.user.username,
      };
    case SAVE:
      console.log(action.payload);
      const user = action.payload;
      return {
        ...state,
        loggedIn: true,
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone_number: user.phone_number,
        signup_date: user.signup_date,
        customer_type: user.customer_type,
        city: user.city,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    case SIGNOUT:
      localStorage.removeItem("caev-token");
      return {
        ...state,
        loggedIn: false,
        username: "",
        invalidLogin: false,
        id: null,
        first_name: null,
        last_name: null,
        email: null,
        phone_number: null,
        signup_date: null,
        customer_type: null,
        city: null,
        createdAt: null,
        updatedAt: null,
      };
    case FORGOTPASSWORD:
      localStorage.removeItem("caev-token");
      return {
        ...state,
        loggedIn: false,
        username: "",
        forgotPassword: true,
        invalidLogin: false,
        id: null,
        first_name: null,
        last_name: null,
        email: null,
        phone_number: null,
        signup_date: null,
        customer_type: null,
        city: null,
        createdAt: null,
        updatedAt: null,
      };

    default:
      return state;
  }
};
