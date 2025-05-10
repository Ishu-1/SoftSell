'use client';

import { useState } from 'react';
import { FaComment, FaTimes, FaPaperPlane } from 'react-icons/fa';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const predefinedQuestions = [
    "How do I sell my license?",
    "What types of licenses do you accept?",
    "How long does the process take?",
    "What payment methods do you offer?"
  ];

  const mockResponse = (question) => {
    const responses = {
      "How do I sell my license?": "You can start by filling out our contact form with details about your license. Our team will then provide a valuation.",
      "What types of licenses do you accept?": "We accept most major software licenses including Microsoft, Adobe, Autodesk, and Oracle.",
      "How long does the process take?": "Typically, you'll receive a valuation within 24 hours. Payment is processed within 48 hours.",
      "What payment methods do you offer?": "We offer payments via bank transfer, PayPal, or check."
    };
    
    return responses[question] || "I'm sorry, I didn't understand that question. Could you try asking something else?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = { text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate response after a delay
    setTimeout(() => {
      const response = { text: mockResponse(inputValue), sender: 'ai' };
      setMessages(prev => [...prev, response]);
    }, 500);
  };

  const handlePredefinedQuestion = (question) => {
    setInputValue(question);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">SoftSell Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <FaTimes />
            </button>
          </div>
          
          <div className="flex-1 p-3 overflow-y-auto">
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-2">Hi! I'm your SoftSell assistant. How can I help you today?</p>
              <div className="space-y-2">
                {predefinedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handlePredefinedQuestion(question)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
            
            {messages.map((message, index) => (
              <div key={index} className={`mb-3 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block px-3 py-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-3 border-t">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your question..."
                className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white px-3 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <FaComment size={24} />
        </button>
      )}
    </div>
  );
}