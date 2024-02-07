import React from 'react'

import {socials} from './socials'
import { Link } from 'react-router-dom';

function SocialMedia() {

  return (
    <div className='hidden md:block -z-10'>
        <div className="fixed left-0 px-5 bottom-0 mx-auto lg:max-w-7xl justify-center flex-col items-center">
          <div>
            {
              socials.map((icon)=>(
                <Link to={icon.path} className='opacity-70 dark:opacity-100 flex justify-center m-5 mx-0 md:mx-3 dark:text-[#8892b0] dark:hover:text-[#5AE5C6] hover:text-[#0A192F] hover:opacity-100' aria-label={icon.name} title={icon.name}>{icon.icon} </Link>
              ))
            }
          </div>
          
          <div className="w-full flex justify-center">
            <div className="h-[90px] w-[2px] m-0 opacity-70 dark:opacity-100 bg-[#0A192F] dark:bg-[#8892b0] dark:hover:bg-[#5AE5C6]  "></div>
          </div>
        </div>
        <div className="fixed right-3 px-5 bottom-0  dark:text-[#8892b0] dark:hover:text-[#5AE5C6]">
          <div className='[writing-mode:vertical-lr] mb-5 font-semibold text-[15px] hover:text-[#0A192F] dark:hover:text-[#5AE5C6] hover:opacity-100 opacity-70 dark:opacity-100'>
            <Link to="mailto:ouchkaihismail@gmail.com">
              Ouchkaihismail@gmail.com
            </Link>
          </div>
          
          <div className="w-full flex justify-center">
            <div className="h-[90px] w-[2px] m-0 bg-[#0A192F]  opacity-70 dark:opacity-100 dark:bg-[#8892b0] dark:hover:bg-[#5AE5C6] "></div>
          </div>
        </div>
    </div>
  )
}

export default SocialMedia