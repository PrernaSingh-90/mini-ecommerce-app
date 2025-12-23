import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaUser, FaSun, FaMoon, FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const {cart, wishlist, products } = useContext(ShopContext);
  const { user, logout } = useContext(AuthContext);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  
  // Debouncing Search (300ms delay)
  useEffect(() => {
    const handler = setTimeout(() => {setDebouncedQuery(query); }, 300);
    return () => clearTimeout(handler);
  }, [query]);

  // // Search Results
  const searchResults = debouncedQuery.length > 0
  ? products.filter(p => p.name.toLowerCase().includes(debouncedQuery.toLowerCase())) : [];

   const handleSearchClick = (id) => {
    navigate(`/product/${id}`);
    setQuery("");
    setDebouncedQuery("");
   };

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <nav className='navbar'>
      <div className='logo'>
        <Link to="/">ShopEase.</Link>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <div className="search-input-wrapper">
          <FaSearch className='search-icon'/>
        <input type="text" 
        placeholder='Search Products...' 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} />
        {query && <FaTimes className='clear-icon' onClick={() => {setQuery("") ;
          setDebouncedQuery("");}}/>}
        </div>

        {/* --- Dropdown (Depends on debouncedQuery) --- */}
        {debouncedQuery.length > 0 && (
          <div className="search-dropdown">
            {searchResults.length > 0 ? (
             searchResults.map(p => (
               <div key={p.id} onClick={() => handleSearchClick(p.id)} className='search-item'>
                <img src={p.image} alt="" width="30"/>
                <div className="search-info">
                  <span className="search-name">{p.name}</span>
                  <span className="search-price">₹{p.price}</span>
                </div>
              </div>
            ))
          ) : (
             <div className="search-no-result">No Product Found</div>
          )}
          </div>
        )}
       </div>

      {/* Menu Icons */}
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/wishlist" className='icon-link'>
        <FaHeart/> {wishlist.length > 0 && <span className='badge'>{wishlist.length}</span>}
        </Link>
        <Link to="/cart" className='icon-link'>
        <FaShoppingCart/>{cartCount > 0 && <span className='badge'>{cartCount}</span>}
        </Link>
        
        {user ? (
          <button onClick={logout} className='auth-btn'>Logout</button>
        ) : (
          <Link to="/login"><FaUser/></Link>
        )}

        <button onClick={toggleTheme} className='theme-btn'>
          {isDarkMode ? <FaSun/> : <FaMoon/>}
        </button>
      </div>

      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <FaBars/>
      </div>
    </nav>
  );
};

export default Navbar;
