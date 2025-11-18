import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Page1 = ({ nextPage }) => {
  const [currentText, setCurrentText] = useState(0);
  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  const texts = [
    "hey!",
    "i have an important question for you :)",
    "but first...",
    "what's your full name?"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentText < texts.length - 1) {
        setCurrentText(prev => prev + 1);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentText, texts.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.toLowerCase() === 'yutong alyssa luo') {
      nextPage();
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <motion.div 
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="animated-text float">
            {texts[currentText]}
          </h1>
        </motion.div>
      </AnimatePresence>

      {currentText === texts.length - 1 && (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onSubmit={handleSubmit}
          className={error ? 'shake' : ''}
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`name-input ${error ? 'error' : ''}`}
            placeholder="type your full name..."
          />
          {error && <p className="error-message">nope!</p>}
          <button type="submit" className="continue-btn">
            continue
          </button>
        </motion.form>
      )}
    </motion.div>
  );
};

export default Page1;