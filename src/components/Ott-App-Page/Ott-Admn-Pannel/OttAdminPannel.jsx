import React from 'react'
import './ottAdminPannel.css'
import { useState } from 'react'

export const OttAdminPannel = () => {
    const [imageChange,setImageChange] =useState("Images/ott-app/MacBookPro1.png")
    const handleImageChange = (imagepath) => {
      setImageChange(() => imagepath)
   
   }
    
const OttAdminPannelData = [

    {
        img:"Images/ott-app/Group901188.png",
        head:"Dashboard",
        para:"To check without the listing",
    
    },
    
    {
        img:"Images/ott-app/Group901187.png",
        head:"Analytics",
        para:"Check system with the same",
    
    },
    
    
    {
        img:"Images/ott-app/Group901188.png",
        head:"Categories",
        para:"Separate categories for shows",
    
    },
    
    
  
    
    
    
    
    
    ]
  return (
    <div className="ott-Admin-Pannel-Container">
      <div className="ott-Admin-Pannel-left-div">
      <div className="ott-Admin-Pannel-left-div-heading">
          <h1>Admin Pannel</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum autem
            in veniam nemo, minima quisquam ipsa esse nesciunt, nulla vero
            inventore quas hic modi ratione assumenda adipisci soluta eaque
            veritatis.
            </p>
        </div>
        
        {OttAdminPannelData.map((e) => {
          return (
            <div
              className="ott-Admin-Pannel-left-div-For-cards"
              key={e.head}
              onMouseEnter={() => {
                handleImageChange(e.img);
              }}
            >
              <h3>{e.head}</h3>
              <p>{e.para}</p>
            </div>
          );
        })}
      </div>

      <div className="ott-Admin-Pannel-right-div">
        <div className="ott-Admin-Pannel-right-div-Frame-For-Images">
          <img src={imageChange} alt="" />
        </div>
      </div>
    </div>
  );
}
