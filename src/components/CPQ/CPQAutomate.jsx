import React, { useState } from 'react'
import "./CPQAutomate.css"


export const CPQAutomate = () => {

    const [imageChange, setImageChange] = useState("Images/CPQ/Setup pricing.png")
    const cpqautomatedata = [
        {
            htxt:"Eliminate pricing errors",
            stxt:"Configure pricing for your product catalog with one-time billing and subscription-based pricing models. Set up pricing values in multiple currencies including the unit price and the setup fee.",
            images:"Images/CPQ/Setup pricing.png",
        },

        {
            htxt:"Set up pricing with tax and discount values",
            stxt:"Apply a blanket sales tax percentage that will be automatically calculated for each product. Configure additional fields to capture other tax values based on your business type. Set up discount rates to ensure the final quote matches the approved pricing values.",
            images:"Images/CPQ/Make product recall.png",
        },
    ]

    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
        
     }
  return (
    <div className='cpqautomatemainboxes'>
    <h1>Automate pricing computation with CPQ</h1>
    <div className='automatecpqinnerandouterimagesbox'>
    <img src= {imageChange} alt="images" />
    </div>

    <div className='cpqautomatedatamapperbox'>{cpqautomatedata.map((e)=>{
        return (
            <div className='cpqautomatedatamapperboxindivisuallyimagesandtxt'
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
