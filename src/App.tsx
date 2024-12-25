import "./index.css";

import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";


function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    return ()=>{
      locomotiveScroll.destroy();
    }
  }, []);



  return (
    <>
      <Navbar/>
      <Hero />
      
    </>
  );
}

export default App;