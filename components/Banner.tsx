import React from 'react'
import { motion } from "framer-motion";
import Typewriter, {Options} from 'typewriter-effect';



const Banner = () => {

  const options: Options = {
    strings: [
      'Full-Stack Developer',
      'Quality Engineer',
      'Python Enthusiast',
      'Next.js Developer',
      'Web Developer',
      'Unreal Game Designer',
      'Future Senior Dev',
      'Aspiring VR Engineer',
    ],
    autoStart: true,
    loop: true,
    delay: 20,
  };

  return (
    <section
      id='home'
      className='max-w-contentContainer min-h-screen h-full mx-auto mdl:py-12 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 justify-center'
    >

      {/* Hello World Heading */}
      <motion.h3
        className='text-xs md:text-lg font-codeFont tracking-wide text-textViolet'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2}}    
      >Hello World, my name is
      </motion.h3>
    
      {/* Name heading & Auto-Typing Array heading*/}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.2}}
        className='text-3xl md:text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col'
      >Andrew Duit.{" "}
        <span
          className='text-lg md:text-2xl lg:text-3xl text-textDark mt-2 lgl:mt-4'
        >
            <Typewriter options={options} />
            
        </span>
      </motion.h1>

      {/* Introductory Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.4}}
        className='text-sm sml:text-base text-textDark font-medium'
      >
          {" "}
          I&apos;m Andrew Duit, a coffee-loving, published video game developer and a passion for technology and programming. 
          <br /><br />
          My journey is one of continuous growth, fully committed to the philosophy of life-long learning, supported by my loving wife.
          <br /><br />
          <em>I&apos;m dedicated to lifelong learning and helping others as a fundamental principle.</em> {" "} <br /><br />
          
          
          <a href="https://www.linkedin.com/in/andrewduit/" target='_blank'>
              
              <span
              className='text-textViolet inline-flex relative cursor-pointer h-7 overflow-x-hidden group'
              >
                  Learn More
                  {/* Animated underline bar */}
                  <span className='absolute w-full h-[1px] bg-textViolet left-0 bottom-1 translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'></span>
              </span>

          </a>
      </motion.p>

    </section>
  )
}

export default Banner;