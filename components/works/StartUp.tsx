import React from 'react'
import { motion } from 'framer-motion';
import BulletPoint from './BulletPoint';


const StartUp = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2, delay: 0.1}}
    className='w-full'    
    >
      {/* JOB TITLE & COMPANY */}
      <div className='flex flex-wrap gap-1 font-medium text-xl font-titleFont flex-col sml:flex-row'>
        <h3>Director | Impact Studios</h3>
        <span className='text-sm mt-1 font-medium text-textGreen flex'>@ Start-up</span>
      </div>
      
      {/* Working Dates */}
      <p className='pt-3'>May 2021 - Present</p>

      {/* INTRODUCTION */}
      <p className='mt-3 text-base font-light flex gap-2 text-textDark'><strong>
      Implemented strategic vision into widely successfully adopted software product      </strong></p>

      {/* Bullet Points */}
      <ul className='mt-4 flex flex-col gap-3 text-textDark'>
        
        <BulletPoint
          headningText='Techinical Leadership'
          contentText="Hired and trained new employees on coding standards and workflow protocols "
        />

        <BulletPoint
          headningText='Professional Communication'
          contentText="Facilitated network growth with partners, employees, and investors"
        />

        <BulletPoint
          headningText='Project Management'
          contentText="Delivered software projects on time and within budget"
        />

      </ul>

    </motion.div>
  )
}

export default StartUp;