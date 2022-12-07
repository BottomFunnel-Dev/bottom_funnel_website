import React from 'react'
import { useState } from 'react'
import "./FintechCustomerApp.css"

 export const FintechCustomerApp = () => {
    const [imageChange,setImageChange] =useState("Images/fintechsolutionpage/Component1877.png")
    const handleImageChange = (imagepath) => {
      setImageChange(() => imagepath)
   
   }
  


const fintechsolutioncustomerappdata = [

{
    img:"",
    icon:"Images/EyewearDeliveryapp/icons/prototyping-1.png",
    htxt:"Profile Management",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",

},

{
    img:"",
    icon:"Images/EyewearDeliveryapp/icons/prototyping-8.png",
    htxt:"Earning Analytics",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",

},


{
    img:"",
    icon:"Images/EyewearDeliveryapp/icons/prototyping-6.png",
    htxt:"Daily Report's Dashboard",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",

},


{
    img:"",
    icon:"Images/EyewearDeliveryapp/icons/prototyping-7.png",
    htxt:"Alerts Settings",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum",

},





]


  return (
    <div className='fintechsolutioncustomerappmainbox'>
    <div className='fintechcustomerappboxfortext'>
    <h1><span className='specialtxt'>Customer</span> App</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat tempor semper. Fusce auctor blandit odio, non accumsan ipsum</p>
    </div>
    <div className='fintecustomerappfelxingboxupper'>
    <div className='fintecustomerappfelxingboxupperleft'>
    <div className='fintechcustomerappleftsectionformobile'>
    <img src={imageChange} alt="imagemobile" />
   
    </div>
    
    </div>




    <div className='fintechcustomerappflexright'>{fintechsolutioncustomerappdata.map((e)=>{
       return (
        <div className='fintechcustomerappboxesaftermapping'
       
        
        
        >
        <div className='logofintechcustomerapp'><img src={e.icon} alt="image" /></div>
        <div className='txtcustomerappfintech'><h4>{e.htxt}</h4>
        <p>{e.stxt}</p>
        </div>
        </div>
       )
    })}</div>
    </div>
    
    </div>
  )
}


