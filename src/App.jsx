import React, { useContext, useState } from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';   // You create Home.jsx similar to Shop but with specific products
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';  // Create similar to Cart
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import { ShopProvider, ShopContext } from './context/ShopContext';
import { AuthProvider, AuthContext } from './context/AuthContext';
import './index.css';


// Private Route Components
const PrivateRoute = ({ children }) => {
  const {user} = useContext(AuthContext);
  return user ? children : <Navigate to="/login"/>
};

const Toast = () => {
  const {toast} = useContext(ShopContext);
  if(!toast) return null;
  return <div className='toast-notification'>{toast}</div>
}

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <ErrorBoundary>
      <AuthProvider>
        <ShopProvider>
          <Router>
            <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
            <Toast/>
            <Routes>
              {/* Home can just render shop for now if you want */}
              <Route path='/' element={<Home/>}/>
              <Route path='/shop' element={<Shop/>}/>
              <Route path='/product/:id' element={<ProductDetails/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/wishlist' element={<Wishlist/>}/>  {/* Placeholder: Reuse logic */}
              <Route path='/login' element={<Login/>}/>
              <Route path='/checkout' element={
                <PrivateRoute><Checkout/></PrivateRoute>
              }/>
            </Routes>
            <Footer/>
          </Router>
        </ShopProvider>
      </AuthProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App

