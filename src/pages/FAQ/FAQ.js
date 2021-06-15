import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from "react-router-dom";
export default FAQ;
function FAQ() {
return (faq)}

const faq = <div style ={{ width:"100%", position:"absolute", textAlign:"justify"}} > 
  <div style={{backgroundColor:"#ef5350", color:"white", width:"75%"}}>
    <br></br>
    <h1 style={{padding:30, margin:20}}>FAQ</h1>
    <br></br>
  </div>
  <div style={{margin:50,}}>
        <div>
            <h3>
                - What is Caev?
            </h3>
            <div>
                <li>Caev is an online marketplace that connects restaurants/caterers to users. </li>
                <li>Customers can use the platform to optimize the ordering process by no longer having to wait on calls or worry about the caterer/restaurant not picking up</li>
            </div>
        </div>
        <div>
            <h3>  
              -	What makes this platform different from other food delivery platforms?
            </h3>
          <div>
          Caev is specifically for ordering catering. Since catering orders are large scale you will have to make your order at minimum 24hrs in advance unlike other platforms that are on demand. 
          <li>You can also place your order days or weeks in advance. </li>
          </div>
        </div>
        <div>
          <h3>
            -	How early can I place an order? 
          </h3>
          <div>
            <li>As early as you want!</li>
          </div>
        </div>
        <div>
          <h3>-	Can I order something I’ve ordered in the past?</h3>
          <div>
          <li>Absolutely, every user has their profile page and your past orders will be displayed there.</li>
          </div>
        </div>
        <div>
          <h3>-	Can I make edits to an order once it has been placed?</h3>
          <div>
            <li>Each caterer sets their own cut off time. As long as it falls within that time then absolutely!</li>
          </div>
        </div>
        <div>
          <h3>
          -	Will I get a refund if I cancel my order?
          </h3>
          <div>
          This will be evaluated on a case by case basis. For more information check out our <Link to="./files/Caev-TermsandConditions.html" target="_blank">Terms and Conditions</Link>
          </div>
        </div>
        <div>
          <h3>
          -	When will I be billed?
          </h3>
          <div>
          On the day of your event, although some caterers may require a small deposit fee ahead of time for safety purposes. 
          </div>
        </div>
        <div>
          <h3>
          -	Are there delivery options?
          </h3>
          <div>
          Depends on the restaurant. If they provide delivery then yes, but if not, you will have to pick up your order.
          </div>
        </div>
        <div>
          <h3>
          -	How will I know if my order has been accepted by the caterer?
          </h3>
          <div>
          You will get an email notification from the caterer letting you know if your order has been accepted or declined.
          </div>
        </div>
        <div>
          <h3>
          -	How can I add additional details for my order that is not on the menu?
          </h3>
          <div>
          After selecting your order you will have the opportunity to add any other additional details before you submit your order. 
          </div>
        </div>
    </div>
  </div>