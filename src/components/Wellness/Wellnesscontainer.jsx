import React from 'react'
import "./Wellnesscontainer.css"

export default function Wellnesscontainer() {
  return (
    <div className='szwellnesscontainer'>
        <div className='szwellnesssub'>
          <div className='szwellnessleft'>
              <div>
                <h1>A Leading Healthcare App Development Company</h1>
               <p>You're new to the field or looking for ways to expand your horizons, we have the skills and expertise you need to create a truly exceptional app. From our deep understanding of the healthcare industry, to our in-house talent pool, we have everything it takes to bring your vision alive.</p>
               <button className='szwellnessbtn'>Get Started</button>
             </div>
          </div>
          <div className='szwellnessright'>
            <div className='wellnessimage'><img src="Images/Wellness/finddoctor.png"/></div>
          </div>
        </div>
    </div>
  )
}
