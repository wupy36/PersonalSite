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
    
    
            {/* PROJECT 5 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.3}}
            >
            <ProjectCard 
              title=""
              description=" mod for Squad"
              gitLink=""
              liveLink=""
              listItems={["Unreal Engine 4.27", "Blueprint"]} 
            />
            </motion.div>
    
    
            {/* PROJECT 6 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4}}
            >
            <ProjectCard 
              title=""
              description=" mod for Squad"
              gitLink=""
              liveLink=""
              listItems={["Unreal Engine 4.27", "Blueprint"]} 
            />
            </motion.div>
            
            {/* PROJECT 7 */}
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5}}
            >
              <ProjectCard 
                title=""
                description=" mod for Squad"
                gitLink=""
                liveLink=""
                listItems={["Unreal Engine 4.27", "Blueprint"]} 
              />
            </motion.div>
              
            {/* PROJECT 8 🎯*/}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6}}
            >
              <ProjectCard 
                title=""
                description=" mod for Squad"
                gitLink=""
                liveLink=""
                listItems={["Unreal Engine 4.27", "Blueprint"]} 
              />
            </motion.div>
              

            {/* PROJECT 9 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.7}}
            >
              <ProjectCard 
                title=""
                description=" mod for Squad"
                gitLink=""
                liveLink=""
                listItems={["Unreal Engine 4.27", "Blueprint"]} 
              />
            </motion.div>
              
            {/* PROJECT 10 🎯 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.8}}
            >
              <ProjectCard 
                title=""
                description=" mod for Squad"
                gitLink=""
                liveLink=""
                listItems={["Unreal Engine 4.27", "Blueprint"]} 
              />
            </motion.div>
                          
              
            {/* PROJECT 11 🎯*/}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.9}}
            >
                <ProjectCard 
                  title="Bookmark Keeper"
                  description="Simple website for saving bookmarks. Explored dynamic rendering, local storage, and form validation"
                  gitLink="https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects"
                  liveLink="https://devon-bookmark-app.netlify.app/"
                  listItems={["JavaScript","HTML","CSS"]} 
                />
            </motion.div>
              
            {/* PROJECT 12 🎯*/}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.0}}
            >
                <ProjectCard 
                  title="Math Sprint Game"
                  description="TInteractive web app testing math skills. Unique page management approach for better organization. Aspiring to create advanced games for technical interview preparation"
                  gitLink="https://github.com/DevonGifford/my_JavaScript/tree/main/JavaScript_Projects"
                  liveLink="https://devon-math-sprint-game.netlify.app/"
                  listItems={["JavaScript","HTML","CSS"]} 
              />
            </motion.div>
              
            </>
          )}

      </div>
      <div className='mt-12 flex items-center justify-center'>
        {showMore ? (
          <button 
            onClick={() => setShowMore(false)}
            className='w-36 h-12 rounded-md text-textGreen Text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>
            Show Less
          </button>
        ) : (
          <button 
            onClick={() => setShowMore(true)}
            className='w-36 h-12 rounded-md text-textGreen Text-[13px] border border-textGreen hover:bg-hoverColor duration-300'>
            Show More
          </button>          
        )}
      </div>
    </div>
    
  )
}

export default SmallProjects;