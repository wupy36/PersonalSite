import React from 'react'
import Image from "next/image";
import SectionTitle from './SectionTitle';
import { profileImgCircle , CSS, HTML, ReactL, Next, UnrealEngine, NodeJS, TypeScript, Python, CPP, Java} from "@/public/assets";

const About = () => {
  return (
    <section
      id='about'
      className='max-w-containerSmall h-screen mx-auto mdl:px-10 py-96 lgl:py-32 flex flex-col gap-8 justify-center'
      >

        <div className='flex items-center gap-10 pt-20 sml:pt-5'>

            <SectionTitle titleNumber="0.1" titleName="About me" />
        
        </div>



        {/* CONTENT CONTAINER - GRID */}
        <div className='grid grid-cols-6 auto-rows-auto'>

          
            
            {/* Text Portion */}
            <div className='row-span-2 col-start-1 col-end-5 text-base text-textDark font-medium max-mdl:col-span-full'>

                <div className='mdl:w-11/12 text-xs sm:text-sm sml:text-base'>


                    {/* Floating image for tablets and Mobile devices */}
                    <div className='pl-5 py-6 float-right'>

                        <div className='relative'>

                            <Image 
                                className="mdl:hidden top-0 left-0 rounded-full w-24 sm:w-32 sml:w-40 md:w-48 border-2 border-textViolet"
                                src={profileImgCircle}
                                alt="profilepicture"
                            />

                            {/* background-blur-effect */}
                            <div className=' mdl:hidden absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 sml:w-40 sml:h-40 md:w-48 md:h-48 bg-textViolet/20 rounded-full hover:bg-transparent duration-300 '>
                            </div>

                        </div>
                        
                    </div>

                    <p>
                        Hello, I&apos;m Andrew Duit, a <span className='text-textViolet'>passionate full stack developer</span> with a strong background in front-end and back-end development. 
                        <br /> <br />
                        I specialize in crafting experiences and realities using Unreal Engine. My journey into game development began as a consultant creating mods, and I've since worked as a Game Designer and Programmer for an indie studio using Unreal Engine 5. 
                        <br /> <br />
                        With my technical skills, creativity, and attention to detail, I aim to deliver innovative solutions that exceed client expectations. 
                        <br /> <br />
                        I&apos;m excited to contribute to collaborative projects and continue expanding my knowledge in this ever-evolving field. 
                        <br /> <br />
                        Let&apos;s create something amazing together!
                          
                    </p>

                </div>

            </div>
  

            {/* Image Section */}
            <div className='row-start-1 row-end-3 col-start-5 col-end-7 grid place-items-center relative group max-mdl:hidden'>
                
                {/* Image container */}
                <div className='absolute w-52 h-52 lgl:w-80 lgl:h-80 -left-6 -top-6 rounded-full'>
                    
                    {/* Actual Profile Pic */}
                    <Image 
                        className="z-30 rounded-full absolute w-52 h-52 lgl:w-80 lgl:h-80 fill object-cover border-2 border-textViolet"
                        src={profileImgCircle}
                        alt="profilepicture"
                    />

                    {/* background-blur-effect */}
                    <div className='z-30 hidden mdl:inline-block absolute w-52 h-52 lgl:w-80 lgl:h-80 bg-textViolet/20 rounded-full top-0 left-0 group-hover:bg-transparent duration-300 '>
                    </div>

                    {/* Animated Circle */}
                    <div className='z-10 left-6 top-6 hidden absolute mdl:inline-block w-52 h-52 lgl:w-80 lgl:h-80 border-2 border-textViolet rounded-full group-hover:-translate-x-6 group-hover:-translate-y-6 transition-transform duration-100'>
                    </div>
                    
                </div>


            </div>   


            {/* Skill Logo's */}
            <div className='row-start-3 col-span-full pt-5'>
                
                <p className='pb-5 font-codeFont text-textDark font-bold text-center text-sm lg:text-base'>
                    The Technologies I am most profficient & passionate about:
                </p>
                
                <ul className='flex flex-row flex-wrap gap-4 ml-3 mt-1 justify-center'>
                    {/* TypeScript Logo */}
                    <li className='flex items-center gap-2 hover:-translate-y-2 transition-all duration-300'>
                        <Image 
                            className='rounded-full w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse'
                            src={TypeScript} alt="TypeScript" 
                            title='TypeScript'
                        />
                    </li>
                    {/* Python Logo */}
                    <li className='flex items-center gap-2 hover:-translate-y-2 transition-all duration-300'>
                        <Image 
                            className='rounded-full w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse'
                            src={Python} alt="Python" 
                            title='Python'
                        />
                    </li>
                    {/* HTML Logo */}
                    <li className='flex items-center gap-2 hover:-translate-y-2 transition-all duration-300'>
                        <Image 
                            className='rounded-full w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse'
                            src={HTML} alt="HTML5"
                            title='HTML5' 
                        />
                    </li>
                    {/* CSS */}
                    <li className='flex items-center gap-2 hover:-translate-y-2 transition-all duration-300'>
                        <Image 
                            className='rounded-full w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse'
                            src={CSS} alt="CSS3"
                            title='CSS3' 
                        />
                    </li>

                </ul>
                <ul className='flex flex-row flex-wrap gap-4 ml-3 mt-5 justify-center'>
                    {/* React Logo */}
                    <li className='flex items-center gap-2 hover:-translate-y-2 transition-all duration-300'>
                        <Image 
                            className='rounded-full w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse'
                            src={ReactL} alt="React"
                            title='React' 
                        />
                    </li>
                    {/* Next */}
                    <li className='flex items-center gap-2 hover:-translate-y-2 transition-all duration-300'>
                        <Image 
                            className='rounded-full w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse'
                            src={Next} alt="NextJS"
                            title='NextJS' 
                        />
                    </li>
                    {/* NodeJS */}
                    <li className='flex items-center gap-2 hover:-translate-y-2 transition-all duration-300'>
                        <Image 
                            className='w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse'
                            src={NodeJS} alt="NodeJS"
                            title='NodeJS' 
                        />
                    </li>
                </ul>
                <ul className='flex flex-row flex-wrap gap-4 ml-3 mt-5 justify-center'>
                    {/* Unreal Engine */}
                    <li className='flex items-center gap-2 hover:-translate-y-2 transition-all duration-300'>
                        <Image 
                            className='w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse'
                            src={CPP} alt="CPP"
                            title='CPP' 
                        />
                    </li>
                    <li className='flex items-center gap-2 hover:-translate-y-2 transition-all duration-300'>
                        <Image 
                            className='w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse'
                            src={Java} alt="Java"
                            title='Java' 
                        />
                    </li>                    
                </ul>
                <ul className='flex flex-row flex-wrap gap-4 ml-3 mt-5 justify-center'>
                    {/* Unreal Engine */}
                    <li className='flex items-center gap-2 hover:-translate-y-2 transition-all duration-300'>
                        <Image 
                            className='w-11 max-sml:w-6 hover:contrast-150 hover:animate-pulse'
                            src={UnrealEngine} alt="UnrealEngine"
                            title='UnrealEngine' 
                        />
                    </li>                  
                </ul>

            </div>




        </div>




    </section>
  )
}

export default About;

//I need to do something about the photo being warped in mobile view
