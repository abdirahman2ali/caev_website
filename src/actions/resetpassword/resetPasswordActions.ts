import Axios from "axios";
const PASSWORDCHANGED = 'PASSWORDCHANGED'

export const passwordChanged = (data:any) =>{
    return {
        type : PASSWORDCHANGED,
        payload : {
            data: data
        }
    }
}

export const reset = (email: string, reset_code: string, password: string) => {
    return function (dispatch:any) {
        let body : any = {
            email: email,
            reset_code :reset_code,
            password : password
        }
        Axios.put(
            'http://caev-development-api.us-east-2.elasticbeanstalk.com/api/customer/password',
            JSON.stringify(body)
            )
        .then((response)=>{
            dispatch(passwordChanged(response))
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}