import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import {socials} from './socials'
import { Link } from 'react-router-dom';

function SocialMedia() {

  return (
    <div className='hidden md:block'>
        <div className="fixed left-0 px-5 bottom-0 mx-auto lg:max-w-7xl justify-center flex-col items-center">
          <div>
            {
              socials.map((icon)=>(
                <Link to={icon.path} className='opacity-70 dark:opacity-100 flex justify-center m-5 mx-0 md:mx-3 dark:text-[#9e9e9e] dark:hover:text-[#5AE5C6] ' aria-label={icon.name} title={icon.name}>{icon.icon} </Link>
              ))
            }
          </div>
          
          <div className="w-full flex justify-center">
            <div className="h-[90px] w-[2px] m-0 opacity-70 dark:opacity-100 bg-[#0A192F] dark:bg-[#9e9e9e] dark:hover:bg-[#5AE5C6]  "></div>
          </div>
        </div>
        <div className="fixed right-0 px-5 bottom-0 dark:text-[#9e9e9e] dark:hover:text-[#5AE5C6]">
          <div className='[writing-mode:vertical-lr] mb-5 font-semibold text-[15px] opacity-70 dark:opacity-100'>
            <Link to="mailto:ouchkaihismail@gmail.com">
              Ouchkaihismail@gmail.com
            </Link>
          </div>
          
          <div className="w-full flex justify-center">
            <div className="h-[90px] w-[2px] m-0 bg-[#0A192F]  opacity-70 dark:opacity-100 dark:bg-[#9e9e9e] dark:hover:bg-[#5AE5C6] "></div>
          </div>
        </div>
    </div>
  )
}

export default SocialMedia