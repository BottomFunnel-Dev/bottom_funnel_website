import React from 'react'
import "./DigitalMarketingHiring.css"


export const DigitalMarketingHiring = () => {

const digitalmarkethiringdata = [

{
  htxt:"Share Your Requirements",
  stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet auctor eleifend. Ut suscipit enim nibh. Morbi congue sodales laoreet."
},

{
  htxt:"Shorting Of Best Talent",
  stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet auctor eleifend. Ut suscipit enim nibh. Morbi congue sodales laoreet."
},


{
  htxt:"Find the right person for your Business",
  stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet auctor eleifend. Ut suscipit enim nibh. Morbi congue sodales laoreet."
},


{
  htxt:"Our Support 24/4",
  stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet auctor eleifend. Ut suscipit enim nibh. Morbi congue sodales laoreet."
},


]


  return (
    <div className='digitalmarketinghiringmainbox'>
    <div className='digitalmarkethiringtextbox'>
    <h1>Our Hiring Process For Your Projects</h1>
    </div>
    <div className='digitalmarketinghiringimageboxes'>
    <img src='Images/digitalmarket/Component186.png' alt='image' />
    </div>
    <div className='digitalmarketafterimageflexingbox'>{digitalmarkethiringdata.map((e)=>{
     return (
      <div className='digitalmarkethiringflexingtxt'><h4>{e.htxt}</h4>
      <p>{e.stxt}</p>
      </div>

     )
    })}
    
    
    </div>
    </div>
  )
}

