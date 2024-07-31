import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";


function HeroSection({homeRef}) {    

  const theme = useSelector((state)=> state.theme.theme);
  const [myBg , setMyBg] = useState(theme)

  useEffect(()=>{
    setMyBg(theme)
  },[ theme])



  return (
    <div className="w-full flex items-center"  id="home" ref={homeRef}>
        <div className='
            justify-between lg:max-w-7xl md:items-center md:flex w-full
            '>
            <div className="w-full text-center md:text-start relative">
                <div className="absolute right-0 bottom-0">
                <motion.div
                  initial={{ x: 500, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="motion-div"
                >
                  {
                    myBg === 'dark' ? (
                      <img src="./bg_blue.png" alt="" className='w-full opacity-30 md:opacity-50'/>
                    ): (
                      <img src="./bg_gray.png" alt="" className='w-full opacity-40 md:opacity-50'/>
                    )
                  }
                </motion.div>
                </div>
                <div className="col-span-2 z-10 relative">
                  <div className=''>
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                      className="motion-div"
                    >
                      <span className='pl-1 dark:text-[#5AE5C6] text-base opacity-80 dark:opacity-100'>
                        ~$ Whoami
                      </span>
                    </motion.div>
                  </div>
                  <div className=''>
                    
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="motion-div"
                    >
                      <h2 className='text-6xl text-[#0A192F] leading-tight font-semibold dark:text-[#CCD6F6]'>
                        Ouchkaih Ismail.
                      </h2>
                    </motion.div>
                   
                   
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="motion-div"
                    >
                      <h2 className='text-5xl leading-tight font-semibold text-[#0A192F] opacity-70 dark:opacity-100 dark:text-[#8892b0]'>
                        Full Stack Web Developer.
                      </h2>
                    </motion.div>
                    <div className='mt-4'>
                      <p className='text-[#0A192F]  dark:text-[#8892b0] '>
                        <motion.div
                          initial={{ x: -100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="motion-div"
                        >
                          <span className='pl-1 dark:text-[#5AE5C6] text-base opacity-80 dark:opacity-100'>
                            ~$ Sudo Whoami 
                          </span> <br/>  
                      </motion.div>
                      <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.58 }}
                        className="motion-div"
                      >     
                        <span className='text-6xl text-[#0A192F] leading-tight font-semibold dark:text-[#CCD6F6]'>Raivox</span> 
                      </motion.div>
                      </p>
                    </div>
                    <motion.div
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.58 }}
                      className="motion-div"
                    > 
                      <button className="bg-[#0A192F] dark:bg-[#5AE5C6] navbar_btn my-8 ">
                        <span className="button_top w-44 text-[#0A192F] dark:text-[#5AE5C6] font-medium border-[1px] border-[#0A192F] dark:border-[#5AE5C6] bg-[#FDFAF6] dark:bg-[#0A192F]"> Contact Me
                        </span>
                      </button>
                    </motion.div>
                  </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default HeroSection