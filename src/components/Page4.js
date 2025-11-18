import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Page4 = ({ nextPage }) => {
  const [noCount, setNoCount] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);

  const noMessages = [
    "are you sure???",
    "really sure??",
    "think again!",
    "last chance!",
    "you're breaking my heart 💔",
    "okay fine... just kidding! SAY YES!"
  ];

  const handleNoClick = () => {
    setNoCount(prev => prev + 1);
  };

  const handleYesClick = () => {
    setYesClicked(true);
    setTimeout(nextPage, 1000);
  };

  const getNoButtonText = () => {
    return noMessages[Math.min(noCount, noMessages.length - 1)];
  };

  const getYesButtonSize = () => {
    return Math.min(1 + noCount * 0.3, 3);
  };

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="animated-text">
        so alyssa ... will you be my girlfriend? 🤞
      </h1>

      <div className="yes-no-buttons">
        <motion.button
          className="yes-btn"
          onClick={handleYesClick}
          initial={{ scale: 1 }}
          animate={{ scale: getYesButtonSize() }}
          whileHover={{ scale: getYesButtonSize() * 1.1 }}
        >
          YES!
        </motion.button>

        <motion.button
          className="no-btn"
          onClick={handleNoClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {getNoButtonText()}
        </motion.button>
      </div>

      {yesClicked && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="subtitle"
        >
          YAY! 🎉
        </motion.p>
      )}
    </motion.div>
  );
};

export default Page4;