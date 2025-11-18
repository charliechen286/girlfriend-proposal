import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Page2 = ({ nextPage, selectedOptions, setSelectedOptions }) => {
  const options = [
    // Positive choices
    "You make me laugh every day",
    "Your smile lights up my world",
    "You're incredibly smart and talented",
    "You have the kindest heart",
    "You challenge me to be better",
    "You're my favorite person to talk to",
    "You understand me like no one else",
    "You're beautiful inside and out",
    "We have amazing chemistry",
    // Funny/satire choices
    "You owe me money",
    "Your dog likes me",
    "I already told my mom about you",
    "It's free real estate",
    "The voices in my head said yes"
  ];

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const canContinue = selectedOptions.length >= 9 && 
    selectedOptions.some(opt => !options.slice(9).includes(opt));

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="animated-text">why should i date you?</h1>
      <p className="subtitle">choose at least 9!</p>
      
      <div className="options-grid">
        {options.map((option, index) => (
          <div
            key={index}
            className={`option-item ${selectedOptions.includes(option) ? 'selected' : ''} ${
              index >= 9 ? 'satire' : ''
            }`}
            onClick={() => toggleOption(option)}
          >
            {option}
          </div>
        ))}
      </div>

      <p className="subtitle">Selected: {selectedOptions.length}/9</p>

      <button 
        className="continue-btn" 
        onClick={nextPage}
        disabled={!canContinue}
      >
        {canContinue ? "Continue" : `Choose ${9 - selectedOptions.length} more valid options`}
      </button>
    </motion.div>
  );
};

export default Page2;