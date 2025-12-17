import React, { useState } from 'react'
import SectionTitle from './SectionTitle';
import TeamLead from './works/TeamLead';
import QA from './works/QA';
import Internship from './works/Internship';
import StartUp from './works/StartUp';

const Experience = () => {
    const [workTeamLead, setWorkTeamLead] = useState(true);
    const [workQA, setWorkQA] = useState(false);
    const [workInternship, setWorkInternship] = useState(false);
    const [workStartUp, setWorkStartUp] = useState(false);

    const handleTeamLead = () => {
        setWorkTeamLead(true);
        setWorkQA(false);
        setWorkInternship(false);
        setWorkStartUp(false);
    };

    const handleQA = () => {
        setWorkTeamLead(false);
        setWorkQA(true);
        setWorkInternship(false);
        setWorkStartUp(false);
    };

    const handleInternship = () => {
        setWorkTeamLead(false);
        setWorkQA(false);
        setWorkInternship(true);
        setWorkStartUp(false);
    };

    const handleStartUp = () => {
        setWorkTeamLead(false);
        setWorkQA(false);
        setWorkInternship(false);
        setWorkStartUp(true);
    };

    const handleFreelance = () => {
        setWorkTeamLead(false);
        setWorkQA(false);
        setWorkInternship(false);
        setWorkStartUp(false);
    };



  return (
    <section
      id='Experience'
      className='max-w-containerSmall min-h-screen mx-auto py-96 lgl:py-32 flex flex-col gap-5 justify-center'
      >
        <SectionTitle 
          titleName='Where I have worked' 
          titleNumber='02' 
        />
        {/* CONTAINER DIV */}
        <div className='w-full h-fit mt-5 flex flex-col sml:flex-row gap-4 '>

          {/*  SIDE BAR */}
          <div className='flex w-[fit-content] h-[fit-content] sml:flex-col '>
            
            <ul className='flex whitespace-nowrap max-sml:w-6/12 max-sml:overflow-x-scroll max-sml:no-scrollbar sml:h-auto sml:flex-col'>
                {/* TeamLead */}
                <li
                  onClick={handleTeamLead} 
                  className ={`${
                    workTeamLead 
                        ? "border-l-textViolet text-textViolet" 
                        : "border-l-hoverColor : text-textDark"
                    } border-l-2 border-l-textViolet text-textDark bg-transparent hover:bg-[#0F4C75] py-3 text-xs cursor-pointer duration-300 px-8 font-medium md:text-sm `}
                    >
                    Mayo Clinic 
                    <br /><em>(Engineering Technician II)</em> 
                </li>

                {/* QA */}
                <li 
                  onClick={handleQA}
                  className ={`${
                    workQA 
                        ? "border-l-textViolet text-textViolet" 
                        : "border-l-hoverColor : text-textDark"
                    } border-l-2 border-l-textViolet text-textDark bg-transparent hover:bg-[#0F4C75] py-3 text-xs cursor-pointer duration-300 px-8 font-medium md:text-sm `}
                    >
                    Game Design 
                    <br /><em>(Freelance)</em>  

                </li>

                {/* Internship */}
                <li 
                  onClick={handleInternship}
                  className ={`${
                    workInternship 
                        ? "border-l-textViolet text-textViolet" 
                        : "border-l-hoverColor : text-textDark"
                    } border-l-2 border-l-textViolet text-textDark bg-transparent hover:bg-[#0F4C75] py-3 text-xs cursor-pointer duration-300 px-8 font-medium md:text-sm `}
                    >
                    Zero Hour Interactive
                    <br /><em>(Contractor)</em>  
                </li>

                {/* StartUp */}
                <li 
                  onClick={handleStartUp}
                  className ={`${
                    workStartUp 
                        ? "border-l-textViolet text-textViolet" 
                        : "border-l-hoverColor : text-textDark"
                    } border-l-2 border-l-textViolet text-textDark bg-transparent hover:bg-[#0F4C75] py-3 text-xs cursor-pointer duration-300 px-8 font-medium md:text-sm `}
                    >
                    Impact Studios & Impact Forge
                    <br /><em>(Start-up)</em>  
                </li>
            </ul>

          </div>

          {/* Work information */}
          {workTeamLead && <TeamLead />}
          {workQA && <QA />}
          {workInternship && <Internship />}
          {workStartUp && <StartUp />}

        </div>
    </section>
  )
}

export default Experience;

// I need to create a media querey that will turn the bar horizontally for mobile viewing...