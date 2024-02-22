import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from './useScrollAnimation';

function LeftContainer({ children, img }) {
    const isVisible = useScrollAnimation();

  return (
    
      <div className="grid grid-cols-2 px-1 py-8">
        <div className="">
            <motion.div 
                initial={{ x: isVisible ? 0 : 0 }} // Initially off-screen to the left if isVisible is false
                animate={{ x: isVisible ? -400 : 0 }}  // Animate to center if isVisible is true
                transition={{ duration: 1}} // Transition duration
                className={ !isVisible ? 'opacity-100' : 'opacity-0'}

            >
                <h3 className="capitalize text-2xl mb-3 dark:text-[#CCD6F6] font-semibold">
                    <span className="text-[#0A192F] font-bold dark:text-[#5AE5C6] text-base ">
                    2.
                    </span> 
                    Projects
                </h3>
            </motion.div>
            <motion.div 
                initial={{ x: isVisible ? 0 : 0 }} // Initially off-screen to the left if isVisible is false
                animate={{ x: isVisible ? -400 : 0 }}  // Animate to center if isVisible is true
                transition={{ duration: 1, delay: 0.1}} // Transition duration
                className={ !isVisible ? 'opacity-100' : 'opacity-0'}


            >
                <div className=''>
                    {children}
                </div>
            </motion.div>
        </div>
        <div className="">
          {img}
        </div>
      </div>
  );
}

export default LeftContainer;
