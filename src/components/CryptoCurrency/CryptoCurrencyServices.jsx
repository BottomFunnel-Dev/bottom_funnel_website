import React from 'react'
import "./CryptoCurrencyServices.css"

export const CryptoCurrencyServices = () => {


    const cryptoservicedata = [

{
    htxt:"Crypto Coin Development",
    stxt:"Buying, selling, and trading in crypto is the new hype in the digital market in 2022. It is an effective alternative to fiat money. from bottom funnel",
},

{
    htxt:"Mining Crypto Coins",
    stxt:"It ensures secure financial transactions that help big companies, corporates, and sharks to deal in finance and provide organizations",
},


{
    htxt:"Wallet Creation",
    stxt:"First, you need to choose a suitable web hosting company or service that will help you get started. A reliable web hosting company.",
},


{
    htxt:"Cryptocoin Mining",
    stxt:"WordPress is a user-friendly platform, and most web hosting service providers are compatible with it and allow you to publish from bottom funnel.",
},


{
    htxt:"Custom Altcoin Creation",
    stxt:"The crypticis one of award-winning cryptocurrency website themes. This theme is only for Cryptocurrency. Cryptic comes with a crypt coding experience.",
},


{
    htxt:"Cryptocurrency Exchange",
    stxt:"It is a very fast-loading theme and offers great support. This theme has many interesting features like ICO (Initial Coin Offering) history timeline, shopping",
},


{
    htxt:"Cryptocoin Mining",
    stxt:"Crypterio theme has a responsive design flow with a clean design. This theme is suited for Bitcoin, ICO (Initial Coin Offering), and Cryptocurrency.",
},

{
    htxt:"Custom Altcoin Creation",
    stxt:"It can show real-time exchange rates, has a crypto coins converter. Moreover, it is cross-browser compatible.Crypterio is bundled  with several premium",
},

    ]


  return (
    <div className='CryptoCurrencyServicesmainboxes'>
    <div className='cryptoservicetxtboxes'>
    <h2>We Provide the Following Services for Cryptocurrency App</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempus ex. Sed neque ex, tristique commodo velit.</p>
    </div>
    <div className='cryptoserviceflexboxes'>{cryptoservicedata.map((e)=>{
       return (
        <div className='cryptoserviceflexboxmappingind'>
        <h4>{e.htxt}</h4>
        <p>{e.stxt}</p>
        </div>
       )
    })}</div>
    
    </div>
  )
}

