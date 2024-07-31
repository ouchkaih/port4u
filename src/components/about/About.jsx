import React from 'react'
import CanvasModel from '../3d-model/CanvasModel'
import RightContainer from '../containers/RightContainer'

function About({aboutRef}) {
  let about = `
  I am a full stack developer with a passion for technology and problem solving. 
  In addition to my studies and my experience, I have been involved in many projects and activities in the IT industry, through this I saw myself as a creative thinker who is able to come up with innovative ideas and solutions.`
  return (
    <div className=""  id="about" ref={aboutRef}>
      <RightContainer title={"about me"} number="1">
        <div className="">
          <span className=''>
            &nbsp;&nbsp;&nbsp; {about}
          </span>
        </div>
      </RightContainer>
    </div>

  )
}

export default About