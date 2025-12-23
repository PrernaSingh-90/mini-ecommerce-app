import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email);
    navigate("/checkout"); // Redirect to checkout after login
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleLogin} className="login-form">
      <h2>Login</h2>
      <input type="email" placeholder='Email (fake)' value={email} onChange={(e) => setEmail(e.target.value)} required/>
      <input type="password" placeholder='Password' required/>
      <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login
