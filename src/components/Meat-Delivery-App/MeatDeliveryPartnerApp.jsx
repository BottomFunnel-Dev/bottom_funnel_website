import React from 'react'
import "./MeatDeliveryPartnerApp.css"



export const MeatDeliveryPartnerApp = () => {

    const meatdeliverypartnerappdata =[

        {
            htxt:"Manage Offers & Discounts",
            stxt:"Partners can give special offers and discount to increase their customer base and earn their loyalty.",
        },

        {
            htxt:"Menu Category and Order Management",
            stxt:"The partners can manage menu items and orders to increase customer traffic and efficiency.",
        },


        {
            htxt:"Chat Support",
            stxt:"This Feature enables the partners to personally chat whit their customers as well as the admin and resolve their queries.",
        },


        {
            htxt:"Custom Alerts",
            stxt:"The partner will get a notification for every new activity related to them on the app which will make them stay updated.",
        },


    ]



  return (
    <div className='meatdeliverypartnerappmainboxes'>
    <div className='meatdeliverypartnerleftbox'>
    <div className='meatdeliverypartnerleftboxmobilebox'>
    <img src='Images/meatdelieveryapp/Group 1331.png'alt='mobile' />
    </div>
    
    </div>






    <div className='meatdeliverypartnerrightbox'>
    <div className='meatdeliverypartnerboxfortextright'>
    <h2 className='colored'>Partner Application</h2>
    </div>
    <div className='meatdeliverypartnerappmaiingbox'>{meatdeliverypartnerappdata.map((e)=>{
        return( 
            <div className='meatdeliveryflexingboxindivisually'><h4>{e.htxt}</h4>
            <p>{e.stxt}</p>
            </div>
        )
    })}</div>
    
    </div>
    
    
    </div>
  )
}

