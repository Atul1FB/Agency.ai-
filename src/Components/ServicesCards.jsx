import React, { useState } from 'react';
import { motion } from "motion/react"
import { useMotionValue } from "motion/react";


function ServicesCards({ service, index }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                x.set(e.clientX - rect.left - 150);
                y.set(e.clientY - rect.top - 150);
            }}
            className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700"
        >

            <motion.div
                className="pointer-events-none blur-2xl rounded-full bg-gradient-to-r
             from-blue-500 via-indigo-500 to-purple-500
             w-[300px] h-[300px] absolute z-0
             mix-blend-lighten opacity-70"
                style={{ top: y, left: x }}
            />
            <div className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px]
                bg-white dark:bg-gray-900 z-10 relative'>

                <div className='bg-gray-100 dark:bg-gray-700 rounded-full'>
                    <img src={service.icon} alt="" className='max-w-24 bg-white dark:bg-gray-900 rounded-full m-2' />
                </div>
                <div>
                    <h3 className='font-bold'>{service.title}</h3>
                    <p>
                        {service.discription}
                    </p>
                </div>

            </div>
        </motion.div>



    );
}

export default ServicesCards;
