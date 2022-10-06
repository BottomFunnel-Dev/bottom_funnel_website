import React from 'react'
import './IphoneDevelopmentwork.css'
import { VscArrowSmallRight } from "react-icons/vsc"
import { useState } from 'react'
export const IphoneDevelopmentwork = () => {
  const [trig, settrig] = useState(false);
  const [num, setnum] = useState()

  const strategy = [
    {
      sequence: "Strategy And Consulting",
      arrows: <VscArrowSmallRight />
    },
    {
      sequence: "UI/UX Design",
      arrows: <VscArrowSmallRight />
    },
    {
      sequence: "Testing",
      arrows: <VscArrowSmallRight />
    },
    {
      sequence: "Analysis & Planning",
      arrows: <VscArrowSmallRight />
    },
    {
      sequence: "App Development",
      arrows: <VscArrowSmallRight />
    },
    {
      sequence: "Deployment And Support"
    }
  ]

  const Switchto = (i) => {    
      setnum(i);
      settrig(p => !p);
      console.log(trig)
  }

  return (
    <div className='_IphoneDevelopmentwork'>
      <h1>Work Methodology</h1>
      <div className='_IphoneDevelopmentwork1'>
        {
          strategy.map((items, i) => {
            return (
              <div key={i}><span className='_IphoneDevelopmentspan' onMouseEnter={() => { Switchto(i) }} onMouseLeave={() => { Switchto(i) }}>{items.sequence} </span>{items.arrows}
                <div className={trig && num == i ? '_IphoneDevelopment12' : "_IphoneDevelopment121"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquid, doloribus modi ipsa, consequatur laboriosam consectetur quia odit soluta
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}
