import React, { useEffect, useRef } from 'react'
import ListStyle from '../education/ListStyle'
import ProjectList from './ProjectList'
import projects from './../../data/projects.json';
import { motion } from "framer-motion";

function Projects() {

    

  return (
    <div>
        <div className="grid grid-cols-2 px-1 py-8">
            <div className="">
                <h3 className="capitalize text-2xl mb-3 dark:text-[#CCD6F6] font-semibold"><span className="text-[#0A192F] font-bold dark:text-[#5AE5C6] text-base ">2.</span> Projects</h3>
                <div className=''>
                {
                    projects.projects.map((project, index)=>(
                        <div className='grid grid-cols-12' key={index}>
                            <ListStyle/>
                            <div className='col-span-11 pb-5'>
                                <motion.div
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    className="motion-div"
                                >
                                    <ProjectList project={project} />
                                </motion.div>
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