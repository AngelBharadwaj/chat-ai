import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import nature from '../assets/ed.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlersubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state
    setLoading(true); // Set loading state to true

    try {
      const response = await axios.post("http://localhost:1000/login", { email, password });
      console.log("Login successful:", response.data);
      
      // Assuming the response contains user information
      localStorage.setItem('user', JSON.stringify(response.data.user)); // Store user info in local storage
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please check your email and password."); // Set error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div 
      style={{ 
        backgroundImage: `url(${nature})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }} 
      className="relative w-screen h-screen flex items-center justify-center"
    >
      <div className="bg-black bg-opacity-20 p-8 rounded-lg shadow-lg backdrop-blur-md absolute right-0 bottom-0 mb-32 mr-[19vw]">
        <form 
          onSubmit={handlersubmit}
          className="flex flex-col items-center justify-center w-full max-w-md"
        >
          <h1 className="text-2xl font-bold mb-6 text-white">Login</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message */}
          <div className="input-wrapper mb-4 w-full">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-full w-full bg-white" 
              placeholder="Enter your e-mail address" 
              required 
            />
          </div>
          <div className="input-wrapper mb-4 w-full">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 rounded-full w-full bg-white" 
              placeholder="Enter your password" 
              required 
            />
          </div>
          <div className="remember-forgot flex items-center justify-between w-full mb-4 gap-4">
            <div className="flex items-center">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="ml-2 text-white">Remember me</label>
            </div>
            <a href="#" className="text-sm text-blue-600">Forgot password?</a>
          </div>
          <button 
            type="submit" 
            className={`bg-blue-600 text-white rounded-full px-6 py-2 hover:bg-blue-700 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Logging in...' : 'Login'} {/* Show loading text */}
          </button>
          <div className="register-link mt-4 text-center">
            <p className="text-white">Don’t have an account? <Link to="/register" className="text-blue-600">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
 );
};

export default Login;