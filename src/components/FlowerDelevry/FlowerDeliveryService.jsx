import React from 'react'
import "./FlowerDeliveryService.css"

export const FlowerDeliveryService = () => {

const flowerdeliveryservicedata = [

{
  icon:"Images/Flowerdeliverypage/58601082.png",
  htxt:"Real-Time Traking",
  stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint , ."
},

{
  icon:"Images/Flowerdeliverypage/wavytexh.png",
  htxt:"Multiple Payment Option",
  stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint , ."
},

{
  icon:"Images/Flowerdeliverypage/84541.png",
  htxt:"Reports and Analytics",
  stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint , ."
},

{
  icon:"Images/Flowerdeliverypage/84542.png",
  htxt:"Manage Orders",
  stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint , ."
},


{
  icon:"Images/Flowerdeliverypage/62400601.png",
  htxt:"Better Roi",
  stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint , ."
},


{
  icon:"Images/Flowerdeliverypage/76301.png",
  htxt:"Promote Your Buisness Effectively",
  stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint , ."
},


]




  return (
    <div className='flowerdeliveryservicemainbox'>
    <div className='flowerdeliveryservicetextbox'>
    <h1>Delivery Service App Solution</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales odio sit amet quam varius, id interdum nibh auctor. Donec quis nisl a nibh elementum laoreet. Vivamus ultrices</p>
    </div>
   <div className='flowerdeliveryservicebackgroundimagebox'>{flowerdeliveryservicedata.map((el)=>{
    
    return (
    <div className='flowerdeliveryserviceboxesmap'>
   <div className='flowerdeliveryserviceinnerboximagebox'><img src={el.icon} alt="icon image" /></div>
  <div><h5>{el.htxt}</h5>
  <p>{el.stxt}</p>
  
  </div>
   
   
   
    </div>
    )

   })}
    
   </div>



      
    </div>
  )
}


