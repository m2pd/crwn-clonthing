import React from 'react'

import CustomButton from '../CustomButton'

import './cart-dropdown.style.scss'

const CartDropdown = () =>(
    <div className="cart-dropdown">
        <div className="cart-item"></div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;
    
