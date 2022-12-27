import React from 'react'
import { useState } from 'react'
import "./ContactManagementDeals.css"

export const ContactManagementDeals = () => {

    const[imageChange,setImageChange] = useState("Images/contactmanagement/surface leads.png")


    const handleImageChange = (imagepath) => {
      setImageChange(() => imagepath)
   
   }


const contactmanagementdeals = [
    {
        txt:"Surface your hottest leads",
        img:"Images/contactmanagement/surface leads.png",
    },

    {
        txt:"Accelerate sales prospecting",
        img:"Images/contactmanagement/accelerate sales.png",
    },

    {
        txt:"Manage sales teams across geographics",
        img:"Images/contactmanagement/manage sales.png",
    },

    {
        txt:"Be more productive",
        img:"Images/contactmanagement/be productive.png",
    },
]


  return (
    <div className='contactmanagementdealsmainbox'>
   
    <h1>Improve sales productivity and win deals faster.</h1>
   <div className='contactmanagementdealsflexbox'>{contactmanagementdeals.map((e)=>{
    return (
        <div className='contactmanagementmappingdataindivisual'
        key={e.txt} onClick={() => {
            
            handleImageChange(e.img)
        }}
        
        >
        
        <h6>{e.txt}</h6></div>
    )
   })}</div>

<div className='contactmanagementimagechangerandflexbox'>
<div className='contactmanagementimageandflexleftbox'>
<h4>Intelligent rank your prospects based on their profile and engagement level using contact scoring.</h4>
</div>

<div className='contactmanagementimageandflexrightbox'>
<img src={imageChange} alt='' />
</div>

</div>

    </div>
  )
}
