import React from 'react';

import './custombutton.style.scss';

const CustomButton = ({children, isGoogleSignIn,inverted, ...ortherProps}) =>{
    return(
        <button className={`${inverted ? 'inverted' : ' '} ${isGoogleSignIn ? 'google-sign-in' : ' '} custom-button` }  {...ortherProps} >
            {children}
        </button>
    )
}

export default CustomButton;