import React from 'react';
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-content">

        {/* Column1: Brand info */}
        <div className="footer-section brand">
            <h2 className='footer-logo'>ShopEase.</h2>
            <p>Your one-stop destination for premium quality products.
                We Provide the best shopping experience with top-notch support.
            </p>
            <div className="socials">
                <a href="#" className="social-icon"><FaFacebookF/></a>
                <a href="#" className="social-icon"><FaTwitter/></a>
                <a href="#" className="social-icon"><FaInstagram/></a>
                <a href="#" className="social-icon"><FaLinkedinIn/></a>
            </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
            </ul>
        </div>

        {/* Column 3: Customer Care */}
        <div className="footer-section links">
            <h3>Customer Care</h3>
            <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Returns & Refunds</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>

        {/* Column: 4 Contact Info */}
        <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p><FaMapMarkerAlt/> 123, Tech Street, Bangalore, India</p>
            <p><FaPhoneAlt/> +91 9876x xxx10</p>
            <p><FaEnvelope/> support@shopease.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy: {new Date().getFullYear()} ShopEase. All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer
