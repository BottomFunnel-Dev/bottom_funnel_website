import React from 'react'
import "./whychoose.css"
export default function Whychoose() {
  return (
    <div className='szwhychoose'> 
          <h1>Why choose us</h1>
          <p className='szwhypara'> </p>
        <div className='szchoose'>
            <div>
                <img className="szanalysis" src="Images/education/security.png" />
                    <p>Data Security</p>
            </div>
            <div>
               <img className="szanalysis" src="Images/education/customer.png" />
                  <p> Customer Service</p>
            </div>
            <div>
                <img className="perform" src="Images/education/Performence.png" />
                  <p> Performance Analysis</p>
            </div>
            <div>
               <img className="szanalysis" src="Images/education/arrow.png" />
                 <p>Flexibility</p>
            </div>
            <div>
               <img className="szanalysis" src="Images/education/teaching.png" />
                 <p>Interactiveness</p>
            </div>
             
        </div>
    </div>
  )
}
