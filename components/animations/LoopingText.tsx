import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  className?: string;
}; 

const LoopingText: React.FC = ({className}:Props) => {
  return (
    <div className={`overflow-hidden relative w-full h-32 flex items-center justify-start ${className}`}>
      <motion.div
        className="whitespace-nowrap text-4xl font-bold text-white lg:text-7xl font-clash flex gap-x-20"
        initial={{ x: '0vw' }} // Start off the right edge of the screen
        animate={{ x: '-100vw' }} // End off the left edge of the screen
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 40, // Duration for the text to move across the screen, adjust as needed
          ease: "linear",
        }}
      >
       <div>Dashboards</div>
       <div> Web Apps</div>
       <div>iOS & Android Apps</div>
       <div>tvOS</div>

      </motion.div>
    </div>
  );
};

export default LoopingText;
