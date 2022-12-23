import React from 'react'
import "./RealEstateBanner.css"

export const RealEstateBanner = () => {
  const txtx = [
    {
      txt:"7K+",
      stxt:"Premimum products",
    },

    {
      txt:"3K+",
      stxt:"Happy Customer",
    },

    {
      txt:"8K+",
      stxt:"Award Winning",
    },

  ]
  return (
    <div className='realestatebannermainbox'>

    <div className='realestatebannersometextandimages'>
    <div className='realestatebannersometext'>
    <h1>Find Your Most Comfortable Place</h1>
    <p>find a vanity of properties that suit you very easily forget all dificulties in finding a residence for you
    </p>
    <div className='textboxinsidetextrealestatebox'>{txtx.map((e)=>{
      return (
        <div className='txtinsidetxtrealstateindi'><h1>{e.txt}</h1>
        <p>{e.stxt}</p>
        </div>
      )
    })}</div>
    </div>
    <div className='realestatebannersomeimages'>
    <img src='Images/RealEstate/Backgrounds/Default model.png' alt='image' />
    </div>
    </div>
    
    </div>
  )
}
