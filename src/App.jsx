import { useState, useRef, useEffect } from "react";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import TrustedBy from "./components/TrustedBy.jsx";
import Service from "./components/service.jsx";
import OurWork from "./components/ourWork.jsx";
import Teams from "./components/Teams.jsx";
import ContactUs from "./components/ContactUs.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx";
import { motion } from "motion/react";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  const dotRef = useRef(null);
  const outlineRef = useRef(null); // createing a reference for element

  // custom position for cursor . or tracking
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX; // it gives the x position
      mouse.current.y = e.clientY; // it gives the y position
    };

    document.addEventListener("mousemove", handleMouseMove); // this wil happen when mouse move

    //animation
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    let animationFrameId = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // so whenver we close the browser  and  it will display the last  updated theme
  return (
    <div className="dark:bg-black relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Service />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />
      {/* custom cursor ring */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]"
        style={{ transition: "transform 0.1s ease-out" }}
      ></div>
      {/*custom cursor dot*/}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3 rounded-full border border-primary pointer-events-none z-[9999]"
        style={{ transition: "transform 0.1s ease-out" }}
      ></div>
    </div>
  );
};

export default App;
