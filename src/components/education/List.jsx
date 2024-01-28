import React from 'react'
import ListItems from './ListItems'

function List({diplom}) {
  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-1 justify-center text-center '>
            <div className="w-6 h-6 flex justify-center items-center rounded-full border border-[#5AE5C6] mx-auto">
                <div className="w-3 h-3 rounded-full bg-[#5AE5C6]"></div>
            </div>
            <div className="border-l-2 border-[#5AE5C6] border-dashed h-full w-0 min-h-[39px] mx-auto"></div>
        </div>
        <div className='col-span-11 pb-8'>
            <ListItems diplom={diplom}/>
        </div>
    </div>
  )
}

export default List