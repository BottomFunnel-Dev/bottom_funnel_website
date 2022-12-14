import React from 'react'
import "./MobileUXUIServiceOffer.css"

export const MobileUXUIServiceOffer = () => {

    const mobileservicesofferdata = [
        {
            htxt:"Front-end Development",
            stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut malesuada arcu. Praesent bibendum ultrices neque ut",
            icon:"Images/MobileUIUXDesign/Icons/coding.png",
        },


        {
            htxt:"Interface Design",
         stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut malesuada arcu. Praesent bibendum ultrices neque ut",
            icon:"Images/MobileUIUXDesign/Icons/wireframe (1).png",
        },


        {
            htxt:"Experience Design",
         stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut malesuada arcu. Praesent bibendum ultrices neque ut",
            icon:"Images/MobileUIUXDesign/Icons/ux-interface.png",
        },



        {
            htxt:"Custom Web Design",
         stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut malesuada arcu. Praesent bibendum ultrices neque ut",
            icon:"Images/MobileUIUXDesign/Icons/solution.png",
        },


        {
            htxt:"Responsive Layout",
         stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut malesuada arcu. Praesent bibendum ultrices neque ut",
            icon:"Images/MobileUIUXDesign/Icons/ux-interface-1.png",
        },


        {
            htxt:"Mobile UI/UX",
         stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut malesuada arcu. Praesent bibendum ultrices neque ut",
            icon:"Images/MobileUIUXDesign/Icons/solution-1.png",
        },
    ]




  return (
    <div className='mobileuxuiserviceofferedmainboxes'>
    <h1>Service That We Offers</h1>
    <div className='serviceweofferdatamappinguxuidesign'>{mobileservicesofferdata.map((e)=>{
        return(
            <div className='serviceweofferaftermappingindivisalbox'>
            <div className='serviceweofferaftermappingindivisalboxicons'>
            <img src= {e.icon} alt='images' />
            </div>
            <div className='serviceweofferaftermappingindivisalboxheadingtxt'><h4>{e.htxt}</h4>
            <p>{e.stxt}</p>
            </div>
            
            
            </div>
        )
    })}</div>
    <button className='mobileuiuxserviceoffersbutton'>Get Started</button>
    </div>
  )
}
