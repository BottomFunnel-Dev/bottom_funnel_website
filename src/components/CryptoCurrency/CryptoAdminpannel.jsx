import React from 'react'
import { useState } from 'react';
import "./CryptoAdminpannel.css"

 export const CryptoAdminpannel = () => {

  const [imageChange, setImageChange] = useState("Images/Cryptocurrencypage/adminpanelscreens/Dashboard.png")


  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
    console.log(imagepath)
 }




  let cryptoadminpanelData = [
            {
              title: "Dashboard",
            txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                logo:"Images/Cryptocurrencypage/icons/dashboard.png",
                image:"Images/Cryptocurrencypage/adminpanelscreens/Dashboard.png"
            },
            {
              title: "Crypto News",
              txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                logo:"Images/Cryptocurrencypage/icons/news.png",
                image:"Images/Cryptocurrencypage/adminpanelscreens/CryptoNews.png"
              },
            {
              title: "Wallet",
              txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                logo:"Images/Cryptocurrencypage/icons/wallet.png",
                image:"Images/Cryptocurrencypage/adminpanelscreens/wallet.png"     
              },
            {
              title: "Trading Transaction",
              txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                logo:"Images/Cryptocurrencypage/icons/trading.png",
                image:"Images/Cryptocurrencypage/adminpanelscreens/Tradingtransaction.png"
              },
          ];




  return (
    <div className='cryptoadminpannelmainboxing'>
    
    
    <div className='cryptocurrencyadminleftboxing'>
    
    {cryptoadminpanelData.map((e)=>{
      return (
      
      <div className='cryptoadminboxingindivisually'
      
      key={e.txt} onMouseEnter={() => {
        console.log(e);
        handleImageChange(e.image)
    }}
      
      
      >
      <div className='cryptoadminboxingindivisuallylogo'>
      <img src={e.logo} alt="logoimage" /> </div>
      <div className='cryptoadminboxingindivisuallyfortxt'>
      <h4>{e.title}</h4>
      <p>{e.txt}</p>
      
      </div>
   

      </div>

      )
    })}</div>
    
    
    <div className='cryptocurrencyadminrightboxing'>
   
    <div className='cryptoadminpannelrightboxingfortab'>
    <img src={imageChange} alt="chang" />
    
    </div>



    </div>
    </div>
  )
}

