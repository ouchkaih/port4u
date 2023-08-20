import React from 'react'
import HeroSection from './heroSection/HeroSection'
import SocialMedia from './socialMedia/SocialMedia'

export default function Home() {
  return (
   <div className="w-full h-screen">
        <div className='text-[#0A192F] dark:text-gray-200 px-4 mx-auto 
            justify-between lg:max-w-7xl md:items-center md:px-1
            '>
            <div className="grid grid-cols-2">
                <div className="">
                    <HeroSection/>
                </div>
            </div>
        </div>
        <SocialMedia/>
    </div>
  )
}