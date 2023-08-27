import React from 'react'

function About() {
  let about = `
  I am a full stack development with a passion for technology and problem solving. 
  In addition to my studies and my experience, I have been involved in many projects and activities in the IT industry, through this I saw myself as a creative thinker who is able to come up with innovative ideas and solutions.`
  return (
    <div>
      <div className="grid grid-cols-2 px-1">
        <div className="">
          hello
        </div>
        <div className="">
          <h3 className="capitalize text-2xl text-[] mb-3 dark:text-[#CCD6F6] font-semibold"><span className="text-[#0A192F] font-bold dark:text-[#5AE5C6] text-base ">1.</span> about me</h3>
          <span className=''>
           &nbsp;&nbsp;&nbsp; {about}
          </span>
        </div>
      </div>
    </div>
  )
}

export default About