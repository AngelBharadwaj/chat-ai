import React from 'react';
import nature  from '../assets/img.jpg'

const About = () => {
  return (
    <div
    style={{ 
        backgroundImage: `url(${nature})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }} 
    
    className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4 animate-bounce">About Us</h1>
      <p className="text-lg text-center max-w-2xl">
        Welcome to our website! We are dedicated to provide you with the best experience possible. Our mission is to deliver high-quality content and services that meet your needs.
        <br /><br />
        Our team is comprised of passionate individuals who strive to make a difference. Thank you for visiting our website, and we hope you find what you're looking for!
      </p>
    </div>
  );
}

export default About;