import React, { useState } from 'react'
import "./Logisticadmin.css"

export default function Logisticadmin() {
    let Logisticadmindata = [
        {
          img: {
            src: "Images/logistic/Dashboard.png",
            alt: "Register image",
          },
          icon: {
            src: "Images/logistic/Dashboard Layout.png",
            alt: " Register logo",
          },
          title: "Dashboard",
         para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
        },
        {
          img: {
            src: "Images/logistic/assets.png",
            alt: "Schedule",
          },
          icon: {
            src: "Images/logistic/Dividends.png",
            alt: "Schedule logo",
          },
             title: "Assets",
             para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
        },
        {
          img: {
            src: "Images/logistic/history.png",
            alt: "Multiple Payment Option image",
          },
          icon: {
            src: "Images/logistic/Order History.png",
            alt: "Multiple Payment Option logo",
          },
            title: "History",
             para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
       
         },
        {
          img: {
            src: "Images/logistic/tracking (2).png",
            alt: "Track Order image",
          },
          icon: {
            src: "Images/logistic/Tracking.png",
            alt: "Track Order logo",
          },
          title: "Tracking",
          para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
        },
        
      ];


      const [active, setActive] = useState(0);
  return (
    <div className='logicadmin'> 

    <h1> Admin panel</h1>
    <div className='logicadminsub'> 
             
            <div className='logicadminright'>

            
{Logisticadmindata.map(({ title, icon }, idx) => {
  return (
   
    <div
      key={title}
      onMouseOver={() => setActive(idx)}
      className={`logistic-box-${idx}`}
    >
      
      <div className="logistic-logo">
        <img src={icon.src} alt={icon.alt} />
      </div>
      <h3>{title}</h3>
       
    
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, quis eum ev</p>
      </div>
  

  );
})}

    </div>
            <div className='logicadminleft'>
               
               <div className="logistic-admin-image">
             <img
                src={Logisticadmindata[active].img.src}
                alt={Logisticadmindata[active].img.alt}
                />
                 </div>
   
               </div>
 
 
      </div>
  </div>
  )
}
