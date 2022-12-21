import React from 'react'
import { useState } from 'react'
import "./IcecreamCustomerApp.css"

export const IcecreamCustomerApp = () => {

    
  const [imageChange,setImageChange] =useState("Images/icecreamchanges/customer app/Component 58-1.png")
  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
 
 }

    
const icreacreamcustomerappdata = [
    {
        image:"Images/icecreamchanges/customer app/Component 58-1.png",
        icon:"Images/icecreamchanges/icons/prototyping-8.png",
        headertext:"Easy app onboarding",
        paragraph:"Customize this Ice Cream Delivery App however you see fit with our powerful online app builder. You don’t need any design or coding experience",
    },

    {
        image:"Images/icecreamchanges/customer app/Component 58.png",
        icon:"Images/icecreamchanges/icons/prototyping-10.png",
        headertext:" Order Services",
        paragraph:"Ice cream is important to many people. They use it for more than eating and as a source of dessert. Many people like ice cream in cooking, like pancakes or cupcakes. Ice cream also provides a cooling sensation and can help digestion.",
    },

    {
        image:"Images/icecreamchanges/customer app/Multiple payment option.png",
        icon:"Images/icecreamchanges/icons/prototyping-9.png",
        headertext:"Multiple Payment Option",
        paragraph:"Less time spent in the ordering process means better user experience. Let your app users pay easily using multiple payment options so as to improve their overall app experience.",
    },

    {
        image:"Images/icecreamchanges/customer app/Component 56.png",
        icon:"Images/icecreamchanges/icons/prototyping-11.png",
        headertext:" Offers & Discounts",
        paragraph:"Better pricing doesn’t always have to be dropping your prices instantly. It’s somehow psychological in nature. There’s a subtle art to make it appear that you’re offering a better price without sacrificing your bottom-line."

      
    },
]


  return (
    <div className='icecreamcustomerappmainboxes'>
    <h1>An overview of our online Ice-cream Delivery App Solution</h1>
    <h2>Customer App</h2>
    <div className='icecreamdeliveryappflexingbox'>
    <div className='icecreamdeliveryappflexingboxleftbox'>
    <div className='icecreamdeliveryappleftboxinsiderupperimage'>
    <img src={imageChange} alt='' />
    </div>
    </div>
    <div className='icecreamdeliveryappflexingboxrightbox'>{icreacreamcustomerappdata.map((e)=>{
        return (
            <div className='icecreamdeliveryappindivisualbox'
            key={e.htxt} onMouseEnter={() => {
            
                handleImageChange(e.image)
            }}
            
            >
            <div className='icecreamdeliveryappindivisualboxforlogo'>
            <img src={e.icon} alt='' />
            </div>
            <div className='icecreamdeliveryappindivisualboxfortext'>
            <h4>{e.headertext}</h4>
            <p>{e.paragraph}</p>
            </div>
            
            </div>
        )
    })}</div>
    
    
    </div>
    </div>
  )
}
