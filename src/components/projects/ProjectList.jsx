import React from 'react'

function ProjectList({project}) {
  return (
    <div>
        <div>
          <div>
            {
              project.path ? (
                <a href={project.path} className='hover:opacity-90 opacity-100 dark:hover:text-[#5AE5C6] ' target="_blank" rel="noopener noreferrer">{
                    project.title
                  }
                </a>
              ): (
                <span className=' '>{
                    project.title
                  }
                </span>
              )
            }
            <span className='text-sm font-bold'>
              &nbsp; ({
                project.path ? 'Public' : 'Private'
              })
            </span>
          </div>
          <div>
            <text className="text-base opacity-60 ">
              { project.description?.length > 100 ?  project.description.slice(0, 100) + '...' :  project.description }
            </text>
          </div>
          <div className="text-md opacity-80 flex flex-wrap gap-4 text-sm " >
            { project.skills.map(skill=>(
              <span>
                .{skill}
              </span>
            ))}
          </div>
          
        </div>
    </div>
  )
}

export default ProjectList