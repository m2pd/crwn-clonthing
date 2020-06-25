export const addItemToCart = (cartItems,cartItemAdd) =>{
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemAdd.id
    )

    if(existingCartItem){
        return cartItems.map(cartItem =>
                cartItem.id === cartItemAdd.id
                    ? {...cartItem, quantity: cartItem.quantity + 1}
                    : cartItem
        )
    }

    return [...cartItems, {...cartItemAdd, quantity: 1 }]
};

export const removeItemToCart = (cartItems, cartItemRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemRemove.id
    )

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemRemove.id)
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemRemove.id
        ? {...cartItem, quantity : cartItem.quantity - 1}
        : cartItem
    );

}
