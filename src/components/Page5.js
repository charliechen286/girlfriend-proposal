import React from 'react';
import { motion } from 'framer-motion';

const Page5 = () => {
  // Replace these with your actual photos
  const photos = [
    require('../assets/images/your-photos/photo1.jpg'),
    require('../assets/images/your-photos/photo2.jpg'),
    require('../assets/images/your-photos/photo3.jpg'),
    require('../assets/images/your-photos/photo4.jpg'),
    require('../assets/images/your-photos/photo5.jpg'),
    require('../assets/images/your-photos/photo6.jpg'),
  ];

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="animated-text"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        Welcome to our beginning! 💕
      </motion.h1>

      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Here's to all the memories we'll make together
      </motion.p>

      <div className="collage">
        {photos.map((photo, index) => (
          <motion.img
            key={index}
            src={photo}
            alt={`Memory ${index + 1}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 + index * 0.2 }}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>

      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        I love you! 💖
      </motion.p>
    </motion.div>
  );
};

export default Page5;