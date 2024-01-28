import React from 'react'
import SocialMedia from '../socialMedia/SocialMedia'
import { Link } from 'react-router-dom'

function HeroSection() {    
  return (
    <div className="w-full flex items-center">
        <div className='
            justify-between lg:max-w-7xl md:items-center md:flex 
            '>
            <div className="md:grid md:grid-cols-3 text-center md:text-start">
                <div className="col-span-2 ">
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
                <div className="col-span-1"></div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection