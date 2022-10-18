import React from 'react'
import "./Educationcontainer.css"

export default function Educationcontainer() {
  return (

    <div className='szeducationcon'> 
        <div className='szsubeducation'> 
      <div className='szeducatleft' >
       <h1>Education app</h1>
       <p>Get an Online Tutoring Platform that caters to all your tutoring needs. The One-to-One
tutoring solution is perfect for individuals or groups. Your classroom solution will help you
get more out of your lessons by providing a digital platform for you and your students.</p>
      <button className='szedubtn'>Get Started</button>
       </div>

      <div className='szeducatright'>
        <div className="circle"> <img src='Images/education/circle-top.png' /> </div>
         <div className="laptop"><img src="Images/education/laptop.png"/> </div>
         <div className="laptopimg"><img src="Images/education/laptopimage.png" /></div>
        <div className='mobilecase'> <img src="Images/education/mobilecase.png"  /></div>
        <div className="lapimobile" > <img src="Images/education/lapmobile.png" /></div>
        <div className='oval' ><img  src="Images/education/rectangle2.png"/></div>
       
        
 
     
      </div>
      </div>

      
    </div>

  )
}
