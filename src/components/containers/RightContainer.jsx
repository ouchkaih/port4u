import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimationR } from "./useScrollAnimationR";

function RightContainer({ children, imgComp , number, title}) {
    const isVisible = useScrollAnimationR();

  return (
    <div className="grid grid-cols-2 px-1 py-8">
      {imgComp}
      <div className="">
        <motion.div
          initial={{ x: isVisible ? 0 : 400 }} // Initially off-screen to the left if isVisible is false
          animate={{ x: isVisible ? 400 : 0 }} // Animate to center if isVisible is true
          transition={{ duration: 1 }} // Transition duration
            className={ !isVisible ? 'opacity-100' : 'opacity-0'}
        >
          <h3 className="capitalize text-2xl text-[] mb-3 dark:text-[#CCD6F6] font-semibold"><span className="text-[#0A192F] font-bold dark:text-[#5AE5C6] text-base ">{ number}. </span> {title}</h3>
        </motion.div>
        <motion.div
          initial={{ x: isVisible ? 0 : 1000 }} // Initially off-screen to the left if isVisible is false
          animate={{ x: isVisible ? 1000 : 0 }} // Animate to center if isVisible is true
          transition={{ duration: 1, delay: 0.1 }} // Transition duration
            className={ !isVisible ? 'opacity-100' : 'opacity-0'}

        >
          <div className="">{children}</div>
        </motion.div>
      </div>
    </div>
  );
}

export default RightContainer;
