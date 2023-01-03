import React from 'react'
import { useState } from 'react'
import "./CryptoMining.css"

const CryptoMining = () => {

  const[imageChange,setImageChange] = useState("Images/Cryptocurrencypage/Userappscreens/Easytrade.png")

      const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
        console.log(imagepath)
     }

  const cryptominingdata = [
          {
            htxt:"Easy Trade",
            stxt:"Crypterio theme has a responsive design flow with a clean design. This theme is suited for Bitcoin, ICO (Initial Coin Offering), and Cryptocurrency",
            img:"Images/Cryptocurrencypage/icons/easytrade.png",
            bigimg:"Images/Cryptocurrencypage/Userappscreens/Easytrade.png"
      
          },
          {
            htxt:"Graphs Details",
            stxt:"It can show real-time exchange rates, has a crypto coins converter. Moreover, it is cross-browser compatible.Crypterio is bundled with several premium",
            img:"Images/Cryptocurrencypage/icons/graphsdetails.png",
            bigimg:"Images/Cryptocurrencypage/Userappscreens/Graphsdetails.png"
          },
      
          {
            htxt:"Transaction History",
            stxt:" It is updated regularly and offers great professional 24×7 support and so much more.Kryptex is built for mobile devices with optimized features.",
            img:"Images/Cryptocurrencypage/icons/transectiondetails.png",
            bigimg:"Images/Cryptocurrencypage/Userappscreens/Transactionhistory.png"
          },
    
          {
            htxt:"Market Updates",
            stxt:". This theme is most applicable for Cryptocurrency and Mining. It is SEO-friendly and offers features like two homepage layouts, .",
            img:"Images/Cryptocurrencypage/icons/marketupdate.png",
            bigimg:"Images/Cryptocurrencypage/Userappscreens/Marketupdates.png"
          }
        ]


  
  return (
    <div className='cryptominingmainvoxcryptocurrency'>
    <div className='cryptocurrencytextbanner'>
    <h2>Features Of Our Crypto Coin Mining Software</h2>
    </div>
    <div className='cryptocurrencyminigflexboxing'>
    
    <div className='cryptocurrencyminigflexboxingleft'>
    <div className='cryptocurrencyminigflexboxingleftimageone'>
    <img src='Images/Cryptocurrencypage/bannerbackground/Component50.png' alt='' />
    </div>
    <div className='cryptocurrencyminigflexboxingleftimagetwo'>
    <img src={imageChange} alt='changeable image' />
    </div>
    </div>






    <div className='cryptocurrencyminigflexboxingright'>{cryptominingdata.map((e)=>{
      
      return (
      <div className='cryptominingrightboxmapping'
      
      key={e.htxt} onMouseEnter={() => {
                  console.log(e);
                  handleImageChange(e.bigimg)
              }}
                
      
      
      >
      <div className='cryptominingrightboxmappinglogo'>
      <img src={e.img} alt='' />
      
      </div>
      <div className='cryptominingrightboxmappingtxt'>
      <h4>{e.htxt}</h4>
      <p>{e.stxt}</p>
      
      </div>
      </div>

      )
    })}
    
    
    </div>
    
    
    
    </div>
      
    </div>
  )
}

export default CryptoMining
