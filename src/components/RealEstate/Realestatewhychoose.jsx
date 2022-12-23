import React from 'react'
import "./Realestatewhychoose.css"

export const Realestatewhychoose = () => {
  
    const Realestatewhychoose = [
        {
            htxt:"100% Customization",
            icon:"Images/RealEstate/Icons/Rectangle 133.png",
            stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id bibendum lorem, ac ullamcorper neque. ",
        },

        {
            htxt:"Highly Scalable",
            icon:"Images/RealEstate/Icons/Rectangle 133-2.png",
            stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id bibendum lorem, ac ullamcorper neque. ",
        },

        {
            htxt:"Dedicated Support",
            icon:"Images/RealEstate/Icons/Rectangle 133-1.png",
            stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id bibendum lorem, ac ullamcorper neque. ",
        },

        {
            htxt:"Global Solution",
            icon:"Images/RealEstate/Icons/Rectangle 133-3.png",
            stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id bibendum lorem, ac ullamcorper neque. ",
        },

    ]

  return (
    <div className='realestatewhychoosemainboxes'>
    <div className='realestatewhychoosebottomtextbox'>
    <h1>Why Choose Bottom Funnel As your Real Estate App Development Company ?</h1>
    </div>
    <div className='realestatewhychoosemapperbox'>{Realestatewhychoose.map((e)=>{
        return (
            <div className='realestatewhychooseindivisuallybox'>
            <h4>{e.htxt}</h4>
            <div className='whychooserealestateicon'><img src={e.icon} alt='icon' /></div>
            <p>{e.stxt}</p>
            </div>
        )
    })}</div>
    </div>
  )
}
