

import { useState } from 'react'
import SlideDown from 'react-slidedown'
import clsx from 'clsx'
function FaqItem({item,index}:any) {
    const [active, setActive] = useState(null)
  return (
      <div className="z-2 mb-16">
          <div className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
              onClick={() => setActive(active === item.id ? null : item.id)}
          >
              <div
                  id={index}
                  className={clsx("h6 text-p4 transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center ", active && "max-lg:text-p1")}
              >{item.question}</div>
          </div>
          <SlideDown>
              {active === item.id && <div className="body-3 px-7 py-3.5 ">{item.answer}</div>}
          </SlideDown>
    </div>
  )
}

export default FaqItem