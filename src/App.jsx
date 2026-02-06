import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Truested from './Components/Truested';
import Services from './Components/Services';
import OurWork from './Components/OurWork';
import Teams from './Components/Teams';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import {Toaster} from 'react-hot-toast'
function App() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  // mouse positions
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // smooth follow
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        // small dot (instant)
        dotRef.current.style.transform =
          `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;

        // outline (smooth)
        outlineRef.current.style.transform =
          `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  return (
    <div className='dark:bg-black relative'>
      <Toaster/>    
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Truested />
      <Services />
      <OurWork />
      <Teams />
      <Contact />
      <Footer theme={theme} />

      {/* Cursor */}
      <div
        ref={outlineRef}
        className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]'style={{transition:"transform 0.1s ease-out"}}
      />
      <div
        ref={dotRef}
        className='fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]'
      />
    </div>
  );
}

export default App;
