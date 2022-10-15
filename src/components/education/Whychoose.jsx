import React from 'react'
import "./whychoose.css"
export default function Whychoose() {
  return (
    <div className='szwhychoose'> 
          <h1>Why choose us</h1>
          <p className='szwhypara'> </p>
        <div className='szchoose'>
            <div>
              <div className="szanalysis" >   <img  src="Images/education/security.png" /></div>
              
                    <p>Data Security</p>
            </div>
            <div>
              <div className="szanalysis" ><img  src="Images/education/customer.png" /></div>
                
                  <p> Customer Service</p>
            </div>
            <div>
              <div className='szanalysis'><img  src="Images/education/Performence.png" /></div>
                 
                  <p> Performance Analysis</p>
            </div>
            <div>
              <div className="szanalysis"><img src="Images/education/arrow.png" /></div>
                
                 <p>Flexibility</p>
            </div>
            <div>
              <div className="szanalysis" >  <img src="Images/education/teaching.png" /></div>
              
                 <p>Interactiveness</p>
            </div>
             
        </div>
    </div>
  )
}
