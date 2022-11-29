import React from 'react'

const ToolDeliveryFooter = () => {

const footerdata = [
  {
    logo:"Images/tooldeliveryapp/Customizable solution.png",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed quam est. Nunc vestibulum odio blandit, aliquam metus nec",
    htxt:"A Fully Customizable Solution"
  },
  {
    logo:"Images/tooldeliveryapp/Highly scalable.png",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed quam est. Nunc vestibulum odio blandit, aliquam metus nec",
    htxt:"Highly Scalable"
  },

  {
    logo:"Images/tooldeliveryapp/Global solution.png",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed quam est. Nunc vestibulum odio blandit, aliquam metus nec",
    htxt:"Global Solution"
  },

  {
    logo:"Images/tooldeliveryapp/Dedicated support.png",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed quam est. Nunc vestibulum odio blandit, aliquam metus nec",
    htxt:"Dedicated Support"
  }

]



  return (
    <div>
    <h2> <h2 style={{
   
     marginTop:"10%",
     marginLeft:"40%"
     
    }}>Why Choose Bottom Funnel?</h2></h2>
 
    <div className='tooldeliveryfooterapp'>{footerdata.map((e)=>{
     
      return (
      
    <div style={{
      
    }} className='tooldeliveryfooterbox'>
      
      
     
       <div className='tooldeliverytextmapping'>
      <h4>{e.htxt}</h4>
      <p>{e.stxt}</p>
      
      </div>

      <div className='tooldeliveryfooterboxlogo'><img className='toollogoimg' src={e.logo} alt="imagelogo" /></div>

    
  
   
    </div>
    )
  })}
    </div>
    </div>
  )
}

export default ToolDeliveryFooter
