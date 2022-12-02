import React from 'react'
import "./CryptoCurrencyServices.css"

export const CryptoCurrencyServices = () => {


    const cryptoservicedata = [

{
    htxt:"Crypto Coin Development",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempus ex. Sed neque ex, posuere a risus et, tristique commodo velit.",
},

{
    htxt:"Mining Crypto Coins",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempus ex. Sed neque ex, posuere a risus et, tristique commodo velit.",
},


{
    htxt:"Wallet Creation",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempus ex. Sed neque ex, posuere a risus et, tristique commodo velit.",
},


{
    htxt:"Cryptocoin Mining",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempus ex. Sed neque ex, posuere a risus et, tristique commodo velit.",
},


{
    htxt:"Custom Altcoin Creation",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempus ex. Sed neque ex, posuere a risus et, tristique commodo velit.",
},


{
    htxt:"Cryptocurrency Exchange",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempus ex. Sed neque ex, posuere a risus et, tristique commodo velit.",
},


{
    htxt:"Cryptocoin Mining",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempus ex. Sed neque ex, posuere a risus et, tristique commodo velit.",
},


{
    htxt:"Custom Altcoin Creation",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id tempus ex. Sed neque ex, posuere a risus et, tristique commodo velit.",
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

