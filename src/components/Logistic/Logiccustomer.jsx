import React, { useState } from 'react'
import "./Logiccustomer.css"

export default function Logiccustomer() {
    let Logisticcustomerdata = [
        {
          img: {
            src: "Images/logistic/Register screen.png",
            alt: "Register image",
          },
          icon: {
            src: "Images/logistic/Inspection.png",
            alt: " Register logo",
          },
          title: "Registration",
         para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
        },
        {
          img: {
            src: "Images/logistic/Schedule trip screen.png",
            alt: "Schedule",
          },
          icon: {
            src: "Images/logistic/Location.png",
            alt: "Schedule logo",
          },
             title: "Schedule Trip",
             para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
        },
        {
          img: {
            src: "Images/logistic/Payment option screen.png",
            alt: "Multiple Payment Option image",
          },
          icon: {
            src: "Images/logistic/Card Payment.png",
            alt: "Multiple Payment Option logo",
          },
                    title: "Multiple Payment Option",
                    para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
       
                },
        {
          img: {
            src: "Images/logistic/track order screen.png",
            alt: "Track Order image",
          },
          icon: {
            src: "Images/logistic/Track Order.png",
            alt: "Track Order logo",
          },
          title: "Track Order",
          para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
        },
        
      ];


      const [active, setActive] = useState(0);
  return (
    <div className='logiccustomer'> 
     <h1>Customer app</h1>
      <div className='logiccustomersub'> 
                   
              <div className='logiccustomerright'>
  
              
          {Logisticcustomerdata.map(({ title, icon }, idx) => {
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

              <div className='logiccustomerleft'>
                 
              <div className="logistic-customer-image">
            <img
               src={Logisticcustomerdata[active].img.src}
               alt={Logisticcustomerdata[active].img.alt}
               />
                </div>

              </div>
        </div>
    </div>
  )
}
