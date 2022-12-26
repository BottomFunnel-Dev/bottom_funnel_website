import React from 'react'
import "./ManufacturingDeals.css"

export const ManufacturingDeals = () => {
    const manufacturingdealsdatafirst = [
        {
            txt:"Create unique sales pipelines based on regions,projects or products.",
        },
        {
            txt:"Customize individual for each pipeline",
        },

        {
            txt:"Visually see how your deals are advancing dynamically.",
        },

 
    ]


   

  return (
    <div className='manufacturingdealsmainbox'>
    <div className='manufacturingdealsmainboxes'>
    <div className='manufacturingdealsleftbox'>
    <img src='Images/Manufacturing/43.png' alt='images' />
    </div>
    <div className='manufacturingdealsrightbox'>
    <h1>Have a bird's eye view of every product and deal.</h1>
    <p>Get all the details related to products in a products in a unified view, with assiciated pricing product descriptions,discount structures etc by configuring your unique product catalog.</p>
    <p>With a manufacturing CRM like Freshsales,you can stay on top of all your deals for every product by creating multiple pipelines.This allows you to.</p>
    </div>
    </div>
<div className='manufacturingdealslowersometext'>

<div className='manufdealsmapperdataunifies'>{manufacturingdealsdatafirst.map((e)=>{
    return (
        <div className='manufacturingexpampledealsdatamapperindi'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg>
        <div className='manufactdealsstxt'><p>{e.txt}</p></div>
        </div>
    )
})}</div>

</div>


    </div>
  )
}
