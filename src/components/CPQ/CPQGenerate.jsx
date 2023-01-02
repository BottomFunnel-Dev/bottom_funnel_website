import React, { useState } from 'react'
import "./CPQGenerate.css"


export const CPQGenerate = () => {
    const [imageChange, setImageChange] = useState("Images/CPQ/surface leads.png")
    const cpqautomatedata = [
        {
            htxt:"Ensure brand consistency with document templates",
            stxt:"Configure pricing for your product catalog with one-time billing and subscription-based pricing models. Set up pricing values in multiple currencies including the unit price and the setup fee.",
            images:"Images/CPQ/surface leads.png",
        },

        {
            htxt:"Share documents in a single click",
            stxt:"Apply a blanket sales tax percentage that will be automatically calculated for each product. Configure additional fields to capture other tax values based on your business type. Set up discount rates to ensure the final quote matches the approved pricing values.",
            images:"Images/CPQ/Share document.png",
        },

        {
            htxt:"Sync documents with deals templates",
            stxt:"Apply a blanket sales tax percentage that will be automatically calculated for each product. Configure additional fields to capture other tax values based on your business type. Set up discount rates to ensure the final quote matches the approved pricing values.  ",
            images:"Images/CPQ/sync document.png",
        },

       
    ]

    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
        
     }
  return (
    <div className='cpqautomatemainboxes'>
    <h1>Generate accurate documents in minutes</h1>
    <div className='automatecpqinnerandouterimagesbox'>
    <img src= {imageChange} alt="images" />
    </div>

    <div className='cpqautomatedatamapperbox'>{cpqautomatedata.map((e)=>{
        return (
            <div className='cpqgeneratedatamapperboxindivisuallyimagesandtxt'
            key={e.htxt} onClick={() => {
          
                handleImageChange(e.images)
            }}
            
            ><h3>{e.htxt}</h3>
            <p>{e.stxt}</p>
            </div>
        )
    })}</div>
    
    </div>
  )
}
