import React from 'react';
import { motion } from 'framer-motion';

const Page2 = ({ nextPage, selectedOptions, setSelectedOptions }) => {
  const options = [
    // Positive choices
    "your smile lights up my world",
    "you're the prettiest girl ever",
    "you care so much for those around you",
    "you have a beautiful soul",
    "you push me to be better",
    "you understand me like no one else",
    "you are the one and only yutog!",
    "you have impeccable song/movie recs",
    "you are the cutest sleepy orange cat!",
    // Funny/satire choices
    "you are NOT ksi",
    "you are a squirrel whisperer",
    "you gave me crunchy cookie m&ms",
    "you love matcha!",
    "i saw a sign in the stars"
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
      <h1 className="animated-text">why do i want to date you?</h1>
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

      <p className="selection-counter">selected: {selectedOptions.length}/9</p>

      <button 
        className="continue-btn" 
        onClick={nextPage}
        disabled={!canContinue}
      >
        {canContinue ? "continue" : `choose ${9 - selectedOptions.length} more valid options`}
      </button>
    </motion.div>
  );
};

export default Page2;