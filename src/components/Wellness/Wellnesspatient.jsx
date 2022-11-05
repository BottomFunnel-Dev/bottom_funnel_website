import React from 'react'
import { useState } from 'react';
import "./Wellnesspatient.css"

export default function Wellnesspatient() {
    let wellnessdoctordata = [
        {
          img: {
            src: "Images/Wellness/Profile.png",
            alt: "Register image",
          },
          title: "Profile",
         para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
        },
        {
          img: {
            src: "Images/Wellness/Find doctors.png",
            alt: "Schedule",
          },
             title: "Find doctors",
             para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
        },
        {
          img: {
            src: "Images/Wellness/Appointment.png",
            alt: "Multiple Payment Option image",
          },
            title: "Booking appointment",
             para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
       
         },
        {
          img: {
            src: "Images/Wellness/video chat.png",
            alt: "Track Order image",
          },
          title: "Audio / video chat service",
          para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
        },
        {
            img: {
              src: "Images/Wellness/Medical history.png",
              alt: "Track Order image",
            },
            title: "Medical  History",
            para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
          },
          {
            img: {
              src: "Images/Wellness/Payment option screen.png",
              alt: "Track Order image",
            },
            title: "In-App payment",
            para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
          },
        
      ];

      const [active, setActive] = useState(0);

  return (
    <div className='szwellnesspatient'>
        <h1> Must - Have Feature Of Healthcare Apps</h1>
       <div className='Wellnesspatientsub'>
           <div className='Wellnesspatientleft'>
                <div > 
                      <h2>Patient App</h2>
                      
                        {wellnessdoctordata.map(({ title }, idx) => {
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
                    <button className='wellnesspatientbtn'> Get started</button>
              
                 </div>

                 <div className='Wellnesspatientright'>
                 <div className='szwellcircle'>
                    <img src="Images/Wellness/circle.png"/>
                </div>
                
                <div className='szwellnessmobile'>
                <img
                src={wellnessdoctordata[active].img.src}
                alt={wellnessdoctordata[active].img.alt}
                />
                    </div>

                </div>

 
            </div>
    </div>
  )
}
