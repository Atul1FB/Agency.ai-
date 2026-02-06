import React from 'react';
import assets from '../assets/assets';
import Title from './Title';
import ServicesCards from './ServicesCards';
import { motion } from 'framer-motion'

function Services() {

    const servicesData=[
        {
          title:"Advertising",
          discription:"We turnd bold ideas into powerful digital solution that connect, engage...",
          icon: assets.ads_icon
        },
        {
          title:"Content marketing",
          discription:"We help you execute  your plan and deliver results..",
          icon: assets.marketing_icon
        },
        {
          title:"Content writing",
          discription:"We help you create a marketing strategy that dervies results..",
          icon: assets.content_icon
        },
        {
          title:"Social media",
          discription:"We help you build a astrong social media presence and engage with your audience..",
          icon: assets.social_icon
        },
    ]
  return (
   <motion.div
   initial="hidden"
   whileInView="visible"
  viewport={{once:true}}
  transition={{staggerClidren:0.2}}

  id="services"
  className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-700 dark:text-white"
>
  <img
    src={assets.bgImage2}
    className="absolute -top-[110px] -left-[70px] -z-10 dark:hidden"
  
  />

  <Title
    title="How can we help"
    desc="From strategy to execution, we craft digital solutions that move your business forward."
  />

  <div className="flex flex-cols items-center grid grid-cols-2">
   {servicesData.map((service,index)=>(
    <ServicesCards key={index} service={service} index={index}/>
   ))}
  </div>
</motion.div>

  );
}

export default Services;