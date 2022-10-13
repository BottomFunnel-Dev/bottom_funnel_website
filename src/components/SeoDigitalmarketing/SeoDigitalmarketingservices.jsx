import React from 'react'
import './SeoDigitalmarketingservices.css'
import {BsArrowRight} from 'react-icons/bs'
const SeoDigitalmarketingservices = () => {

    const arr=[
    {
         servicename:"Seooptimization",
         text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda corrupti alias itaque, distinctio eaque vel maxime nemo consectetur? Accusamus ipsum accusantium unde quidem consectetur reprehenderit? Exercitationem inventore praesentium itaque explicabo!"   
    },{
        servicename:"Seooptimization",
         text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda corrupti alias itaque, distinctio eaque vel maxime nemo consectetur? Accusamus ipsum accusantium unde quidem consectetur reprehenderit? Exercitationem inventore praesentium itaque explicabo!"   
    },{
        servicename:"Seooptimization",
         text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda corrupti alias itaque, distinctio eaque vel maxime nemo consectetur? Accusamus ipsum accusantium unde quidem consectetur reprehenderit? Exercitationem inventore praesentium itaque explicabo!"   
    },
    {
        servicename:"Seooptimization",
         text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda corrupti alias itaque, distinctio eaque vel maxime nemo consectetur? Accusamus ipsum accusantium unde quidem consectetur reprehenderit? Exercitationem inventore praesentium itaque explicabo!"   
    },
    {
        servicename:"Seooptimization",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda corrupti alias itaque, distinctio eaque vel maxime nemo consectetur? Accusamus ipsum accusantium unde quidem consectetur reprehenderit? Exercitationem inventore praesentium itaque explicabo!"   
   },{
       servicename:"Seooptimization",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda corrupti alias itaque, distinctio eaque vel maxime nemo consectetur? Accusamus ipsum accusantium unde quidem consectetur reprehenderit? Exercitationem inventore praesentium itaque explicabo!"   
   },{
       servicename:"Seooptimization",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda corrupti alias itaque, distinctio eaque vel maxime nemo consectetur? Accusamus ipsum accusantium unde quidem consectetur reprehenderit? Exercitationem inventore praesentium itaque explicabo!"   
   },
   {
       servicename:"Seooptimization",
        text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda corrupti alias itaque, distinctio eaque vel maxime nemo consectetur? Accusamus ipsum accusantium unde quidem consectetur reprehenderit? Exercitationem inventore praesentium itaque explicabo!"   
   }
]
  return (
    <div className='_SeoDigitalmarketingservicesmaindiv'>
        <h1>Our Digital Marketing Services</h1>
    <div className='_SeoDigitalmarketingservices'>
        {
            arr.map((items,i)=>{
                return(
                    <div className='_SeoDigitalmarketingservicesname'>
                            <div className='_Seodmservicename'>{items.servicename}</div>
                            <div className='_Seodmservicenametext'>{items.text}</div>
                            <div className='_Seodmicon'><BsArrowRight className='_dmicon'/></div>
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default SeoDigitalmarketingservices