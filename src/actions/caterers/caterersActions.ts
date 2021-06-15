/*import catererA from "../../assets/images/companyA.jpg";
import catererB from "../../assets/images/CompanyB.jpg";
import catererC from "../../assets/images/CompanyC.jpg";
import catererD from "../../assets/images/CompanyD.jpg";
import catererE from "../../assets/images/CompanyE.jpg";
import catererF from "../../assets/images/CompanyF.jpg";
import catererG from "../../assets/images/CompanyG.jpg";
import { ICaterer } from "../../utils";*/

import axios from "axios";

export const GETCATERERS = "GETCATERERS";
export const getVendorsSuccess = (data: any) => {
  return {
    type: GETCATERERS,
    payload: {
      caterers: data,
    },
  };
};

export const getVendors = (source:any): any => {
  return (dispatch: any) => {
    axios
      .get("https://caevapi.com/api/restaurant",{cancelToken: source.token})
      .then((response: any) => {
        dispatch(getVendorsSuccess(response.data));
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
};
