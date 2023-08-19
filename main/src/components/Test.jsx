import React, { useState } from 'react'
import {DarkModeToggle} from 'darkmode-toggle-react'
function Test() {
    const [theme , setTheme ] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');  

  return (
    <div className='bg-red-300 min-h-screen min-w-full'>
      fdsa
        <DarkModeToggle  theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default Test