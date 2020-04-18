import React from 'react';

import './custombutton.style.scss';

const CustomButton = ({children, isGoogleSignIn, ...ortherProps}) =>{
    return(
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ' '} custom-button` }  {...ortherProps} >
            {children}
        </button>
    )
}

export default CustomButton;