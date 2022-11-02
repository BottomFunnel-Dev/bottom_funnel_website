import React from 'react'
import "./Icecreamcustomer.css"

export default function Icecreamcustomer() {
  return (
    
    <div className='icecreamcustomersection'>
    <div className='icecreamsubcustomer'>

      <div className='icecreamsubcustomerleft'> 
           <div className='szpinkcircleimage'><img src="Images/Icecream/pinkcircle.png" />   </div>
            <div className='szpurplecircleimage'><img src="Images/Icecream/purplecircle.png"/> </div>
           <div className='szvanilla'><img src="Images/Icecream/vannila.png" /></div>
    
           <div className='szchoclate'><img src="Images/Icecream/choclate.png" /></div>
      </div>
      <div className='icecreamsubcustomerright'>
      <div> 
        <h2>Customer App</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ex labore, quia corrupti veniam fugiat quae beatae, aspernatur odio iste perferendis, dolor eaque ducimus architecto modi vel hic perspiciatis accusamus!</p>
        <button className='icecreamcustomerbtn'>Get started</button>
         
         </div>
         </div>
      </div>
   </div>


  )
}
