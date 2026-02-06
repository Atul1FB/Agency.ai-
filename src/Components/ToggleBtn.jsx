import React, { useEffect } from 'react';
import assets from '../assets/assets';

function ToggleBtn({theme,setTheme}) {

   useEffect(()=>{
    if(theme === "dark"){
        document.documentElement.classList.add("dark")
    }else{
        document.documentElement.classList.remove("dark")
    }
    localStorage.setItem('theme',theme)
   },[theme])

  return (
    <div>
      <button>
     {theme === "dark"?(
        <img onClick={()=>setTheme("light")}  src={assets.sun_icon} alt="" 
         className='w-8 h-8 p-1.5 border border-gray-700 rounded-full'/>


     ):(
        <img onClick={()=>setTheme("dark")}src={assets.moon_icon}
       className='w-8 h-8 p-1.5 border border-gray-700 rounded-full'/>


     )}
      </button>
    </div>
  );
}

export default ToggleBtn;
