import React, { useState, FormEvent } from 'react';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import classes from './CheckoutForm.module.scss'
import {Link} from 'react-router-dom';


const CardField = (props: { onChange: any }) => (
    <div className={classes.FormRow}>
        <CardElement onChange={props.onChange} />
    </div>
);

const Field = (props: {
    label: any,
    id: any,
    type: any,
    placeholder: any,
    required: any,
    autoComplete: any,
    value: any,
    onChange: any,
}) => (
        <div className={classes.FormRow}>
            <label htmlFor={props.id} className={classes.FormRowLabel}>
                {props.label}
            </label>
            <input
                className={classes.FormRowInput}
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

const SubmitButton = (props: { processing: any, error: any, children: any, disabled: any }) => (
    <button
        className={`${classes.SubmitButton} ${props.error ? classes.SubmitButton__error : ''}`}
        type="submit"
        disabled={props.processing || props.disabled}
    >
        {props.processing ? 'Processing...' : props.children}
    </button >
);

const ErrorMessage = (props: { children: any }) => (
    <div className={classes.ErrorMessage} role="alert">
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
    <button type="button" className={classes.ResetButton} onClick={props.onClick}>
        <svg width="32px" height="32px" viewBox="0 0 32 32">
            <path
                fill="#FFF"
                d="M15,7.05492878 C10.5000495,7.55237307 7,11.3674463 7,16 C7,20.9705627 11.0294373,25 16,25 C20.9705627,25 25,20.9705627 25,16 C25,15.3627484 24.4834055,14.8461538 23.8461538,14.8461538 C23.2089022,14.8461538 22.6923077,15.3627484 22.6923077,16 C22.6923077,19.6960595 19.6960595,22.6923077 16,22.6923077 C12.3039405,22.6923077 9.30769231,19.6960595 9.30769231,16 C9.30769231,12.3039405 12.3039405,9.30769231 16,9.30769231 L16,12.0841673 C16,12.1800431 16.0275652,12.2738974 16.0794108,12.354546 C16.2287368,12.5868311 16.5380938,12.6540826 16.7703788,12.5047565 L22.3457501,8.92058924 L22.3457501,8.92058924 C22.4060014,8.88185624 22.4572275,8.83063012 22.4959605,8.7703788 C22.6452866,8.53809377 22.5780351,8.22873685 22.3457501,8.07941076 L22.3457501,8.07941076 L16.7703788,4.49524351 C16.6897301,4.44339794 16.5958758,4.41583275 16.5,4.41583275 C16.2238576,4.41583275 16,4.63969037 16,4.91583275 L16,7 L15,7 L15,7.05492878 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z"
            />
        </svg>
    </button>
);


const CheckoutForm2 = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [cardComplete, setCardComplete] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [billingDetails, setBillingDetails] = useState({
        email: '',
        phone: '',
        name: '',
    });

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        //if (error) {
        //@ts-ignore
        //  elements.getElement('card').focus();
        // return;
        // }

        if (cardComplete) {
            setProcessing(true);
        }
        //@ts-ignore
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            //@ts-ignore
            card: elements.getElement(CardElement),
            billing_details: billingDetails,
        });
        // get client secret

        setProcessing(false);


        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }
    };

    const reset = () => {
        setError(null);
        setProcessing(false);
        setPaymentMethod(null);
        setBillingDetails({
            email: '',
            phone: '',
            name: '',
        });
    };

    return paymentMethod ? (
        <div className={classes.Result} id={classes.App}>
            <div className={classes.ResultTitle} role="alert">
                Payment successful
        </div>
            <div className={classes.ResultMessage}>
                Thanks for trying Stripe Elements. No money was charged, but we
          generated a PaymentMethod: {
                    //@ts-ignore 
                    paymentMethod.id}
            </div>
            <ResetButton onClick={reset} />
        </div>
    ) : (
            <form className={classes.Form} onSubmit={handleSubmit} id={classes.App}>
                <fieldset className={classes.FormGroup} >
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
                </fieldset>
                
                <fieldset className={classes.FormGroup}>
                    <CardField
                        onChange={(e: any) => {
                            setError(e.error);
                            setCardComplete(e.complete);
                        }}
                    />

                </fieldset>
                {error && <ErrorMessage>{
                    //@ts-ignore
                    error.message}</ErrorMessage>}
                <SubmitButton processing={processing} error={error} disabled={!stripe}>
                    Pay $25
        </SubmitButton>
        
            </form>
        );
}

export default CheckoutForm2;