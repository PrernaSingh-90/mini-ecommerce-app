import React, { createContext, useEffect, useState } from 'react'

// IMAGES IMPORT 
import headphoneImg from '../assets/images/headphones.jpg';
import shoeImg from '../assets/images/shoes.jpg';
import watchImg from '../assets/images/watch.jpg';
import jacketImg from '../assets/images/jacket.jpg';
import bagImg from '../assets/images/bag.jpg';
import mouseImg from '../assets/images/mouse.jpg';

export const ShopContext = createContext();

// PRODUCTS DATA
const PRODUCTS = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    category: "Electronics",
    rating: 4.5,
    image: headphoneImg
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 1999,
    category: "Fashion",
    rating: 4.8,
    image: shoeImg
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 5999,
    category: "Electronics",
    rating: 4.2,
    image: watchImg
  },
  {
    id: 4,
    name: "Denim Jacket",
    price: 1499,
    category: "Fashion",
    rating: 4.2,
    image: jacketImg
  },
  {
    id: 5,
    name: "Leather Bag",
    price: 3499,
    category: "Accessories",
    rating: 4.7,
    image: bagImg
  },
  {
    id: 6,
    name: "Gaming Mouse",
    price: 899,
    category: "Electronics",
    rating: 4.6,
    image: mouseImg
  },
];

 export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem('wishlist')) || []);
  const [products] = useState(PRODUCTS);
  const [toast, setToast] = useState(null);

  // save wishlist to localStorage
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Toast Helper
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null)
    }, 3000);
  };

  // Cart Logic
  const addToCart = (itemId) => {
    setCart((prev) => ({...prev, [itemId]: (prev[itemId] || 0) + 1}));
    showToast("Added to Cart! 🛒");
  };
   
  const removeFromCart = (itemId) => {
    setCart((prev) => {
      const newCart = {...prev};
      delete newCart[itemId];
      return newCart;
    });
    showToast("Removed from Cart 🗑️");
  };

  const updateCartAmount = (newAmount, itemId) => {
    setCart((prev) => ({...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for(const item in cart) {
      if(cart[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        total += cart[item] * itemInfo.price;
      }
    }
    return total;
  };

  // wishlist Logic
  const toggleWishlist = (itemId) => {
    if(wishlist.includes(itemId)) {
      setWishlist(wishlist.filter((id) => id !== itemId));
      showToast("Removed from Wishlist 💔");
    } else {
      setWishlist([...wishlist, itemId]);
      showToast("Added to Wishlist ❤️");
    }
  };

  const clearCart = () => {
    setCart({});
  };

  return (
    <ShopContext.Provider value={{
      products, cart, clearCart, addToCart, removeFromCart, updateCartAmount, getTotalCartAmount, wishlist, toggleWishlist, toast
    }}>{children}</ShopContext.Provider>
  );
 };
  
