import React, { useState } from 'react';
import nature from '../assets/ed.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  // State to store form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  // Handler for form submission
  const registerHandler = (event) => {
    event.preventDefault(); // Prevents page reload on form submit

    // Making a POST request to register user
    axios.post('http://localhost:3000/register', { name, email, password })
      .then((res) => {
        console.log('Registration successful:', res.data);
        navigate("/login")
       
      })
      .catch((error) => {
        console.error('Registration failed:', error);
        // Display error message to user, if needed
      });
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
          onSubmit={registerHandler}
          className="flex flex-col items-center justify-center w-full max-w-md"
        >
          <h1 className="text-2xl font-bold mb-6 text-white">Register</h1>
          <div className="input-wrapper mb-4 w-full">
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 rounded-full w-full bg-white" 
              placeholder="Enter your name" 
              required 
            />
          </div>
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
          <button 
            type="submit" 
            className="bg-blue-600 text-white rounded-full px-6 py-2 hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>
          <div className="register-link mt-4 text-center">
            <p className="text-white">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
