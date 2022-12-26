import React from 'react'
import "./Manufactureunifiesview.css"

export const Manufactureunifiesview = () => {
    

    
    const manuunifdata = [
        {
            txt:"Understand how an interested distributor entered your system and the webpages they've visited using website tracking."
        },
        {
            txt:"View a quick summary of their past engagement with your company via email, phone, chat or direct meetings.",
        },

        {
            txt:"Get a know their past purchase orders or which stage of the buying process they are currently in.",
        },

        {
            txt:"Add notes relevant to each prospect,setup tasks and appontments and upload necessary files right within the CRM.",
        },

        {
            txt:"Deep frive into detailed information such as support tickets in progress and open deals.",
        },
    ]


  return (
    <div className='manufacturingsviewmainboxnotflex'>
    <div className='manufacturingunifiedviewmainboxes'>
    <div className='manufacturingunifiedviewleftbox'>
    <img src='Images/Manufacturing/44.png' alt='images' />
    </div>
    <div className='manufacturingunifiedviewrightbox'>
    <h1>Understand your audience with a unified view</h1>
    <p>you can also customize the contact and accounts details page, giving you the flexibility to highlight and summarize the fields that ate important for your manufacturing business.</p>
    <p>Bottom funnel designed for the manufacturing industru,unifies the three most used channel into one platform-phone,chat and email.Every interaction you have with your distributors through these channels and theor ongoing deals are captured and stiched together in a single screen.</p>
    </div>
    </div>
<div className='manufacturingunifiesviewlowersometext'>
<h6>For Example:-</h6>
<div className='manufacmapperdataunifies'>{manuunifdata.map((e)=>{
    return (
        <div className='manufacturingexpampledatamapperindi'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg>
        <div className='manufactunifiestxt'><p>{e.txt}</p></div>
        </div>
    )
})}</div>

</div>


    </div>
  )
}
