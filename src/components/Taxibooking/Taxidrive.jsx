import React from 'react'
import "./Taxidrive.css"

export default function Taxidrive() {
  return (
    <div className='sztaxidrivecontainer'>
    <div className='sztaxidrivesub'>
          
          <div className='sztaxidriveright'>
          
          {/* <div className='sztwotriangle'> <img src="Images/Taxibooking/twotriangle.png"/></div> */}
          <div className='sztaximobile'><img src="Images/Taxibooking/Ride Share.png"/></div>

          {/* <div className='sztaxiarive'><img src="Images/Taxibooking/driverarriving.png"/></div> */}
          </div>

          <div className='sztaxidriveleft'>
             <div > 
                <h2>  Drive App  </h2>
                <ul><li>lorem Ipsum is simply</li>  
                 <li>lorem Ipsum is simply</li>  
                 <li>lorem Ipsum is simply</li>   
                 <li>lorem Ipsum is simply</li>   
                 <li>lorem Ipsum is simply</li>   
                  </ul> 
              </div>
              <button className='taxidrivebtn'> Get started</button>
          </div>
   </div>
</div>
  )
}
