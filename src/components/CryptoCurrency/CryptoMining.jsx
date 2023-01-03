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
            stxt:"Bottom funnel is the easiest way to get started in the cryptocurrency market. With our user-friendly platform, you can buy and sell cryptocurrencies with just a few clicks. ",
            img:"Images/Cryptocurrencypage/icons/easytrade.png",
            bigimg:"Images/Cryptocurrencypage/Userappscreens/Easytrade.png"
      
          },
          {
            htxt:"Graphs Details",
            stxt:"Bottom funnel is a cutting edge crypto currency company that is revolutionizing the way people interact with their finances. you can send and receive money without rates.",
            img:"Images/Cryptocurrencypage/icons/graphsdetails.png",
            bigimg:"Images/Cryptocurrencypage/Userappscreens/Graphsdetails.png"
          },
      
          {
            htxt:"Transaction History",
            stxt:"Bottom funnel is a new and innovative crypto currency company that allows users to view their entire transaction history in full length.",
            img:"Images/Cryptocurrencypage/icons/transectiondetails.png",
            bigimg:"Images/Cryptocurrencypage/Userappscreens/Transactionhistory.png"
          },
    
          {
            htxt:"Market Updates",
            stxt:"The Bottom Funnel market update is a complete and neutral overview of the current state of the cryptocurrency market.Our team of experts ",
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
