import React, { useRef }  from 'react'
import HeroSection from './heroSection/HeroSection'
import SocialMedia from './socialMedia/SocialMedia'
import About from './about/About'
import Projects from './projects/Projects'
import Footer from './footer/Footer'

export default function Home({homeRef, aboutRef, projectsRef}) {

  return (
   <div className="w-full min-h-screen pt-36">
        <div className='text-[#0A192F] dark:text-[#8892b0] px-4 mx-auto 
            justify-between lg:max-w-7xl md:items-center md:px-1
            '>
            <div className="md:px-24">
                <div className="space-y-10">
                    <HeroSection homeRef={homeRef}/>
                    <About aboutRef={aboutRef}/>
                    <Projects projectsRef={projectsRef}/>
                    <Footer/>
                </div>
            </div>
        </div>
        <SocialMedia />
    </div>
  )
}