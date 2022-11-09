import React from 'react'
import './Newsintro.css'

export default function Newsintro() {
  return (
    <div className='newsintrocontainer'> 
    <div className='newsintrosub'>
    <div className='newsintroleft'>
        <div> 
       <h2>Magazine & Newspaper App Development</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis totam saepe aliquid quisquam maxime a quidem ipsa optio. Nam tempora minus nesciunt quasi natus porro eaque tenetur modi dolorem mollitia.</p>
     <button className='newsintrogetbtn'>Request a proposal</button>
     </div>
    </div>
       <div className='newsintroright'>
       <div className='newsintroimage'>
            <img src="Images/News/phone.png"/> 
        </div>
      
       </div>
       
       </div>
   </div>
  )
}
