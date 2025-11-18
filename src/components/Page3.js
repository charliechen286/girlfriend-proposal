import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Page3 = ({ nextPage }) => {
  const [selectedCorrect, setSelectedCorrect] = useState(false);
  const [wrongSelected, setWrongSelected] = useState(false);

  // Replace these with your actual image paths
  const herPhoto = require('../assets/images/her-photo.jpg');
  const otherPhoto = require('../assets/images/other-photo.jpg');

  const handleCorrectSelect = () => {
    setSelectedCorrect(true);
    setTimeout(nextPage, 1500);
  };

  const handleWrongSelect = () => {
    setWrongSelected(true);
    setTimeout(() => setWrongSelected(false), 500);
  };

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="animated-text">who is my favorite person!</h1>
      
      <div className="pictures-container">
        <motion.img
          src={herPhoto}
          alt="Alyssa Luo"
          className={`picture-option correct ${selectedCorrect ? 'selected' : ''}`}
          onClick={handleCorrectSelect}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
        
        <motion.img
          src={otherPhoto}
          alt="Someone else"
          className={`picture-option wrong ${wrongSelected ? 'shake' : ''}`}
          onClick={handleWrongSelect}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      </div>

      {selectedCorrect && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="subtitle"
        >
          congratulations! you found my favorite person!
        </motion.p>
      )}
    </motion.div>
  );
};

export default Page3;