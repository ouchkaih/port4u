import React, { useEffect, useRef } from 'react'
import ListStyle from '../education/ListStyle'
import ProjectList from './ProjectList'
import projects from './../../data/projects.json';
import { motion } from "framer-motion";
import LeftContainer from '../containers/LeftContainer';

function Projects() {

    

  return (
    <LeftContainer img={<img src=""/>}>
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
    </LeftContainer>
  )
}

export default Projects