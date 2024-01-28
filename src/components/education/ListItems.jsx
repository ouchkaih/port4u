import React from 'react'

function ListItems({diplom}) {
  return (
    <div>
        <div>
          <span className='opacity-90'>{
              diplom.period
            }
          </span>
          <h3 className="text-xl font-bold">
            { diplom.field}
          </h3>
          <h4 className="text-md opacity-80" >
            { diplom.school}
          </h4>
        </div>
    </div>
  )
}

export default ListItems