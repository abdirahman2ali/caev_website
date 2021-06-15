import Axios from "axios";

export const FORGOTPASSWORD = "FORGOTPASSWORD";

export const resetSent = (data:any) => {
    return {
        type: FORGOTPASSWORD,
        payload: {
            data: data,
        }
    }
}
/*
This is the main function that will make a request to the back end to create and send a reset code to the user
*/
export const sendResetCode = (email: string) => {
    return function (dispatch:any) {
        let body : any = {
            email: email
        }
        Axios.post(
            'http://caev-development-api.us-east-2.elasticbeanstalk.com/api/customer/forgot',
            JSON.stringify(body)
            )
        .then((response)=>{
            dispatch(resetSent(response))
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}