import React from 'react';
import Title from './Title';
import { teamData } from "../assets/assets.js";
import {motion} from 'motion/react'
function Teams() {
  return (
    <motion.div
    initial="hiden"
    whileInView="visible"
    viewport={{once:true}}
    className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-700 dark:text-white">
      <Title
        title="Meet the team"
        desc="A passionate team of digital experts dedicated to your brand success"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {teamData.map((team, index) => (
          <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.4, delay:index* 0.1}}
          viewport={{once: true}}
          
            key={index}
            className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl
            border border-gray-200 dark:border-gray-700
            bg-white dark:bg-gray-900
            shadow shadow-gray-100 dark:shadow-white/10
            hover:scale-105 transition-all duration-300"
          >
            <img
              src={team.image}
              className="w-12 h-12 rounded-full object-cover"
              alt={team.name}
            />
            <div>
              <h3 className="font-bold text-sm">{team.name}</h3>
              <p className="text-sm opacity-60">{team.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Teams;
