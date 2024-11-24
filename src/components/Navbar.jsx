import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate

  useEffect(() => {
    const email = localStorage.getItem("user");
    if (email) {
      setUserEmail(email);
    }
  }, [userEmail]); // Run only once on mount

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("user");
    setUserEmail(''); // Clear userEmail state

    // Redirect after logout
    navigate('/login'); 
  };

  return (
    <div className='flex w-full h-[60px] text-black  fixed top-0 left-0 z-10 shadow-md'>
      <div className="left-nav w-1/2 flex items-center justify-center">
        <ul className='flex items-center justify-center gap-8'>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? 'text-white font-semibold p-2 rounded-md bg-teal-700' : 'text-white hover:bg-teal-500 hover:p-2 rounded-md')}
              aria-label="Home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => (isActive ? 'text-white font-semibold p-2 rounded-md bg-teal-700' : 'text-white hover:bg-teal-500 hover:p-2 rounded-md')}
              aria-label="About Us"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/register" 
              className={({ isActive }) => (isActive ? 'text-white font-semibold p-2 rounded-md bg-teal-700' : 'text-white hover:bg-teal-500 hover:p-2 rounded-md')}
              aria-label="Register"
            >
              Register
            </NavLink>
          </li>
         {userEmail&& <li>
            <NavLink 
              to="/quiz" 
              className={({ isActive }) => (isActive ? 'text-white font-semibold p-2 rounded-md bg-teal-700' : 'text-white hover:bg-teal-500 hover:p-2 rounded-md')}
              aria-label="quiz"
            >
              Quiz
            </NavLink>
          </li>}
        </ul>
      </div>

      <div className="right-nav w-1/2 flex items-center justify-end mr-10">
        {userEmail && <span className='text-white text-lg mr-4'>You are logged in as: {userEmail}</span>}
      {userEmail&&  <button onClick={handleLogout} className='text-white p-2 bg-red-600 rounded hover:bg-red-700 transition duration-200 ease-in-out'>
          Logout
        </button>}
        <h1 className="text-xl font-bold text-white p-2 leading-none underline animate-pulse">
          Placement Acer
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
