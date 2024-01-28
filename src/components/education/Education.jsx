import React from 'react'
import List from './List'

function Education() {
  let diplomas = [
    {
        period: 'My Lifetime', 
        field: 'Life and Existence',
        school: '​Universe',
    },
    {
        period: 'Dec 2022 - Jun 2023', 
        field: 'Full-Stack Development',
        school: 'Specialized Institute Of Applied Technology, Sidi Maarouf, Casablanca Morocco',
    },
    {
        period: 'Dec 2021 - Jun 2022', 
        field: 'Web Development',
        school: 'Specialized Institute Of Applied Technology, Sidi Maarouf, Casablanca Morocco',
    },
    {
        period: 'Dec 2020 - Jun 2021', 
        field: 'Physical And Chemical Sciences(BAC)',
        school: 'El-jadid high school, TATA Morocco',
    },

  ]
  
  return (
    <div>
      <div className="grid grid-cols-2 px-1 py-8">
        <div className="">
          <h3 className="capitalize text-2xl text-[] mb-3 dark:text-[#CCD6F6] font-semibold"><span className="text-[#0A192F] font-bold dark:text-[#5AE5C6] text-base ">2.</span> Education</h3>
          <span className=''>
            {
                diplomas.map((diplom)=>(
                    <List diplom={diplom}/>                
                ))
            }
          </span>
        </div>
        <div className="">
          hello
        </div>
      </div>
    </div>
  )
}

export default Education