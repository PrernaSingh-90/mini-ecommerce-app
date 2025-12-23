import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import {useNavigate} from "react-router-dom";
import './Checkout.css';

const Checkout = () => {
  const { getTotalCartAmount, clearCart } = useContext(ShopContext);
  const total = getTotalCartAmount();
  const navigate = useNavigate();

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // Agar cart khali hai to order place mat hone do
    if(total === 0) {
      alert("Your Cart is empty!");
      return;
    }

    // 4. Order Success Message
    alert("Order Placed Successfully! 🎉.");

    // 5. Cart Empty karein
    clearCart();

    // 6. Home Page par bhej dein
    navigate('/');
  };

  return (
    <div className='checkout-page'>
      <h1>Checkout</h1>
      <div className="checkout-container">
        <form onSubmit={handlePlaceOrder} className="address-form">
          <h3>Delivery Address</h3>
          <input type="text" placeholder='Full Name' required/>
          <input type="text" placeholder='Address Line 1' required/>
          <input type="text" placeholder='City' required/>
          <input type="text" placeholder='Zip Code' required/>
          <h3>Payment</h3>
          <p>Cash on Delivery (COD) selected</p>
          <button type='submit'>Place Order (₹{total})</button>
        </form>
        <div className="summary">
          <h3>Order Summary</h3>
          <p>Total Items Cost: <span>₹{total}</span></p>
           <p>Shipping: <span style={{color: 'green'}}>Free</span></p>
          <hr/>
           <h3>Grand Total: <span>₹{total}</span></h3>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
