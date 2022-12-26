import React from 'react'
import "./ManufacturingAutomation.css"

export const ManufacturingAutomation = () => {
    const manuunifdata = [
        {
            txt:"When an interested dealer visits your website, you can capture their attention and engage with them using a chatbot or get their details using webforms.Now , their details are sent straight to your CRM,eliminating any manual entry."
        },
        {
            txt:"Next,with automated territory management you can auto-assign leads to relevant sales people in a round-robin manner.",
        },

        {
            txt:"Your sales people can identify them prioritize and qualify the most interested prospects using preductive contact scoring by AI-powered assistant freddy.",
        },

        {
            txt:"Organize customer data the way you want, access and manage them on one screen.Using modern views enjoy a spreadsheet-like experience that is easy to use and helps perform sales activities faster.",
        },

      
    ]


  return (
    <div className='manufacturingautomationmainbox'>
    <div className='manufacturingautomationmainboxes'>
    <div className='manufacturingautomationleftbox'>
    <img src='Images/Manufacturing/42.png' alt='images' />
    </div>
    <div className='manufacturingautomationrightbox'>
    <h1>Streamline your sales process with automation.</h1>
    <p>Fresh sales allows you to streamline your sales process in three simple steps.</p>
    <p>Your sales people also go back and forth between distributors, dealers or retailers every day.You can ease up their work by creating workflows that operate like clockwork.Automate the most common business activity without having to set up a workflow from scratch.Use pre-designed  action workflow templates and enable a workflow by simply clicking a button. For exmaple when a distributor does not answer your call, a reminder can be automatically set to follow up with them the next day. 
    </p>
    </div>
    </div>
<div className='manufacturingautomationlowersometext'>
<h6>For Example:-</h6>
<div className='manufautomationmapperdataunifies'>{manuunifdata.map((e)=>{
    return (
        <div className='manufacturingexpampleautomationdatamapperindi'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg>
        <div className='manufactautomationstxt'><p>{e.txt}</p></div>
        </div>
    )
})}</div>

</div>


    </div>
  )
}
