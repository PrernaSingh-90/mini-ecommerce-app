import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import './Wishlist.css';

const Wishlist = () => {
  const {wishlist, products} = useContext(ShopContext);
  
  // Filter logic: Sirf wo products dikhao jinki ID wishlist array me hai
  const wishlistedProducts = products.filter((product) => wishlist.includes(product.id));

  return (
    <div className='wishlist-page'>
      <h1>My Wishlist ❤️</h1>
      {wishlistedProducts.length === 0 ? (
        <div className="empty-wishlist">
          <h2>Your Wishlist is empty!</h2>
          <p>Explore Products and add your Favorites here.</p>
        </div>
      ) : (
        <div className="products-grid">
          {wishlistedProducts.map((product) => (
            <ProductCard key={product.id} data={product}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist
