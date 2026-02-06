import React from 'react';
import assets from '../assets/assets';
import {motion} from "motion/react"

function Footer({ theme }) {
  return (
    <motion.div
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.8}}
    viewport={{once:true}}

    className="bg-slate-50 dark:bg-gray-900 pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">
      
      {/* Footer Top */}
      <div className="flex justify-between gap-16 max-lg:flex-col">

        {/* Left Section */}
        <motion.div
        initial={{opacity:0, x:-30}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6,delay:0.3}}
        viewport={{once:true}}

        className="space-y-5 text-sm text-gray-700 dark:text-white">
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt="Company Logo"
            className="w-32 sm:w-44"
          />

          <p className="max-w-md">
            From strategy to execution, we craft digital solutions that move your
            business forward.
          </p>

          <ul className="flex gap-8 pt-5 flex-wrap">
            <li className="hover:text-primary transition">
              <a href="#hero">Home</a>
            </li>
            <li className="hover:text-primary transition">
              <a href="#services">Services</a>
            </li>
            <li className="hover:text-primary transition">
              <a href="#ourwork">Our Work</a>
            </li>
            <li className="hover:text-primary transition">
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </motion.div>

        {/* Right Section */}
        <motion.div
        initial={{opacity:0, x:-30}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6,delay:0.3}}
        viewport={{once:true}}
        
        className="max-w-md text-gray-600 dark:text-gray-400">
          <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
            Subscribe to our newsletter
          </h3>

          <p className="mt-2 mb-6">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <div className="flex gap-3 max-sm:flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none rounded bg-transparent
              border border-gray-300 dark:border-gray-500 dark:text-gray-200"
            />

            <button className="bg-primary text-white px-6 py-3 rounded hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </motion.div>

      </div>
     <hr className='border-gray-300 dark:border-gray-600 my-6' />
      <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:0.4}}
        viewport={{once:true}}
       className='pb-6 text-sm text-gray-600 flex justify-center sm:justify-between gap-4 flex-wrap pt-2'>
        <p> copyright 2025 @stack - All Right Reserver</p>
        <div className='flex items-center justify-between gap-4'>
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.instagram_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Footer;
