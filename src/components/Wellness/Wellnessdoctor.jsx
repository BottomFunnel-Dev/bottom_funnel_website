import React from 'react'
import { useState } from 'react';
import "./Wellnessdoctor.css"

export default function Wellnessdoctor() {
     
  let wellnessdoctordata = [
    {
      img: {
        src: "Images/Wellness/doctormanage.png",
        alt: "Register image",
      },
      title: "Profile",
     para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
    },
    {
      img: {
        src: "Images/Wellness/Appointment management.png",
        alt: "Schedule",
      },
         title: "Appointment Management",
         para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
    },
    {
      img: {
        src: "Images/Wellness/Patient record.png",
        alt: "Multiple Payment Option image",
      },
        title: "Patient's medical records",
         para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
   
     },
    {
      img: {
        src: "Images/Wellness/Prescription.png",
        alt: "Track Order image",
      },
      title: "Prescription",
      para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
    },

    
  ];

  const [active, setActive] = useState(0);

  return (

    
    <div className='szwellnessdoctor'>
    {/* <h1> Must - Have Feature Of Healthcare Apps</h1> */}
   <div className='Wellnessdoctorsub'>
      

             <div className='Wellnessdoctorright'>
             <div className='szwellnessdoctortab'>
            <img
                src={wellnessdoctordata[active].img.src}
                // alt={wellnessdoctordata[active].img.alt}
                />
            </div>

            <div className='szwelldoctorbotombg'>
                <img src="Images/Wellness/botmbg.png"/>
            </div>
            
            </div>

            <div className='Wellnessdoctorleft'>
            <div > 
                  <h2>Doctor App</h2>
                  {/* <ul>
                   <li>Profile</li>  
                   <li>Find a doctor</li>  
                   <li>Book appointment</li>   
                   <li>Audio / video chat services</li>   
                   <li>Medical Histoy</li>   
                   <li>In-App payment</li>   
                    </ul>  */}

          {
          wellnessdoctordata.map(({ title }, idx) => {
          return (
           
            <div
              key={title}
              onMouseOver={() => setActive(idx)}
              className={`logistic-box-${idx}`}
            >
               <ul>
               <li>{title}</li>
               </ul>
              </div>
          );
        })}  

                </div>
                <button className='wellnessdoctorbtn'> Get started</button>
          
             </div>
        </div>
</div>
  )
}
