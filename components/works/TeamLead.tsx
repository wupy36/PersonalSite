import React from 'react'
import { motion } from 'framer-motion';
import { BsApple } from "react-icons/bs";
import BulletPoint from './BulletPoint';


const TeamLead = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2, delay: 0.1}}
    className='w-full min-h-fit'    
    >
      {/* JOB TITLE & COMPANY */}
      <div className='flex flex-wrap gap-1 font-medium text-xl font-titleFont flex-col sml:flex-row'>
        <h3>
          HTM Engineering Technician III - Mayo Clinic
        </h3>
        <span className='text-sm mt-1 font-medium text-textViolet flex'>
          @ Engineering Technician
          &ensp; 
        </span>
      </div>
      
      {/* Working Dates */}
      <p className='pt-3'>June 2019 - Present</p>

      {/* INTRODUCTION */}
      <p className='mt-3 text-base font-light flex gap-2 text-textDark'><strong>
        Serve as a technical resource for maintaining industrial 3D printers, ensuring maximum uptime for manufacturing anatomical models.        <br/>
      </strong></p>

      {/* Bullet Points */}
      <div className='min-h-fit'>
        <ul className='mt-4 flex flex-col gap-3 text-textDark'>

          <BulletPoint 
            headningText='Project Management Expertise'
            contentText='Proficiently managed non-clinical projects, ensuring timely completion and budget adherence while optimizing resources.'
          />

          <BulletPoint 
            headningText='Mechanical Design Expertise'
            contentText='Demonstrated proficiency in mechanical design, utilizing industry-standard CAD software to create innovative and functional designs that meet project requirements.'
          />

          <BulletPoint 
            headningText='Python Programming Skills'
            contentText='Applied Python programming to develop customized tools and scripts for automation, data analysis, and simulations, enhancing workflow efficiency.'
          />

          <BulletPoint 
            headningText='Interdisciplinary Collaboration'
            contentText='Fostered collaboration between mechanical design and programming teams, facilitating integrated solutions for complex projects.'
          />

          <BulletPoint 
            headningText='Quality Assurance and Compliance'
            contentText='Ensured strict adherence to quality standards and regulatory requirements in both mechanical design and non-clinical projects, maintaining consistency and compliance.'
          />
          
          <BulletPoint 
            headningText='Efficient Resource Management'
            contentText='Managed resources effectively, optimizing project outcomes by balancing timelines, budgets, and available resources for successful project delivery.'
          />

        </ul>

      </div>

    </motion.div>
  )
}

export default TeamLead;