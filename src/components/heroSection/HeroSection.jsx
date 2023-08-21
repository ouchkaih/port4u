import React from 'react'
import SocialMedia from '../socialMedia/SocialMedia'

function HeroSection() {
  return (
    <div className="w-full h-screen py-8">
        <div className='px-4 mx-auto 
            justify-between lg:max-w-7xl md:items-center md:flex md:px-8
            '>
            <div className="md:grid md:grid-cols-3 text-center md:text-start">
                <div className="col-span-2 ">
                  <div className=''>
                    <span className='pl-1 dark:text-[#5AE5C6] opacity-80 dark:opacity-100'>
                      ~$ Whoami
                    </span>
                  </div>
                  <div className=''>
                    <h2 className='text-6xl text-[#0A192F] leading-tight font-semibold dark:text-[#CCD6F6]'>
                      Ouchkaih Ismail.
                    </h2>
                    <h2 className='text-6xl leading-tight font-semibold text-[#0A192F] opacity-70 dark:opacity-100 dark:text-[#8892b0]'>
                      Full Stack Web Developer.
                    </h2>
                    <div className='mt-4'>
                      <p className='text-[#0A192F]  dark:text-[#8892b0] '> 
                        <span className='pl-1 dark:text-[#5AE5C6] opacity-80 dark:opacity-100'>
                          ~$ Sudo Whoami 
                        </span> <br/>            
                        <span className='text-6xl text-[#0A192F] leading-tight font-semibold dark:text-[#CCD6F6]'>Raivox</span> 
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1"></div>
                
            </div>
        </div>
    </div>
  )
}

export default HeroSection