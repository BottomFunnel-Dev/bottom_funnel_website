import React from 'react'
import "./Featuresection.css"

export default function Featuresection() {
  return (
    <div className='szfeaturesection'> 
        <div className='feature'>
            <h1>Features</h1>
            <p></p>
        </div>
        <div className='featuremedia'>
            <div className='featurdocs'>
             <div className="docimg" > <img src="Images/education/Socialmedia.png"/></div>   
                <p>Social media Integration</p>
            </div>
            <div className='featurdocs'>
                <div className="docimg" ><img src="Images/education/Document.png"/></div>
                
                  <p>Documents sharing</p>
            </div>
            <div className='featurdocs'>
                <div className="docimg" > <img src="Images/education/signup.png"/></div>
                 
                 <p> Sign up/log in</p>
            </div>
            <div className='featurdocs'>
                <div className="docimg" ><img src="Images/education/ratings.png"/></div> 
                <p>Ratings</p>
            </div>
            <div className='featurdocs'>
                <div className="docimg" > <img src="Images/education/parentelcontrol.png"/></div>
                
                <p> Parentel control</p>
            </div>
            <div className='featurdocs'>
                <div className="docimg" > <img src="Images/education/livestreaming.png"/></div>
                
                 <p>Live Streaming</p>
            </div>
        </div>

        <button className='szrquest'>Rrequest a Quote</button>
    </div>
  )
}
