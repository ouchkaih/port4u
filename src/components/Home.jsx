import React from 'react'
import HeroSection from './heroSection/HeroSection'
import SocialMedia from './socialMedia/SocialMedia'
import About from './about/About'
import Education from './education/Education'

export default function Home() {
  return (
   <div className="w-full min-h-screen">
        <div className='text-[#0A192F] dark:text-[#8892b0] px-4 mx-auto 
            justify-between lg:max-w-7xl md:items-center md:px-1
            '>
            <div className="md:px-24">
                <div className="space-y-10">
                    <HeroSection/>
                    <About/>
                    <Education/>
                </div>
            </div>
        </div>
        <SocialMedia />
    </div>
  )
}