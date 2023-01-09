import React from 'react'
import { useState } from 'react'
import "./EyeWearCustomerApp.css"

export const EyeWearCustomerApp = () => {

    const [imageChange,setImageChange] =useState("Images/EyewearDeliveryapp/customerappscreens/onboarding.png")
    const handleImageChange = (imagepath) => {
      setImageChange(() => imagepath)
   
   }
  

const eyewearcustomerappdata = [
{
    img:"Images/EyewearDeliveryapp/customerappscreens/onboarding.png",
    icon:"Images/EyewearDeliveryapp/icons/prototyping-2.png",
    htxt:"Easy App On-Boarding",
    stxt:"On-boarding new users to your app doesn't have to be a pain! With our App, you can easily add new users and get them up-to-speed quickly. We makes it simple to assign tasks, give feedback, and track progress - so you can focus on more important things. Plus, our app has easy interface means that new users will be able to hit the ground running.",
},


{
    img:"Images/EyewearDeliveryapp/customerappscreens/shoppingbag.png",
    icon:"Images/EyewearDeliveryapp/icons/prototyping-5.png",
    htxt:"Shoping Bag",
    stxt:"With the Shoping Bag feature in apps, you can now shop for your favourite items easily and conveniently! This feature allows you to keep track of all the items you want to purchase in one place, so you can easily check out and pay for them later.",
},


{
    img:"Images/EyewearDeliveryapp/customerappscreens/specialoffers.png",
    icon:"Images/EyewearDeliveryapp/icons/prototyping-3.png",
    htxt:"Special Offers & Discounts",
    stxt:"Looking for ways to save on your next purchase? Check out our special offers and discounts page! Here you'll find a variety of deals and promotions that can help you save big on your next order. Whether you're looking for a percentage off your total purchase, free shipping, or a special gift with purchase, we've got you covered.",
},


{
    img:"Images/EyewearDeliveryapp/customerappscreens/cart.png",
    icon:"Images/EyewearDeliveryapp/icons/prototyping-4.png",
    htxt:"Cart For Your Favourites",
    stxt:"No more lugging around heavy bags or taking multiple trips to the car! The Cart for Your Favourites is here to make your life easier. This sturdy, lightweight cart can be easily assembled and disassembled for convenient storage. It features four large wheels that make it easy to maneuver, even when loaded down with groceries or other items.",
},



]


  return (
    <div className='eyewearcustomerappmainboxes'>
    <div className='eyewearcustomerappuppertextbox'>
    <h1>An Overview of Our Eyewear Delivery App</h1>
    <p>A Complete scope of carpoling and ridesharing app development solution for coordinating and moving travellers together</p>
    </div>
    <div className='eyewearappcustomerappboxflextype'>
    <div className='eyewearappcustomerappboxflextypeleftbox'>
    <div className='eyewearappcustomerappboxflextypeleftboxinsidertext' >
    <h1>Customer App</h1>
    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum</p> */}
    </div>
    
<div className='eyewearcustomermappingdatabox'>{eyewearcustomerappdata.map((e)=>{
    return (
        <div className='eyewearcustomeraftermap1box'
        key={e.htxt} onMouseEnter={() => {
            
            handleImageChange(e.img)
        }}
        
        >
        <div className='flexingeyewearcustomerforlogo'>
        <img src={e.icon} alt="image" />
        </div>
        <div><h4>{e.htxt}</h4>
        <p>{e.stxt}</p>
        </div>
        </div>
    )
})}</div>



    </div>
    <div className='eyewearappcustomerappboxflextyperightbox'>
    <div className='eyewearmobileforcustomerappdelivery'>
    <img src={imageChange} alt="mobile image" />
    </div>
    
    </div>
    
    </div>
    
    
    </div>
  )
}

