import React from 'react'
import "./Travelcontainer.css"

export default function Travelcontainer() {
  return (
    <div className='szTravelcontainer'>
         <div className='sztravelsub'>
            <div className='sztravelleft'>
              <div className='sztravelpara'>
              <h1>Travel App Development Company</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita dolore totam vel. Optio dolore veritatis asperiores aut at eos fugiat iure. Modi laboriosam, assumenda repellat doloribus facere accusantium quaerat!</p>
                <button className='travelgetbtn'>Get Started</button>
              </div>
                
            </div>
            <div className='sztravelright'>
                <div className='travelgirl'><img src='Images/Travel/travelgirl.png'/></div>
            </div>
         </div>
    </div>
  )
}
