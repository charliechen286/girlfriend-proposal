import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Page3 = ({ nextPage }) => {
  const [selectedCorrect, setSelectedCorrect] = useState(false);
  const [wrongSelected, setWrongSelected] = useState(false);
  const [currentWrongIndex, setCurrentWrongIndex] = useState(0);

  // Replace these with your actual image paths
  const herPhoto = require('../assets/images/her-photo.jpg');
  const otherPhotos = [
    require('../assets/images/other-photo1.jpg'),
    require('../assets/images/other-photo2.jpg'),
    require('../assets/images/other-photo3.jpg'),
    require('../assets/images/other-photo4.jpg'),
    require('../assets/images/other-photo5.jpg')
  ];

  const handleCorrectSelect = () => {
    setSelectedCorrect(true);
    setTimeout(nextPage, 1500);
  };

  const handleWrongSelect = () => {
    setWrongSelected(true);
    // Cycle to the next wrong image
    setCurrentWrongIndex((prevIndex) => (prevIndex + 1) % otherPhotos.length);
    setTimeout(() => setWrongSelected(false), 500);
  };

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="animated-text">who is cuter!</h1>
      
      <div className="pictures-container">
        <motion.img
          src={herPhoto}
          alt="The One and Only"
          className={`picture-option correct ${selectedCorrect ? 'selected' : ''}`}
          onClick={handleCorrectSelect}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
        
        <motion.img
          src={otherPhotos[currentWrongIndex]}
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