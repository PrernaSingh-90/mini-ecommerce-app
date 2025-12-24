import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import './Shop.css';

const Shop = () => {
  const { products } = useContext(ShopContext);
  const [category, setCategory] = useState('All');
  const [sortType, setSortType] = useState('default');
  const [maxPrice, setMaxPrice] = useState(10000);

  // Filter & Sort Logic
  let filterdProducts = products
  .filter(item => category === "All" || item.category === category)
  .filter(item => item.price <= maxPrice);

  if(sortType === 'low-high') filterdProducts.sort((a,b) => a.price - b.price);
  if(sortType === 'high-low') filterdProducts.sort((a,b) => b.price - a.price);

  return (
    <div className='shop-page'>
      <div className="filters">
        <h3>Filters</h3>
        <div className="filter-group">
          <label>Category:</label>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Beauty">Beauty</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Max Price: ₹{maxPrice}</label>
          <input type="range" min="0" max="10000" value={maxPrice} onChange={(e) => 
            setMaxPrice(Number(e.target.value))}/>
        </div>
        <div className="filter-group">
          <label>Sort By:</label>
          <select onChange={(e) => setSortType(e.target.value)}>
            <option value="default">Default</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>
      
      <div className="products-grid">
        {filterdProducts.map((p) => <ProductCard key={p.id} data={p} />)}
      </div>
    </div>
  );
};

export default Shop;
