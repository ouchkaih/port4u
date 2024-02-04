import React from 'react'
import ListItems from './ListItems'
import ListStyle from './ListStyle'

function List({diplom}) {
  return (
    <div className='grid grid-cols-12'>
        <ListStyle/>
        <div className='col-span-11 pb-5'>
            <ListItems diplom={diplom}/>
        </div>
    </div>
  )
}

export default List