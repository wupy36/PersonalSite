import React from 'react'
import { motion } from 'framer-motion';
import BulletPoint from './BulletPoint';


const Internship = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2, delay: 0.1}}
    className='w-full'    
    >
      {/* JOB TITLE & COMPANY */}
      <h3 className='flex gap-1 font-medium text-xl font-titleFont flex-col flex-wrap sml:flex-row'>
        Junior Game Designer & Programmer | Zero Hour Interactive
        <span className='text-sm mt-1 font-medium text-textViolet'>
          @ Consultant 
        </span>
      </h3>
      
      {/* Working Dates */}
      <p className='pt-3'>April 2023 - Present</p>

      {/* INTRODUCTION */}
      <p className='mt-3 text-base font-light flex gap-2 text-textDark'><strong>
      Collaborate with the Game Producer and Design Team to craft engaging experiences for Zero Hour Interactive:
      </strong></p>

      {/* Bullet Points */}
      <ul className='mt-4 flex flex-col gap-3 text-textDark'>

        <BulletPoint
          headningText='Upheld design standards collaboratively'
          contentText="Conceptualize, design, implement, and document game content and systems."
        />
        
        <BulletPoint
          headningText='Design and Integration Collaboration'
          contentText="Work closely with Developers on design challenges and content integration."
        />
        
        <BulletPoint
          headningText='Design Consistency Support'
          contentText="Ensure consistency in game design and quality, supporting other Game Designers and maintaining creative guidelines."
        />
        
      </ul>

    </motion.div>
  )
}

export default Internship;