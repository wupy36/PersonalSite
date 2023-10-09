import React from 'react';
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <div>
      <div className='inline-flex xl:hidden items-center justify-center w-full gap-4'>
          {/* Github Icon */}
          <a 
            href="https://github.com/wupy36" 
            target='_blank'
            >
              <span className='w-10 h-10 text-xl bg-bodyColor border-zinc-700 text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                  <SiGithub />
              </span>
          </a>
          
          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/andrewduit/" target='_blank'>
              <span className='w-10 h-10 text-xl bg-bodyColor border-zinc-700 text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
              <BsLinkedin />
              </span>
          </a>
          {/* Twitter Icon */}
          <a href="https://twitter.com/duitandrew" target='_blank'>
              <span className='w-10 h-10 text-xl bg-bodyColor border-zinc-700 text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
              <TiSocialTwitter />
              </span>
          </a>
          {/* Instagram Icon */}
          <a href="https://www.instagram.com/andrewduit" target='_blank'>
              <span className='w-10 h-10 text-xl bg-bodyColor border-zinc-700 text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
              <TiSocialInstagram />
              </span>
          </a>
      </div>
      <p className='text-center justify-center py-3 text-xs'>
        Built from scratch by <a href="https://www.linkedin.com/in/andrewduit/" target='_blank' className='text-textGreen'>Andrew Duit</a>
      </p>
    </div>
  )
}

export default Footer;