import React from 'react'
import "./CpqSpeedup.css"

export const CpqSpeedup = () => {

  const speedupdata =[
    {
      htxt:"Shorten your sales cycle",
      stxt:"With an updated product catalog available at their fingertips, sales teams can generate accurate quotes faster and reduce the time spent in sharing documents with prospects and customers.",
      icon:"Images/CPQ/Business Target.png",
    },

    {
      htxt:"Improve visibility across teams",
      stxt:"Stakeholders from different teams like Finance and Legal can view documents on Freshsales to ensure that the latest updates are captured.",
      icon:"Images/CPQ/sales (1) 1.png",
    },

    {
      htxt:"Improve accuracy on shorter timelines",
      stxt:"Salespeople can create quotes and other documents in simple steps that pull in data from the related records. CPQ takes out the calculation from the process to help create error-free documents in minutes.",
      icon:"Images/CPQ/Group.png",
    },

    {
      htxt:"Accelerate sales efficiency",
      stxt:"With an easy to implement CPQ solution, sales teams can get started with using the solution out of the box and save time spent on manual data entry. ",
      icon:"Images/CPQ/sales 1.png",
    },

    {
      htxt:"Reduce training time",
      stxt:"The detailed product catalog eliminates the need for memorizing product specifications and helps salespeople identify upsell and cross-sell opportunities.",
      icon:"Images/CPQ/save-time 1.png",
    },
  ]
  return (
    <div className='cpqspeedupmainboxes'>
    <h1>From prospect to signed customer, CPQ helps speed up the sales process </h1>
    <div className='cpqspeedupmappingbox'>{speedupdata.map((e)=>{
      return (
        <div className='cpqspeedupmappingboxindivisuallybox'>
        <div className='cpqspeedupmappingboxindivisuallyboximg'><img src={e.icon} alt="image" /></div>
        <div><h4>{e.htxt}</h4>
        <p>{e.stxt}</p>
        </div>
        </div>
      )
    })}</div>
    </div>
  )
}
