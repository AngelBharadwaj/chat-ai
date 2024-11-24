import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();
  const [isQuizActive, setQuizActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isPopupActive, setPopupActive] = useState(false);

  const questions = [
    {
      numb: 1,
      question: "Find the least number which when divided by 6, 7, and 9 leaves the remainder 1, 2, and 4 respectively.",
      answer: "A. 121",
      options: ["A. 121", "B. 124", "C. 125", "D. 126"],
    },
    {
      numb: 2,
      question: "Find the value of 29.94/1.45, if the value of 2994/14.5=172.",
      answer: "A. 17.2",
      options: ["A. 17.2", "B. 1.72", "C. 172", "D. 0.172"],
    },
    {
      numb: 3,
      question: "Simplify the value [489.1375*0.0483*1.956]/[0.0873*92.581*99.749], and then find the value closest to it.",
      answer: "A. 0.06",
      options: ["A. 0.06", "B. 0.6", "C. 6", "D. 0.006"],
    },
    {
      numb: 4,
      question: "Evaluate: (2.39^2-1.61^2)/(2.39-1.61)",
      answer: "B. 4",
      options: ["A. 2", "B. 4", "C. 3", "D. 5"],
    },
    {
      numb: 5,
      question: "Find the unknown value in the given equation: 3889 + 12.952 - ? = 3854.002",
      answer: "B. 47.95",
      options: ["A. 479.5", "B. 47.95", "C. 4.795", "D. 4795"],
    },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setUserScore((prevScore) => prevScore + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setSelectedOption(null);
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const startQuiz = () => {
    setQuizActive(true);
    setPopupActive(true);
  };

  const exitQuiz = () => {
    setQuizActive(false);
    setCurrentQuestion(0);
    setUserScore(0);
    setSelectedOption(null);
    navigate("/dashboard", { state: { userScore } });
  };

  const continueQuiz = () => {
    setPopupActive(false);
  };

  return (
    <div className="container">
      {isQuizActive ? (
        <section className="quiz-section">
          <div className="quiz-box">
            <h1>Aptitude Round</h1>
            <div className="quiz-header">
              <span>Quiz website Tutorials</span>
            </div>
            {showResult ? (
              <div className="result-box">
                <h2>Quiz Result!</h2>
                <div className="percentage-container">
                  <div className="circular-progress">
                    <span className="progress-value">
                      {(userScore / questions.length) * 100}%
                    </span>
                  </div>
                  <span className="score-text">Your Score {userScore} out of {questions.length}</span>
                </div>
                <div className="buttons">
                  <button className="tryAgain-btn" onClick={exitQuiz}>Try Again</button>
                  <button className="goHome-btn" onClick={() => navigate("/")}>Go To Home</button>
                </div>
              </div>
            ) : (
              <>
                <h2 className="question-text">
                  {questions[currentQuestion].question}
                </h2>
                <div className="option-list">
                  {questions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="option" onClick={() => handleOptionClick(option)}>
                      <span>{option}</span>
                    </div>
                  ))}
                </div>
                <div className="quiz-footer">
                  <span className="question-total">
                    {currentQuestion + 1} of {questions.length} questions
                  </span>
                  <button className="next-btn" onClick={nextQuestion} disabled={!selectedOption}>
                    Next
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      ) : (
        <section className="home">
          <div className="home-content">
            <h1>Interview Guide</h1>
            <p>Aptitude. Technical Round. Group Discussion. The Interview</p>
            <button className="start-btn" onClick={startQuiz}>Start Quiz</button>
          </div>
        </section>
      )}
      {isPopupActive && (
        <div className="popup-info">
          <h2>Quiz Guide</h2>
          <span className="info">1. Attending all the questions is mandatory</span>
          <span className="info">2. Complete the quiz on time</span>
          <span className="info">3. Keep all the required things within reach</span>
          <span className="info">4. Minimize distractions and stay focused on the quiz.</span>
          <span className="info">5. Follow all the rules and guidelines</span>
          <div className="btn-group">
            <button className="info-btn exit-btn" onClick={exitQuiz}>Exit Quiz</button>
            <button className="info-btn continue-btn" onClick={continueQuiz}>Continue</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;