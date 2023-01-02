import React from 'react'
import './ottFooter.css'

export const OttFooter = () => {

  const OttFooterData = [
    {
      img: "Images/ott-app/Vector.png",
      title: "Customer Satisfaction",
      para: "Upload in bulk, organize content in categories, add custom filters & upload extras"
    },

    {
      img: "Images/ott-app/Vector-1.png",
      title: "Flexibility",
      para: "Showcase your content in a beautiful on-demand video catalog."
    },

    {
      img: "Images/ott-app/Component-183.png",
      title: "Quality Assurance",
      para: "Schedule events in advance & build excitemet with a countdown overlay."
    }


  ]
  return (
    <div className='ott-Footer-container'>
        <div className="ott-Footer-Heading">
        <h1>Why Choose Us</h1>
        <p>You can take care of the video quality and we take care of everything else</p>
      </div>
      <div className='ott-Footer-main'> 
        {OttFooterData.map((e) => {
         return <div className='ott-Footer-cards-div'>
          <div className='ott-Footer-img-para-combo'>
          <img src={e.img} alt="" />
              <p>{e.title}</p>
            </div>
            <div className='ott-Footer-para-div'>{e.para}</div>
          </div>
          
         
 
        })}
        </div>

       
</div>
    
  )
}