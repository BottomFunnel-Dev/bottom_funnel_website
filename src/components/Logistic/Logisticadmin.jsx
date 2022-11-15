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
         para:"All your logistics and transportation data in one place? That's what Unique Logistics is offering. We've built a dashboard to make it easy for you to see all your data at a glance, so you can stay on top of your business.",
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
             para:"Our logistics and transportation web development services are reliable, fast, and easy to work with. Our team of professionals will take care of everything for you so that you can focus on more important things in your life.",
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
             para:"Our team has years of experience in web development, marketing strategies, and more. We know what it takes to build a successful business online, so let us help you take your company forward!",
       
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
          para:"We have developed an end-to-end solution for tracking your products, both online and offline, including dispatching and receiving. Our database keeps track of every product, from a forklift to a truckload of goods.",
        },
        
      ];


      const [active, setActive] = useState(0);
  return (
    <div className='logicadmin'> 

    <h1> Admin panel</h1>
    <div className='logicadminsub'> 
             
            <div className='logicadminright'>

            
{Logisticadmindata.map(({ title, icon ,para}, idx) => {
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
       
    
      <p>{para}</p>
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
