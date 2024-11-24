import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const Geminiquiz = () => {
    const [story, setStory] = useState('');
    const [loading, setLoading] = useState(false);
    const [includeDetails, setIncludeDetails] = useState(false);
    const [questionAmount, setQuestionAmount] = useState(10);
    const [company, setCompany] = useState("Google"); // State for selected company
    const genAI = new GoogleGenerativeAI("AIzaSyDrD8awgIZlsi0QBmbKPiVzsBXVd9lsQyA"); // Use your API key from environment variables

    const generateStory = async () => {
        setLoading(true);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        // Fix the prompt string with backticks
        const prompt = `${company} product-based company quiz with ${questionAmount} questions${includeDetails ? ' and detailed answers' : ''}.`;

        try {
            const result = await model.generateContent(prompt);
            setStory(result.response.text());
        } catch (error) {
            console.error('Error generating content:', error);
            setStory('An error occurred while generating the story.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-auto">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-4">Product Based Company Quiz Generator</h1>

                <div className="mb-4">
                    <label htmlFor="company" className="block text-gray-700 mb-2">Select Company:</label>
                    <select 
                        id="company" 
                        value={company} 
                        onChange={(e) => setCompany(e.target.value)} 
                        className="w-full p-2 border rounded"
                    >
                        <option value="Google">Google</option>
                        <option value="Amazon">Amazon</option>
                        <option value="Microsoft">Microsoft</option>
                        <option value="Apple">Apple</option>
                        <option value="Facebook">Facebook</option>
                    </select>
                </div>

                <div className="flex items-center mb-4">
                    <input 
                        type="checkbox" 
                        id="includeDetails" 
                        checked={includeDetails} 
                        onChange={() => setIncludeDetails(!includeDetails)} 
                        className="mr-2"
                    />
                    <label htmlFor="includeDetails" className="text-gray-700">Include detailed questions</label>
                </div>

                <div className="mb-4">
                    <label htmlFor="questionAmount" className="block text-gray-700 mb-2">Number of Questions:</label>
                    <input 
                        type="number" 
                        id="questionAmount" 
                        value={questionAmount} 
                        onChange={(e) => setQuestionAmount(Math.max(1, e.target.value))} // Ensure at least 1
                        className="w-full p-2 border rounded"
                        min="1"
                    />
                </div>

                <button 
                    onClick={generateStory} 
                    className={`mt-4 w-full p-2 text-white rounded hover:bg-blue-600 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'}`}
                    disabled={loading}
                >
                    {loading ? (
                        <span className="flex items-center justify-center">
                            <svg
                                className="animate-spin h-5 w-5 mr-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 108 8 8 8 0 00-8-8zm0 0a8 8 0 000-8 8 8 0 00-8 8z" />
                            </svg>
                            Generating...
                        </span>
                    ) : (
                        'Generate Quiz'
                    )}
                </button>

                {story && (
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">Generated Quiz:</h2>
                        <p className="mt-2 text-gray-700 p-2">{story}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Geminiquiz;
