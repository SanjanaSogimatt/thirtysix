// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react'
import { useWindowScroll } from 'react-use'
import gsap from 'gsap'
const navItems = ['What we do','Who we are','How we give back','Talk to us']
function Navbar() {
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isNavVisible, setIsNavVisible] = useState(true)
    const currentScrollY = useWindowScroll().y
    const navRef=useRef(null)
    useEffect(() => {
        if (currentScrollY > lastScrollY) {
            setIsNavVisible(false)
        }else if(currentScrollY < lastScrollY){
            setIsNavVisible(true)
            navRef.current.classList.remove('floating-nav')
        } else {
            setIsNavVisible(true)
            navRef.current.classList.add('floating-nav')
        }
        setLastScrollY(currentScrollY)
    }, [currentScrollY])
    useEffect(() => {
        gsap.to(navRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.5,
        })
    }, [isNavVisible])
  return (
      <div
          ref={navRef}
          className='fixed bg-black/20 text-white inset-x-0 z-50 h-16 border-none transition-all duration-700 '
      >
          <header className='absolute top-1/2 w-full -translate-y-1/2'>
              <nav className='flex justify-between items-center p-3 font-Italiana'>
                  <div className="flex items-center gap-7">
                      <h1 className='text-2xl font-bold '>
                          Thirtsixstudios
                      </h1>
                  </div>
                  <div className='flex h-full items-center'>
                      <div className="hidden md:block">
                          {navItems.map((item, index) => (
                              <a href={`#${item.toLowerCase()}`} className='nav-hover-btn'>
                                  {item}
                              </a>
                          ))}
                      </div>
                  </div>
              </nav>
          </header>
    </div>
  )
}

export default Navbar