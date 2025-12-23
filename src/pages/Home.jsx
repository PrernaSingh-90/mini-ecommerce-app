import React, { useContext, useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import {ShopContext} from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import Skeleton from '../components/Skeleton';
import { FaShippingFast, FaHeadset, FaMoneyBillWave } from "react-icons/fa";
import './Home.css';

const Home = () => {
  const { products } = useContext(ShopContext);
  const [loading, setLoading] = useState(true);

  const featuredProducts = products.slice(0,4);

    // Fake API call simulation (1.5 sec)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);


  return (
    <div className='home-page'>
      
      {/* Hero section (banner) */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Upgrade Your Style <br/> With ShopEase.</h1>
          <p>Get up to 30% off on new arrivals this week.</p>
          <Link to="/shop">
          <button className="shop-now-btn">Shop Now</button>
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="services">
        <div className="service-card">
          <FaShippingFast className='icon'/>
          <h3>Free Shipping</h3>
          <p>On orders over ₹500</p>
        </div>
        <div className="service-card">
          <FaMoneyBillWave className='icon'/>
          <h3>Money Back</h3>
          <p>30 Days return policy</p>
        </div>
        <div className="service-card">
          <FaHeadset className='icon'/>
          <h3>24/7 Support</h3>
          <p>Customer support anytime</p>
        </div>
      </div>

       {/* 3. FEATURED PRODUCTS */}
       <div className="featured-section">
        <h2>Trending Products 🔥</h2>
         <div className="products-grid">
          {loading 
          ? Array(4).fill(0).map((_, i) => <Skeleton key={i}/>)
          : featuredProducts.map((product) => 
          <ProductCard key={product.id} data={product} />
          )}
        </div>
       </div>
    </div>
  );
};

export default Home
