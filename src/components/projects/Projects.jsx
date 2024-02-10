import React from 'react'
import ListStyle from '../education/ListStyle'
import ProjectList from './ProjectList'

function Projects() {
    let projectsList = [
        {
            title : 'TypeCliGenius',
            path: 'https://github.com/ouchkaih/TypeCliGenius',
            description: 'TypeCliGenius is a lightweight command-line interface (CLI) tool developed in TypeScript. This tool provides a straightforward way to perform various calculations and operations directly from the command line.',
            skills: [
                'TypeScript', 'Commanderjs', 'Figlet'
            ],
        },
        {
            title : 'TypeCliGenius',
            path: 'https://github.com/ouchkaih/TypeCliGenius',
            description: 'TypeCliGenius is a lightweight command-line interface (CLI) tool developed in TypeScript. This tool provides a straightforward way to perform various calculations and operations directly from the command line.',
            skills: [
                'TypeScript', 'Commanderjs', 'Figlet'
            ],
        },
        {
            title : 'TypeCliGenius',
            path: 'https://github.com/ouchkaih/TypeCliGenius',
            description: 'TypeCliGenius is a lightweight command-line interface (CLI) tool developed in TypeScript. This tool provides a straightforward way to perform various calculations and operations directly from the command line.',
            skills: [
                'TypeScript', 'Commanderjs', 'Figlet'
            ],
        }
        ,{
            title : 'TypeCliGenius',
            path: 'https://github.com/ouchkaih/TypeCliGenius',
            description: 'TypeCliGenius is a lightweight command-line interface (CLI) tool developed in TypeScript. This tool provides a straightforward way to perform various calculations and operations directly from the command line.',
            skills: [
                'TypeScript', 'Commanderjs', 'Figlet'
            ],
        }
    ]
  return (
    <div>
        <div className="grid grid-cols-2 px-1 py-8">
            <div className="">
                <h3 className="capitalize text-2xl mb-3 dark:text-[#CCD6F6] font-semibold"><span className="text-[#0A192F] font-bold dark:text-[#5AE5C6] text-base ">2.</span> Projects</h3>
                <div className=''>
                {
                    projectsList.map((project)=>(
                        <div className='grid grid-cols-12'>
                            <ListStyle/>
                            <div className='col-span-11 pb-5'>
                                <ProjectList project={project}/>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
            <div className="">
                hello
            </div>
            
        </div>
    </div>
  )
}

export default Projects