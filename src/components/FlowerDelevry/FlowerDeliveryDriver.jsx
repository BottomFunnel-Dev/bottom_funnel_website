import React from 'react'
import { useState } from 'react'
import "./FlowerDeliveryDriver.css"

const FlowerDeliveryDriver = () => {
  const[imageChange, setImageChange] =useState("Images/Flowerdeliverypage/DriverProfile.png")

  const flowerDeliveryDriverdata = [

    {
        img: "/Images/Marketplaceapp/icons/Component47.png",
        Htxt:"Driver's Profile",
        stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
        Cphone: "/Images/Marketplaceapp/Clientsappscreen/detailsofposts.png"
    },
    {
        img: "/Images/Marketplaceapp/icons/Component44.png",
        Htxt:"Pickup Details",
        stxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
        Cphone: "/Images/Marketplaceapp/Clientsappscreen/inappchat.png"
    },
   

]

// flowerDeliveryDriverdata


  return (
    <div className='flowerdeliverypharmecyappdiv'>
   
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>


<div className='pharmecydivflexandgrid'>

<div className='pharmecydivflexandgridright'>
<div className='pharmecydivflexandgridrightbackgroundimgdriver' >

<div className='pharmecydivflexandgridrightbackgroundimgdriver2' ></div>


</div>



</div>

<div className='pharmecydivflexandgridleft'>
<h2 className='pharmecydivflexandgridlefttxt'>Driver App</h2>
<br></br><br></br>
<div className='pharmecydivflexandgridleftbox'>
<h5>Driver's Profile</h5>
<p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</small></p>

</div>

<div className='pharmecydivflexandgridleftbox'>

<h5>Order</h5>
<p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</small></p>
</div>
</div>

</div>
    </div>
  )
}

export default FlowerDeliveryDriver
