import React from 'react'
import "./OnlinePMobileBrowser.css"

export const OnlinePMobileBrowser = () => {

    const onlinepmobilebrowserdata= [
        {
            xtt:"In-App Mobile Payments",
        },
      
        {
            xtt:"SMS Payments",
        },
        {
            xtt:"Wireless Credit Card Terminal",
        },

    ]

  return (
    <div className='onlinepmobilebrowsermainboxes'>
    <div className='onlinepmobilebrowserleftbox'>
    <div className='onlinemobilepbrowserleftboxoutermobilebox'>
    <img src='Images/onlinepaymentpage/in app mobile payments.png' alt='mobile' />
    </div>
    
    
    </div>
    <div className='onlinepmobilebrowserrightbox'>
    <div className='onlinepmobilebrowserrightboxheadertext'>
    <h1>Mobile Browser Based Payment</h1>
    </div>
    <div className='onlinepmobilebrowserrightboxmappingtxt'>{onlinepmobilebrowserdata.map((e)=>{
        return (
          
            <div className='onlinepmobilebrowseraftermappingdata '>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
<div className='onlinepmobilebrowseraftermappingxtt'><h4>{e.xtt}</h4></div>
            </div>
        )
    })}</div>
    </div>
    
    </div>
  )
}
