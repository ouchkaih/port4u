import React from 'react'
import CanvasModel from '../3d-model/CanvasModel'
import RightContainer from '../containers/RightContainer'

function About({aboutRef}) {
  let about = `
  I am a full stack developer with a passion for technology and problem solving. 
  In addition to my studies and my experience, I have been involved in many projects and activities in the IT industry, through this I saw myself as a creative thinker who is able to come up with innovative ideas and solutions.`
  return (
    <div className=""  id="about" ref={aboutRef}>
      <RightContainer title={"about me"} number="1" img="dsaf"
        imgComp={(
          <div className='flex justify-center items-center'>
            <div className="w-52 h-52 shadow-[0_20px_50px_rgba(0,_0,_0,_0.4)]  dark:shadow-[0_20px_50px_rgba(90,_229,_198,_0.4)] rounded-full ">
            <div className=" w-52 h-52 rounded-full border-2 border-[#0A192F] overflow-hidden dark:border-[#5AE5C6]
              transition-transform duration-500 ease-linear hover:rotate-[360deg] " style={{
                backgroundImage: "url('./owl.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>
                <div className='bg-[#0A192F] dark:bg-[#36ad93] w-52 h-52 backdrop-blur-3xl opacity-10'></div>
              </div>
            </div>
          </div>
        )}
      >
        <div className="text-center md:text-left">
          <span className=''>
            &nbsp;&nbsp;&nbsp; {about}
          </span>
        </div>
      </RightContainer>
    </div>

  )
}

export default About