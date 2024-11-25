import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

const Dashboard = () => {
  const location = useLocation();
  const { userScore: score } = location.state || {}; // Handle undefined state gracefully
  const navigate = useNavigate();

  const [isHighScore, setIsHighScore] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    // Set high score condition
    if (score >= 4) {
      setIsHighScore(true);
    }

    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup resize listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [score]);

  // Back to quiz handler
  const back = () => {
    navigate("/quiz");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#09001d] relative">
      {isHighScore && <Confetti width={windowWidth} height={windowHeight} />}
      
      <div className="bg-[#C40094] shadow-md rounded-lg p-8 max-w-md w-full relative z-10 shadow-lg drop-shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-4 text-white">Dashboard</h1>
        
        <button
          onClick={back}
          className="bg-white text-[#C40094] font-semibold px-4 py-2 rounded-lg transition duration-300 hover:bg-[#C40094] hover:text-white border border-[#C40094]"
        >
          Back to Quiz
        </button>
        
        <div className="bg-gray-200 p-6 rounded-lg text-center mt-4">
          {score !== undefined ? (
            <p className="text-2xl text-black">
              Your Score: <span className="font-semibold text-[#C40094]">{score}</span>
            </p>
          ) : (
            <p className="text-xl text-red-600">No score available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
