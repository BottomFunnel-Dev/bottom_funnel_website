import React from 'react'
import "./DigitalTransformationOurService.css"

export const DigitalTransformationOurService = () => {

const digitaltransformationourservicesdata = [
    {
        icon:"Images/digitaltransformation/Consultant.png",
        htxt:"Digital Transformation Consulting",
        stxt:"As an IT consulting company,we have extensive experience in digitally transforming our client's businesses,giving them key insights into different industries. Our consultants leverage their experience to analyze your technology spending optimize IT costs and enhance business processes.",
    },

    {
        icon:"Images/digitaltransformation/Component 99.png",
        htxt:"Digital Transformation Strategy",
        stxt:"As an IT consulting company,we have extensive experience in digitally transforming our client's businesses,giving them key insights into different industries. Our consultants leverage their experience to analyze your technology spending optimize IT costs and enhance business processes.",
    },

    {
        icon:"Images/digitaltransformation/Group.png",
        htxt:"Digital Technology Integration",
        stxt:"As an IT consulting company,we have extensive experience in digitally transforming our client's businesses,giving them key insights into different industries. Our consultants leverage their experience to analyze your technology spending optimize IT costs and enhance business processes.",
    },
]


  return (
    <div className='digitaltransformationourservicemainboxes'>
    <div className='digitaltransformationourserviceuppertxtbox'>
    <h1>Our <span className='colored'>Services</span></h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis orci sed justo volutpat interdum sit amet in metus. Nam at pellentesque ligula. Donec fermentum non erat id vulputate. Nullam condimentum tellus aliquet diam fringilla, a convallis ex suscipit. Nulla at diam ultricies, sollicitudin nibh vel, tincidunt dui. Nullam vehicula </p>
    </div>

    <div className='digitaltransformationservicesbox'>{digitaltransformationourservicesdata.map((e)=>{
        return(


        <div className='digitaltransformdatamappingindivisualboxes'>
        <div className='digitaltransformdatamappingindivisualboxesforicon'>
        <img src={e.icon} alt='icon' />
        </div>
        <div className='digitaltransformdatamappingindivisualboxesfortetxt'>
        <h4>{e.htxt}</h4>
        <p>{e.stxt}</p>
        
        </div>
    
        </div>

        )
    })}

    </div>
<div className='digitalserviceboxmoverleftrightarrobox'>
<div className='digitalservicesvglogoleftarrow'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg></div>

<div className='digitalservicesvglogorightarrow'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></div>


</div>
     
    </div>
  )
}
