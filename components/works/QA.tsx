import React from 'react'
import { motion } from 'framer-motion';
import { BsApple } from "react-icons/bs";
import BulletPoint from './BulletPoint';


const QA = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2, delay: 0.1}}
    className='w-full'    
    >
      {/* JOB TITLE & COMPANY */}
      <h3 className='flex gap-1 font-medium text-xl font-titleFont flex-col sml:flex-row'>
        Game Designer | Freelance
        <span className='text-sm mt-1 font-medium text-textGreen flex'>
          @ Modding
          &ensp; 
        </span>
      </h3>
      
      {/* Working Dates */}
      <p className='pt-3'>September 2020 - January 2023</p>

      {/* INTRODUCTION */}
      <p className='mt-3 text-base font-light flex gap-2 text-textDark'><strong>
      Accumulated extensive freelance experience developing over 20 distinct video game mods:
      </strong></p>

      {/* Bullet Points */}
      <ul className='mt-4 flex flex-col gap-3 text-textDark'>
        
        <BulletPoint
          headningText='Design Principles'
          contentText="Applied fundamental design principles for cohesive gameplay experiences."
        />

        <BulletPoint
          headningText='User-Centered Design'
          contentText="Prioritized user-centric design to enhance player engagement."
        />

        <BulletPoint
          headningText='Quality Assurance'
          contentText="Ensured high-quality gameplay through rigorous testing."
        />

      </ul>

    </motion.div>
  )
}

export default QA;