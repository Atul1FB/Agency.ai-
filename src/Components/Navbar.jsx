import React, { useState } from 'react';
import assets from '../assets/assets';
import ToggleBtn from './ToggleBtn';
import { motion } from "motion/react"

function Navbar({ theme, setTheme }) {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
  <motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
      {/* Top Navbar */}
      <div className="mt-2 flex justify-between items-center px-4 sm:px-2 lg:px-24 xl:px-40
        sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">

        {/* Left: Logo */}
        <img
          src={theme === "dark" ?  assets.logo_dark : assets.logo}
          className="w-32 sm:w-40"
          alt="Logo"
        />

        {/* Sidebar Menu (Mobile) */}
        <div
          className={`italic dm-serif text-gray-700 dark:text-white sm:text-sm
            ${!sideBarOpen ? 'max-sm:w-0 overflow-x-hidden' : 'max-sm:w-60 max-sm:pl-10'}
            max-sm:fixed top-0 bottom-0 right-0
            max-sm:min-h-screen max-sm:flex-col max-sm:bg-primary
            max-sm:text-white max-sm:pt-20
            flex sm:items-center gap-5 transition-all duration-300`}
        >
          {/* Close icon (mobile only) */}
          <img
            src={assets.close_icon}
            alt="Close"
            className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
            onClick={() => setSideBarOpen(false)}
          />

          {/* Links */}
          <a onClick={() => setSideBarOpen(false)} href="#" className="sm:hover:border-b">Home</a>
          <a onClick={() => setSideBarOpen(false)} href="#services" className="sm:hover:border-b">Services</a>
          <a onClick={() => setSideBarOpen(false)} href="#ourwork" className="sm:hover:border-b">OurWork</a>
          <a onClick={() => setSideBarOpen(false)} href="#contact-us" className="sm:hover:border-b">Contact Us</a>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* Theme Toggle Button */}
          <ToggleBtn theme={theme} setTheme={setTheme} />

          {/* Hamburger menu (mobile only) */}
          <img
            src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
            alt="Menu"
            onClick={() => setSideBarOpen(true)}
            className="w-8 sm:hidden cursor-pointer"
          />

          {/* Connect button (desktop only) */}
          <a className="text-sm max-sm:hidden flex items-center gap-2
            bg-primary text-white px-6 py-2 rounded-full
            cursor-pointer hover:scale-105 transition-all duration-300">
             Connect
            <img src={assets.arrow_icon} alt="" width={14} />
          </a>
        </div> 
      </div>
    </motion.div>
  );
}

export default Navbar;
