import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Login from './components/Login'; 
 import Register from './components/register'; 
 import Home from './components/Home';
 import Navbar from './components/Navbar'; 
 import About from './components/About';
  import Quiz from './components/Quiz'; 
  import Geminiquiz from './components/Geminiquiz';
   import Dashboard from './components/Dashboard';
    import PrivateRoutes from './components/Protectedroute'; // Ensure this path is correct

const App = () => {
  return (

      <div className='w-screen h-screen'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/quiz' element={<Quiz/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />


          {/* Protected Routes */}
        
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/dashboard" element={<Dashboard />} />
  
        </Routes>
      </div>

  );
}

export default App;
