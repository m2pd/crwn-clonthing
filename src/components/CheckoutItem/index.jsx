import React from 'react'

import { connect } from 'react-redux'
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.action'

import './checkout-item.style.scss'

const CheckoutItem = ({cartItem,clearItem, addItem, removeItem}) =>{
    const {name, imageUrl, price, quantity} = cartItem;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <div className="name">{name}</div>
            <div className="quantity">
                <span className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</span>
                    <span className="value">{quantity}</span>
                <span className="arrow" onClick={() => addItem(cartItem)}>&#10095;</span>
                </div>
            <div className="price">{price}</div>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
)}

const mapDispatchToProps = dispatch =>({
    clearItem : item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);

