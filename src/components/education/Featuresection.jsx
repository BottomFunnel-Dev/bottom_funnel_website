import React from 'react'
import "./Featuresection.css"

export default function Featuresection() {
  return (
    <div className='featuresection'> 
        <div className='feature'>
            <h1>Features</h1>
            <p></p>
        </div>
        <div className='featuremedia'>
            <div className='featurdocs'>
                <img className="docimg" src="Images/education/Socialmedia.png"/>
                <p>Social media Integration</p>
            </div>
            <div className='featurdocs'>
                  <img className="docimg" src="Images/education/Document.png"/>
                  <p>Documents sharing</p>
            </div>
            <div className='featurdocs'>
                 <img className="docimg" src="Images/education/signup.png"/>
                 <p> Sign up/log in</p>
            </div>
            <div className='featurdocs'>
                <img className="docimg" src="Images/education/ratings.png"/>
                <p>Ratings</p>
            </div>
            <div className='featurdocs'>
                <img className="docimg" src="Images/education/parentelcontrol.png"/>
                <p> Parentel control</p>
            </div>
            <div className='featurdocs'>
                 <img className="docimg" src="Images/education/livestreaming.png"/>
                 <p>Live Streaming</p>
            </div>
        </div>

        <button className='szrquest'>Rrequest a Quote</button>
    </div>
  )
}
