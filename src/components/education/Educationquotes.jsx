import React from 'react'
import "./Educationquotes.css"

export default function Educationquotes() {
  return (
    <div className='productcontainer'>

        <div className='szproduct'>
        <div className='productleft'>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div className='productright'>
            <img className="circletop"src="Images/education/circle.png" />
            <img className="szphone" src="Images/education/phone.png" />
            <img className="homepage" src="Images/education/homepage.png" />
        </div>
        
        </div>

           {/* //////tab/////// */}
        <div className='szproduct'>
          <div className='productright'>
             <div> <img className="polygon" src="Images/education/polygon.png" /></div> 
              <img className='tabletcase' src="Images/education/teblate.png"/>
              <img  className="teblateadmin" src='Images/education/teblateadmin.png' />
          </div>
          <div className='productleft'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {/* ////////mobile/////// */}
         <div  className='szproduct'>
         <div className='productleft'>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div className='productright'>
          <div>
            <img className="phonecase" src="Images/education/phone.png" />
            <img className='landingimg' src="Images/education/landing.png"/>
            <img className="rectangleimg" src="Images/education/rectanglebox.png"/>
          </div>
        </div>

         </div>
 
        
    </div>
  )
}
