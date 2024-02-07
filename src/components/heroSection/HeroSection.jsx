import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function HeroSection() {    

  const theme = useSelector((state)=> state.theme.theme);
  const [myBg , setMyBg] = useState(theme)

  useEffect(()=>{
    setMyBg(theme)
  },[ theme])



  return (
    <div className="w-full flex items-center">
        <div className='
            justify-between lg:max-w-7xl md:items-center md:flex w-full
            '>
            <div className="w-full text-center md:text-start relative">
                <div className="absolute right-0 bottom-0">
                  {
                    myBg === 'dark' ? (
                      <img src="./bg_blue.png" alt="" className='w-full opacity-30 md:opacity-50'/>
                    ): (
                      <img src="./bg_gray.png" alt="" className='w-full opacity-40 md:opacity-50'/>
                    )
                  }
                </div>
                <div className="col-span-2 z-10 relative">
                  <div className=''>
                    <span className='pl-1 dark:text-[#5AE5C6] text-base opacity-80 dark:opacity-100'>
                      ~$ Whoami
                    </span>
                  </div>
                  <div className=''>
                    <h2 className='text-6xl text-[#0A192F] leading-tight font-semibold dark:text-[#CCD6F6]'>
                      Ouchkaih Ismail.
                    </h2>
                    <h2 className='text-5xl leading-tight font-semibold text-[#0A192F] opacity-70 dark:opacity-100 dark:text-[#8892b0]'>
                      Full Stack Web Developer.
                    </h2>
                    <div className='mt-4'>
                      <p className='text-[#0A192F]  dark:text-[#8892b0] '> 
                        <span className='pl-1 dark:text-[#5AE5C6] text-base opacity-80 dark:opacity-100'>
                          ~$ Sudo Whoami 
                        </span> <br/>            
                        <span className='text-6xl text-[#0A192F] leading-tight font-semibold dark:text-[#CCD6F6]'>Raivox</span> 
                      </p>
                    </div>
                    <button className="bg-[#0A192F] dark:bg-[#5AE5C6] navbar_btn my-8 ">
                        <span className="button_top w-44 text-[#0A192F] dark:text-[#5AE5C6] font-medium border-[1px] border-[#0A192F] dark:border-[#5AE5C6] bg-[#FDFAF6] dark:bg-[#0A192F]"> Contact Me
                        </span>
                    </button>
                  </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default HeroSection