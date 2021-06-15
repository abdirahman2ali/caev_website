import axios from "axios";
import decode from "jwt-decode";

export const LOGIN = "LOGIN";
export const loginSuccess = (data: any) => {
  return {
    type: LOGIN,
    payload: {
      data: data,
    },
  };
};

/**
 * Main function used to register a user
 */
export const getToken = (email: string, password: string) => {
  return function (dispatch: any) {
    let body: any = {
      email: email,
      password: password,
    };

    axios
      .post(
        "http://caev-development-api.us-east-2.elasticbeanstalk.com/api/customer/login",
        JSON.stringify(body)
      )
      .then(function (response) {
        dispatch(loginSuccess(response));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const SAVE = "SAVE";
export const saveUser = (data: any) => {
  console.log("in case");
  return {
    type: SAVE,
    payload: {
      data: data,
    },
  };
};

/**
 * Once a user has logged in this function retireves their account information
 */
export const resolveUser = (source:any) => (dispatch: any) => {
  const token: any = localStorage.getItem("caev-token");
  const decodedToken = decode(token);
  axios
    .post("https://caevapi.com/api/customer/id", {
      token: token,
      cancelToken: source.token,
      //@ts-ignore
      id: decodedToken.id,
    })
    .then((response: any) => {
      dispatch({
        type: SAVE,
        payload: response.data[0],
      });
    })
    .catch((error: any) => {
      console.log(error);
    });
};

export const SIGNOUT = "SIGNOUT";
export const signoutUser = () => {
  return {
    type: SIGNOUT,
  };
};
