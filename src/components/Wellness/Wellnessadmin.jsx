import React from 'react'
import { useState } from 'react';
import "./Wellnessadmin.css"


export default function Wellnessadmin() {

    let wellnessadmindata = [
        {
          img: {
            src: "Images/Wellness/Dashboardadmin.png",
            alt: "Register image",
          },
          title: "Dashboard",
         para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
        },
        {
          img: {
            src: "Images/Wellness/Appointment management admin panel.png",
            alt: "Schedule",
          },
             title: "Appointment management",
             para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
        },
        {
          img: {
            src: "Images/Wellness/doctormanage.png",
            alt: "Multiple Payment Option image",
          },
            title: "Doctor management",
             para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
       
         },
        {
          img: {
            src: "Images/Wellness/Clinic management.png",
            alt: "Track Order image",
          },
          title: "Clinic administration",
          para:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta reiciendis odit nostrum! Dolorum, obcaecati similique at officia fugiat, dolorem eaque illo numquam explicabo ad dignissimos  ",
        },
  
        
      ];

      const [active, setActive] = useState(0);


  return (
    
    <div className='szwellnessadmin'>
    {/* <h1> Must - Have Feature Of Healthcare Apps</h1> */}
   <div className='Wellnessadminsub'>
      

       <div className='Wellnessadminleft'>
            <div > 
                  <h2>admin Panel</h2>
          {
         wellnessadmindata.map(({ title }, idx) => {
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
                <button className='wellnessadminbtn'> Get started</button>
          
             </div>

             <div className='Wellnessadminright'>
             <div className='szwelltopbg'>
                <img src="Images/Wellness/tabbg.png"/>
            </div>

            <div className='szwellnesstab'>
            <img
                src={wellnessadmindata[active].img.src}
                // alt={wellnessadmindata[active].img.alt}
                />
            </div>

            <div className='szwellbotombg'>
                <img src="Images/Wellness/botmbg.png"/>
            </div>
            

            </div>

           
        </div>
</div>
  )
}
