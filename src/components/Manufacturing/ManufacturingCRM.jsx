import React from 'react'
import "./ManufacturingCRM.css"

export const ManufacturingCRM = () => {

    const manufacturecrmdata = [
    {
        htxt:"Easy to use",
        txt:"A straight forward interface doesn't make users wander around the software and drives adaptability.With the right data entered in the system,you get the most accurate reports.",
        icon:"Images/Manufacturing/tap 1.png",
    },

    {
        icon:"Images/Manufacturing/ai 1.png",
        htxt:"Powered by AI",
        txt:"multi-purpose AI-powered assistant only offers actionable insights on promising deals and recommends the next best actions that enable smart decision making.This helps sell faster and better.",
    },

    {
        icon:"Images/Manufacturing/growth 1.png",
        htxt:"Scalable",
        txt:"With the pay as you grow plan, you only pay for features that you would use.This makes it perfect for small business as well as mid market or enterprise organizations.",
    },

    ]


  return (
    <div className='manufacturingcrmmainboxes'>
    <h1>CRM FOR MANUFACTURING</h1>
    <p>Any product you see has been manufactured somewhere in the world.There is a complex yet magical process
    involves in transforming mere raw material into unique products.But post that we know getting
    the manufactured product into the customer's hands is a tedious process.</p>
    <p>Between a long chain of distributors/retailers and complex sales cycles,you and your sales and marketing teams must understand the distributors and customer requirement, forecast demand accurately and manufacture products accordingly.</p>
    <p>With the extensive tools and consumer data available today,this is very much possible.But the problem arises when 
    this data is fragmented across different systems even when using ERP systems.This is usually becouse different teams use various tools causing internal data silos low adoption rates, unorganized data etc.
   
    ultimately,it doesn't give you the clarity needed for smart decision-making and result in a disconnected customer experience.</p>
    <p>In such a scenario,what is the best way for manufactures to unclude customer-centricity in every
    aspect of their business process ?
    One way is to adopt a CRM Software for the manufacturing industry.
    
    </p>
    <div className='manufacturingbeforesometextmapping'><h1>Why bottomfunnels is well-suited for manufactures ?</h1>
    <div className='manufacturingcrmdatamappingboxflex'>{manufacturecrmdata.map((e)=>{
        return (
            <div className='manufacturingcrmdatamappingboxflexindivisually'>
            <div className='manucrmimages'><img src={e.icon} alt='images' /></div>
            <div className='manucrmtxtbox'>
            <h4>{e.htxt}</h4>
            <p>{e.txt}</p>
            </div>
            </div>
        )
    })}</div>
   
   
    </div>

    </div>
  )
}
