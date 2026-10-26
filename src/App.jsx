import React, { useState } from "react";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import TrustedBy from "./components/TrustedBy.jsx";
import Service from "./components/service.jsx";
import OurWork from "./components/ourWork.jsx";
import Teams from "./components/Teams.jsx";
import ContactUs from "./components/ContactUs.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );
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
      <Footer />
    </div>
  );
};

export default App;
