import {useState} from 'react'
import Popup from 'reactjs-popup'
import CartContext from '../../context/CartContext'
import 'reactjs-popup/dist/index.css'
import './index.css'

const CartSummary = () => {
  const [paymentMethod, setChangeMethod] = useState('')
  const [paymentSuccess, setPayment] = useState(false)
  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        let total = 0
        cartList.forEach(eachCartItem => {
          total += eachCartItem.price * eachCartItem.quantity
        })

        const text = cartList.length > 1 ? 'items' : 'item'
        const onChangeRadio = event => {
          setChangeMethod(event.target.value)
        }

        let isChecked = true
        if (paymentMethod === 'Cash on Delivery') {
          isChecked = false
        }

        const disable = isChecked ? 'notWorks' : 'order'
        console.log(isChecked)
        const onClickOrder = () => {
          setPayment(true)
        }

        return (
          <>
            <div className="cart-summary-container">
              <h1 className="order-total-value">
                <span className="order-total-label">Order Total:</span> Rs{' '}
                {total}
                /-
              </h1>
              <p className="total-items">{cartList.length} Items in cart</p>
              <Popup
                trigger={
                  <button type="button" className="checkout-button d-sm-none">
                    Checkout
                  </button>
                }
                position="center"
                modal
              >
                {close => (
                  <>
                    {paymentSuccess ? (
                      <div className="successFull">
                        <img
                          src="https://res.cloudinary.com/dlaypemls/image/upload/v1734529163/1930264_check_complete_done_green_success_icon-removebg-preview_tuidhy.png"
                          alt="payment success"
                          className="paymentSuccess"
                        />
                        <p className="successHeading">
                          Your order has been placed successfully
                        </p>
                      </div>
                    ) : (
                      <div className="paymentContainer">
                        <h1 className="paymentHeading">Payment Details</h1>
                        <div className="priceDetailsContainer">
                          <p className="priceItems">
                            Price ({cartList.length} {text})
                          </p>
                          <p className="price">Rs {total}</p>
                        </div>
                        <div className="payment">
                          <h4 className="paymentType">Payment Methods</h4>
                          <div className="buttonContainer">
                            <div className="radio">
                              <input
                                type="radio"
                                id="1"
                                name="payment"
                                value="Card"
                                onChange={onChangeRadio}
                                className="radioDot"
                              />
                              <label htmlFor="1">Card</label>
                            </div>
                            <div className="radio">
                              <input
                                type="radio"
                                id="2"
                                name="payment"
                                value="Net Banking"
                                onChange={onChangeRadio}
                                className="radioDot"
                                disabled="true"
                              />
                              <label htmlFor="2">Net Banking</label>
                            </div>
                            <div className="radio">
                              <input
                                type="radio"
                                id="3"
                                name="payment"
                                value="Upi"
                                onChange={onChangeRadio}
                                className="radioDot"
                              />
                              <label htmlFor="3">Upi</label>
                            </div>
                            <div className="radio">
                              <input
                                type="radio"
                                id="4"
                                name="payment"
                                value="Wallet"
                                onChange={onChangeRadio}
                                className="radioDot"
                              />
                              <label htmlFor="4">Wallet</label>
                            </div>
                            <div className="radio">
                              <input
                                type="radio"
                                id="5"
                                name="payment"
                                value="Cash on Delivery"
                                onChange={onChangeRadio}
                                className="radioDot"
                              />
                              <label htmlFor="5">Cash on Delivery</label>
                            </div>
                          </div>
                        </div>
                        <div className="orderContainer">
                          <button
                            type="button"
                            className={disable}
                            disabled={isChecked}
                            onClick={onClickOrder}
                          >
                            Confirm Order
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </Popup>
            </div>
          </>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartSummary
