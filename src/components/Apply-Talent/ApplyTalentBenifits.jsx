import React from 'react'
import "./ApplyTalentBenifits.css"

export const ApplyTalentBenifits = () => {

    const applytalentbenifitsdata = [
        {
           htxt:"Remote Work" ,
           stxt:"We embrace the remote work culture and offer flexibility in choosing your conveninent shift time and space to maintain a proper work-life balance",
           icon:"Images/ApplyTalent/Icons/freelance 1.png",
        },

        {
            htxt:"International Payouts" ,
            stxt:"We believe that everybody should get paid for their worth.With us, you will earn 1.5 to 2x morethan market standards.We also ensure timely payout every month.",
            icon:"Images/ApplyTalent/Icons/freelance 2.png",
         },

         {
            htxt:"Global Projects" ,
            stxt:"We assess your caliber and get the right projects with an aim to establish a long-term relationship with you.Besouse your success is our success.",
            icon:"Images/ApplyTalent/Icons/freelance 3.png",
         },

         {
            htxt:"Long-term Opportunity" ,
            stxt:"You can set aside the uncertainity of job security and rely on us for a long-term opportunity.We provide opportunities,Keeping long-term interest in mind.",
            icon:"Images/ApplyTalent/Icons/freelance 6.png",
         },

         {
            htxt:"Choose Your Employer" ,
            stxt:"With us you get the freedom to choose your employer from the organizations associated with us and only move forward with the one you like.",
            icon:"Images/ApplyTalent/Icons/freelance 5.png",
         },

         {
            htxt:"We'll Be There For You" ,
            stxt:"AI understands your sentence and rewrites it in a completely unique and smart way.",
            icon:"Images/ApplyTalent/Icons/freelance 4.png",
         },
    ]


    
  return (
    <div className='applytalentbenifitsmainboxes'>
    <div className='applytalentbenifitstxtboxes'><h1>Benifits at <span className='colored'>Bottom Funnel</span> Talent Solutions</h1></div>
    <div className='applytalentbenifitsflexboxmapping'>{applytalentbenifitsdata.map((e)=>{
        return (
            <div className='applytalentbenifitsindivisuallybox'>
                  <div className='applytalentindivisuallyflexfortxtandicon'>
                  <div className='appytalentbenifitsheadertxt'><h4>{e.htxt}</h4></div>
                  <div className='appytalentbenifitsheaderlogo'><img src={e.icon} alt='image' /></div>
                  </div>  
                <p>{e.stxt}</p>      
            </div>
        )
    })}</div>
    
    </div>
  )
}
