
import { useEffect } from 'react'
import { TextPlugin, ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(TextPlugin, ScrollTrigger)
import SplitType from 'split-type'
import gsap from 'gsap'
const AnimatedText = ({text}:any) => {
    useEffect(() => {
        // Split the text into lines
        const split = new SplitType('#para', { types: 'lines' });
        const lines = split.lines;

        // GSAP animation with ScrollTrigger
        gsap.fromTo(
            lines,
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 2,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: '#para', // Element to watch for scrolling
                    start: 'top 80%', // Trigger animation when top of the element is at 80% of the viewport
                    end: 'bottom 20%', // End trigger when the bottom of the element reaches 20% of the viewport
                    scrub: false, // No smooth scrubbing
                    toggleActions: 'play none none none', // Play the animation only once
                },
            }
        );

        return () => {
            // Clean up SplitType
            split.revert();
        };
    }, []);
  return (
      <div>
          <p id='para' className="text-lg font-Italiana">
              {text}
          </p>
    </div>
  )
}

export default AnimatedText