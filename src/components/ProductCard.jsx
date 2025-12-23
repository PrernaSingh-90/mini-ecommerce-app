import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ data }) => {
  const { addToCart, wishlist, toggleWishlist } = useContext(ShopContext);
  const isWishlisted = wishlist.includes(data.id);

  return (
    <div className='product-card'>
      <div className="image-container">
        {/* Local Assets use karne ke liye: src={data.localImage} */}
        <img src={data.image} alt={data.name} />
        <button className="wishlist-btn" onClick={() => toggleWishlist(data.id)}>
          {isWishlisted ? <FaHeart color="red"/> : <FaRegHeart/>}
        </button>
      </div>
      <div className="details">
        <span>{data.category}</span>
        <h3>{data.name}</h3>
        <div className="rating">
          <FaStar color='gold'/>
          {data.rating}
        </div>
        <div className="price-row">
          <span className='price'>₹{data.price}</span>
          <button className="add-btn" onClick={() => addToCart(data.id)}>Add +</button>
        </div>
        <Link to={`/product/${data.id}`} className="view-link">View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard
