import React from 'react'
import './SalesPageBanner.css'

export const SalesPageBanner = () => {
  return (
    <div>
        
         <div className='SalesPageBannermainbox'>
         <div className='SalesPageBannermainbox-image'>
          <img src='/Images/SalesPagePhotos/salesbnaer.png'></img>
        </div>
        <div className='SalesPageBannermainboxinnertextdiv'>
          <h1>Accelerate your revenue </h1>
          <h1>with context-driven sales </h1>
          <p>
        Personalize engagement, shorten your sales cycle, and grow your business with Bottom Funnel sales.
          </p>
          <div className='SalesPageBannerbuttonbox'>

          <button className='SalesPageBannerbutton'>Get Started</button>
          <button className='SalesPageBannerbutton1'>Get Started</button>
          </div>
        </div>
       
      </div>

    </div>
  )
}
