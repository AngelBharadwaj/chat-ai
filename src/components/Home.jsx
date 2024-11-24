import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100 overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Background Image */}
        <motion.img 
         
          className="w-full h-full object-cover" 
          src="https://images.pexels.com/photos/1438084/pexels-photo-1438084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Beautiful Landscape" 
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black bg-opacity-40">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.68, -0.55, 0.27, 1.55],
            }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Welcome to Our Website
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.68, -0.55, 0.27, 1.55],
            }}
            className="text-white text-lg md:text-xl max-w-3xl"
          >
            "Your Personalised Pathway to Engineering Success"
            <br/> "Prepare for your future with tailored resources and expert guidance"
            <br/> "Learn at your own pace, succeed in your own way"
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Home;
