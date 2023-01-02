import React from 'react'
import "./OnlinePaymentAdminPannel.css"

export const OnlinePaymentAdminPannel = () => {
    const onlinepaymentadminpanneldata = [
        {
            xtt:"Payment Integrations",
        },

        {
            xtt:"Budget Analysis",
        },

        {
            xtt:"Froud & Risk Management",
        },
    ]
  return (
    <div className='onlinepaymentadminpannelmainbox'>
    <div className='onlinepaymentadminpannelleftbox'>
    <div className='onlinepaymentadminpanneltxtbox'>
    <h1><span className='colored'>Admin</span> Pannel Features</h1>
    </div>
<div className='onlinepaymentadminmappingdata'>{onlinepaymentadminpanneldata.map((e)=>{
    return (
       
        <div className='onlinepaymentadminpannelaftermapping'>
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg>

      <div className='onlinepaymentadminpannelmappertxtallign'><h4>{e.xtt}</h4></div>
        
        </div>
    )
})}</div>
    </div>

    <div className='onlinepaymentadminpannelrightbox'>
    <div className='onlinepaymentadminpannelrightboxchangerimages'>
    <img src='Images/onlinepaymentpage/payment integration.png' alt='admin' />
    </div>
    </div>
    
    
    </div>
  )
}
