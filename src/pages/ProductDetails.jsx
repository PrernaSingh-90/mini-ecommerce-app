import React, { useContext } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { ShopContext } from '../context/ShopContext';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const { products, addToCart } = useContext(ShopContext);

  const product = products.find((e) => e.id === Number(id));

  if(!product) return <h2>Product Not Found</h2>

  // BUY NOW LOGIC
  const handleBuyNow = () => {
    addToCart(product.id)
    navigate('/checkout');
  };

  return (
    <div className='product-details'>
      <div className="left">
        <div className="main-img">
          <img src={product.image} alt={product.name}/>
        </div>
        <div className="thumbnails">
          <img src={product.image} alt=""/>
          <img src={product.image} alt=""/>
          <img src={product.image} alt=""/> {/* Dummy thumbnails */}
        </div>
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <p className="category">Category: 
         <span> {product.category}</span>
          </p>

        <div className="price-tag">₹{product.price}</div>

        <p className="desc">
          Experience premium quality with the {product.name}. 
          Perfect for daily use with durable material and modern design.
          </p>

        <div className="buttons">
          <button className="cart-btn" onClick={() => addToCart(product.id)}>Add to Cart</button>
          <button className="buy-btn" onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
