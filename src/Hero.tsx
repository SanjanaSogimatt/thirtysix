// @ts-nocheck
import { useEffect, useRef } from 'react'
import Canvas from "./Canvas";
import data from "./data";
import { useState } from "react";

import gsap from 'gsap';
import About from './About';
import Services from './Services';
import Whoarewe from './Whoarewe';

function Hero() {
    const ref = useRef(null)
    const growingSpan = useRef(null)
    const [showCanvas, setShowCanvas] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseMove = (e:any) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
            x: e.clientX, // X position relative to the h1 tag
            y: e.clientY,  // Y position relative to the h1 tag
        });
    };
   

    useEffect(() => {
        const handleClick = (e:any) => {
            setShowCanvas((prevShowCanvas) => {
                if (!prevShowCanvas) {
                    gsap.set(growingSpan.current, {
                        top: e.clientY,
                        left: e.clientX,
                    });
                    gsap.to("body", {
                        color: "#000",
                        backgroundColor: "#fd2c2a",
                        
                    });

                    gsap.to(growingSpan.current, {
                        scale: 1000,
                        duration: 1.2,
                        ease: "power2.inOut",
                        backgroundColor: "#fd2c2a",
                        onComplete: () => {
                            gsap.set(growingSpan.current, {
                                scale: 0,
                                clearProps: "all",
                            });
                        },
                    });
                } else {
                    gsap.to("body", {
                        color: "#fff",
                        backgroundColor: "#000",
                        duration: 1.2,
                        ease: "power2.inOut",
                    });
                }

                return !prevShowCanvas;
            });
        };

        const headingElement = ref.current;
        headingElement.addEventListener("click", handleClick);

        // Clean up event listener on unmount
        return () => headingElement.removeEventListener("click", handleClick);
    }, []);
    return (
        <div>
            {isHovered 
                && <span className='rounded-full text-center left-[-20px] top-[-20px] fixed w-20 h-20'
                    style={{
                        top: `${position.y}px`,
                        left: `${position.x}px`,
                        backgroundColor:'#fd2c2a',
                    }}
                    ref={growingSpan}
                ></span>}
            
            <div className="w-full relative min-h-screen border-bottom">
                {showCanvas &&
                    data[0].map((canvasdets, index) => <Canvas details={canvasdets} />)}
            </div>
            <div className='absolute left-0 top-0'>
                <div className='mt-24 px-5 sm:px-10'>
                    <div className="w-full px-[20%]">
                        <div className="w-[50%] max-md:w-[80%]">
                            <h3 className="text-4xl font-Italiana leading-[1.2] max-sm:text-xl max-md:text-3xl ">
                                At Thirtysixstudio, we build immersive digital experiences for
                                brands with a purpose.
                            </h3>
                            <p className="font-Montserrat text-lg w-[80%] mt-10 max-sm:text-sm">
                                We are a team of designers, developers, and strategists who are
                                passionate about creating digital experiences that are both
                                beautiful and functional.
                            </p>
                            <p className="text-md mt-10 font-Italiana">scroll</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="w-full absolute bottom-0 left-0 max-md:mt-12 mt-6">
                <h1
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ position: 'relative' }}
                    className="font-Italiana cursor-pointer z-100 text-[4rem] sm:text-[8rem] md:text-[12rem] lg:text-[17rem] tracking-tight leading-none pl-5"
                >
                    thirtysixstudios
                </h1>
            </div>
            
            <div className="w-full relative h-screen  mt-32 px-10">
                <About />
                {showCanvas &&
                    data[1].map((canvasdets, index) => <Canvas details={canvasdets} />)}
            </div>
            
            <div className="w-full relative min-h-screen px-10">
                <Services />
                {showCanvas &&
                    data[2].map((canvasdets, index) => <Canvas details={canvasdets} />)}
                
            </div>
            
            <div className="w-full relative max-h-screen px-10">
                <Whoarewe />
                {showCanvas &&
                    data[3].map((canvasdets, index) => <Canvas details={canvasdets} />)}

            </div>
           
        </div>
    )
}

export default Hero