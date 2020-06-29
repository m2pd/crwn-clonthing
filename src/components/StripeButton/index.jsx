import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GzCJvLnnNlPsRMx65mbRXYg6GqbP04nyutRsqSe8lIsoTxqsgv5RyUQDi3GIjMCVKhJE5BXELMxDhDEjQE023A60023QlPDOU';

    const onToken = token =>{
        console.log(token);
        alert('Chekcout Success')
    }
    return(

        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="http://git.mitechcenter.vn/uploads/-/system/user/avatar/19/avatar.png?width=400"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;

