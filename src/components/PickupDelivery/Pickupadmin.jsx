import React from 'react'
import { useState } from 'react';
import "./pickupadmin.css"

export const Pickupadmin = () => {
    let ToolDeliveryadmindata = [
        {
          img: {
            src: "Images/pickup/adminpanel/analyticinsights.png",
            alt: "analytics Insights",
          },
          
          
          icon: {
            src: "Images/pickup/icons/Analytics & insights.png",
            alt: "Analytics & Insights",
          },

          title: "Analytics & Insights",
         para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
        },

        {
          img: {
            src: "Images/pickup/adminpanel/deliveryagents.png",
            alt: "deliveryagents",
          },
          icon: {
            src: "Images/pickup/icons/Delivery agents.png",
            alt: "Delivery Agents",
          },
             title: "Delivery Agents",
             para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
        },
        {
          img: {
            src: "Images/pickup/adminpanel/managepayment.png",
            alt: "Manage Payments image",
          },
          icon: {
            src: "Images/pickup/icons/Manage payments.png",
            alt: "Manage Payments",
          },
            title: "Manage Payments",
             para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
       
         },
        {
          img: {
            src: "Images/pickup/adminpanel/managecustomer.png",
            alt: "manage Customer image",
          },
          icon: {
            src: "Images/pickup/icons/manage customer.png",
            alt: "Customer logo",
          },
          title: "Manage Customer",
          para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
        },
        
      ];


      const [active, setActive] = useState(0);
  return (
    <div className='pickupdeliveryadmin'> 

    <h1> Admin panel</h1>
    <div className='pickupdeliveryadminsub'> 
             
            <div className='pickupdeliveryadminright'>

            
{ToolDeliveryadmindata.map(({ title, icon }, idx) => {
  return (
   
    <div 
      key={title}
      onMouseOver={() => setActive(idx)}
      className={`tools-box-${idx}`}
    >
      
      <div className="pickup-logo">
        <img src={icon.src} alt={icon.alt} />
      </div>
      <h3>{title}</h3>
       
    
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, quis eum ev</p>
      </div>
  

  );
})}

    </div>
            <div className='pickupdeliveryadminleft'>
               
               <div className="pickupdelivery-admin-image">
             <img
                src={ToolDeliveryadmindata[active].img.src}
                alt={ToolDeliveryadmindata[active].img.alt}
                />
                 </div>
   
               </div>
 
 
      </div>
  </div>
  )
}