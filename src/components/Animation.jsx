import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedScreen = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'linear' }}
    >
      {children}
    </motion.div>
  );
};




  
export const A = ({ children }) => {
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 1, scale: 0 }}
        transition={{ duration: 1, scale: { duration: 0.0 }, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
//   
    )}
    
    export const A2 = ({ children }) => {
      return (
          <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 1, scale: 0 }}
          transition={{ duration: 0.7, scale: { duration: 0.0 }, ease: 'easeInOut' }}
        >
          {children}
        </motion.div>
     
      )}