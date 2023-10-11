import React, { useState } from 'react'
import ProjectCard from './SmallProjectCard';
import { motion } from "framer-motion";



const SmallProjects = () => {
  const [showMore, setShowMore] = useState (false);

  return (
    <div className='max-w-contentContainer mx-auto px-4 py-24'>
      <div className='w-full flex flex-col items-center'>
        <h2 className='text-2xl sml:text-3xl font-titleFont font-semibold'>Other Noteworthy Projects</h2>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-6 mt-10 lgl:px-10'>

        <ProjectCard 
          title="Steel Division"
          description="Special Forces mod for Squad."
          gitLink="https://steamcommunity.com/sharedfiles/filedetails/?id=2432926361"
          liveLink="https://steamcommunity.com/sharedfiles/filedetails/?id=2432926361"
          listItems={["Unreal Engine 4.27", "Blueprint"]} 
        />

        <ProjectCard 
          title="Squad Combat Evolved"
          description="Halo mod for Squad"
          gitLink="https://steamcommunity.com/sharedfiles/filedetails/?id=2898567190"
          liveLink="https://steamcommunity.com/sharedfiles/filedetails/?id=2898567190"
          listItems={["Unreal Engine 4.27", "Blueprint"]} 
        />

        <ProjectCard 
          title="The Cage"
          description="Competitive mod for Squad"
          gitLink="https://steamcommunity.com/sharedfiles/filedetails/?id=2799485908"
          liveLink="https://steamcommunity.com/sharedfiles/filedetails/?id=2799485908"
          listItems={["Unreal Engine 4.27", "Blueprint"]} 
        />
        
        <ProjectCard 
          title="Paris Métro Line 14"
          description="Operation Metro mod map for Squad "
          gitLink="https://steamcommunity.com/sharedfiles/filedetails/?id=2804581293"
          liveLink="https://steamcommunity.com/sharedfiles/filedetails/?id=2804581293"
          listItems={["Unreal Engine 4.27", "Mapping"]} 
        />

        <ProjectCard 
          title="Squad Untold"
          description="Finland and Isralie Defense Force mod for Squad"
          gitLink="https://steamcommunity.com/sharedfiles/filedetails/?id=2887375418"
          liveLink="https://steamcommunity.com/sharedfiles/filedetails/?id=2887375418"
          listItems={["Unreal Engine 4.27", "Blueprint"]} 
        />

        


        

        {
          showMore && (
            <>
            {/* PROJECT 3 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.1}}
            >
            <ProjectCard 
              title="Project Squad"
              description="Competitive mod for Squad"
              gitLink="https://steamcommunity.com/sharedfiles/filedetails/?id=2964661588"
              liveLink="https://steamcommunity.com/sharedfiles/filedetails/?id=2964661588"
              listItems={["Unreal Engine 4.27", "Blueprint"]} 
              />
            </motion.div>
    
    
            {/* PROJECT 4 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2}}
            >
            <ProjectCard 
              title="Squad IDF Modular"
              description="Isralie Defense Force faction mod for Squad"
              gitLink="https://steamcommunity.com/sharedfiles/filedetails/?id=2965087392"
              liveLink="https://steamcommunity.com/sharedfiles/filedetails/?id=2965087392"
              listItems={["Unreal Engine 4.27", "Blueprint"]} 
            />
            </motion.div>

              
            </>
          )}

      </div>
      <div className='mt-12 flex items-center justify-center'>
        {showMore ? (
          <button 
            onClick={() => setShowMore(false)}
            className='w-36 h-12 rounded-md text-textViolet Text-[13px] border border-textViolet hover:bg-hoverColor duration-300'>
            Show Less
          </button>
        ) : (
          <button 
            onClick={() => setShowMore(true)}
            className='w-36 h-12 rounded-md text-textViolet Text-[13px] border border-textViolet hover:bg-hoverColor duration-300'>
            Show More
          </button>          
        )}
      </div>
    </div>
    
  )
}

export default SmallProjects;