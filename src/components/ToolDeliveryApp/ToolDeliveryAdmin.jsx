import React from 'react'
import { useState } from 'react';
import "./ToolDelivery.css"

const ToolDeliveryAdmin = () => {

  let Tooladmindata = [
    {
      img: {
        src: "Images/tooldeliveryapp/control business admin panel.png",
        alt: "control business admin pannel",
      },
     
      icon: {
        src: "Images/tooldeliveryapp/pie-chart.png",
        alt: " Marketlogo",
      },

      title: "Business Control",
     para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
    },

    {
      img: {
        src: "Images/tooldeliveryapp/Reports & analytics.png",
        alt: " ",
      },
      icon: {
        src: "Images/tooldeliveryapp/Analytics & insights.png",
        alt: "Product logo",
      },
         title: "Reports & Analytics",
         para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
    },
    {
      img: {
        src: "Images/tooldeliveryapp/Manage Payment.png",
        alt: "",
      },
      icon: {
        src: "Images/tooldeliveryapp/rupee.png",
        alt: "Revenuelogo",
      },
        title: "Manage Payments",
         para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
   
     },
    {
      img: {
        src: "Images/tooldeliveryapp/manage customers.png",
        alt: "",
      },
      icon: {
        src: "Images/tooldeliveryapp/manage customer.png",
        alt: "Customer logo",
      },
      title: "Manage Customer",
      para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
    },
    
  ];


  const [active, setActive] = useState(0);

  return (
    <div style={{
      marginTop:"5%"
    }} className='Tooladmin'> 

    <h1> Admin panel</h1>
    <div className='tooladminsub'> 
             
            <div className='tooladminright'>

            
{Tooladmindata.map(({ title, icon }, idx) => {
  return (
   
    <div
      key={title}
      onMouseOver={() => setActive(idx)}
      className={`tooladmin-box-${idx}`}
    >
      
      <div className="tooladmin-logo">
        <img src={icon.src} alt={icon.alt} />
      </div>
      <h3>{title}</h3>
       
    
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, quis eum ev</p>
      </div>
  

  );
})}

    </div>
            <div className='tooladminleft'>
               
               <div className="pharmacy-admin-image">
             <img
                src={Tooladmindata[active].img.src}
                alt={Tooladmindata[active].img.alt}
                />
                 </div>
   
               </div>
 
 
      </div>
  </div>
  )
}

export default ToolDeliveryAdmin
