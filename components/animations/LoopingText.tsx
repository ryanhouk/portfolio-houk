import { motion } from 'framer-motion';
import React from 'react';

const LoopingText: React.FC = () => {
  return (
    <div className="overflow-hidden relative w-full h-32 flex items-center justify-start">
      <motion.div
        className="whitespace-nowrap text-4xl font-bold text-white lg:text-7xl" // Making the text larger
        initial={{ x: '100vw' }} // Start off the right edge of the screen
        animate={{ x: '-100vw' }} // End off the left edge of the screen
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 40, // Duration for the text to move across the screen, adjust as needed
          ease: "linear",
        }}
      >
        Single Looping Text
      </motion.div>
    </div>
  );
};

export default LoopingText;
