import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  paymentMethod: '',
  paymentSuccess: false,
  submitPayment: () => {},
  changePayment: () => {},
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export default CartContext
