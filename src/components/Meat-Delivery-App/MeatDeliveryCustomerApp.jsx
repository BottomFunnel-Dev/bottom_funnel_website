import React from 'react'
import "./MeatDeliveryCustomerApp.css"

export const MeatDeliveryCustomerApp = () => {

  const meatcustomerappdata = [

    {
      htxt:"Can be easily accessed through both android/iOS",
      stxt:"It is a cross platform application which gives ease to customer of accessing it through both android and iOS"
    },

    {
      htxt:"User-Friendly Interface",
      stxt:"It has easy to understand templates and customisable app designs to give the customer comfort of use."
    },

    {
      htxt:"Order food and track their service",
      stxt:"Customer can easily order their favourite food an d track when the food will get prepared and delivered."
    },

    {
      htxt:"Smart search and add to your favorites list",
      stxt:"The app will give suggestion based on what customers can alsi add their favourite dishes in to avoid repetitive searches."
    },

  ]








  return (
    <div className='meatdeliverycustomerappmainboxes'>
    <div className='meatdeliverycustomerapptextbox'>
    <h1>SOLUTION FOR YOUR <span className='colorred'>MEAT DELIVERY APP</span></h1>
    </div>
    <div className='customerapponlyformeatdeliveryapp'>
    <div className='customerappmeatdeliveryappleftbox'>
    <div className='meatdeliverycustomerappmobilebox'>
    <img src='Images/meatdelieveryapp/Rectangle.png'alt='images' />
    
    </div>
    
    </div>

    <div className='customerappmeatdeliveryapprightbox'>
    <div className='customerappmeatdeliveryapprightboxfortext'>
    <h2 className='colored'>Customer Application</h2></div>

<div className='meatappflexingforrightdiv'>{meatcustomerappdata.map((e)=>{
  return (

    <div className='meatdeliverymappingboxes'><h4>{e.htxt}</h4>  
   <p>{e.stxt}</p>
    </div>
  )
 
  

})}</div>


    
    </div>
    
    </div>
    
    </div>
  )
}

