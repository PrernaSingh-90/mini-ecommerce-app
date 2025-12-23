import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from "react-router-dom"; 
import './Cart.css';

const Cart = () => {
  const { cart, products, removeFromCart, updateCartAmount, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className='cart-page'>
      <h1>Your Cart Items</h1>
      <div className="cart-items">
        {products.map((p) => {
          if(cart[p.id] > 0) {
            return (
              <div className="cart-item" key={p.id}>
                <img src={p.image} alt="" />
                <div className="description">
                  <p><b>{p.name}</b></p>
                  <p>₹{p.price}</p>
                  <div className="count-handler">
                    <button onClick={() => updateCartAmount(cart[p.id] - 1, p.id)}>-</button>
                    <input value={cart[p.id]} onChange={(e) => updateCartAmount(Number(e.target.value), p.id)}/>
                    <button onClick={() => updateCartAmount(cart[p.id] + 1, p.id)}>+</button>
                  </div>
                  <button className='remove-btn' onClick={() => removeFromCart(p.id)}>Remove</button>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ₹{totalAmount}</p>
          <button onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
        </div>
      ) : ( 
        <h2>Your Cart is Empty</h2>
      )}
    </div>
  );
};

export default Cart;
