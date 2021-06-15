import axios from "axios";


export const REGISTER = 'REGISTER';
const registerSuccess = (data:any) =>{
  return {
    type: REGISTER,
    payload: {
      data: data
    }
  };
}
/**
 * Main function used to register a user
 */
export const register = (
  email: string,
  firstname:string,
  lastname:string,
  password: string,
  password2:string,
  customerType:string,
  address:string,
  postalCode:string,
  birthday:string,
) => {
  return function(dispatch: any) {
    if(password === password2){
      let form = new FormData();
      form.append("email", email);
      form.append("first_name", firstname);
      form.append("last_name", lastname);
      form.append("signup_date", new Date().toDateString());
      form.append("customer_type", customerType);
      form.append("birthday", birthday)
      form.append("address", address)
      form.append("postal_code", postalCode)
      form.append("password", password); 
      form.append("customer_type", 'customer'); 
  
      axios
        .post("/http://caev-development-api.us-east-2.elasticbeanstalk.com/api/customer", form)
        .then(function(response) {
          dispatch(registerSuccess(response.data));
        })
        .catch(function(error) {
          console.log(error);
        });
    };
    }
   
};
