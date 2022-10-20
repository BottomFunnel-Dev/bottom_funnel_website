import React from 'react'
import "./Travelsolution.css"

export default function Travelsolution() {
        
    const travelsolution=[
      
        {
          img:"Images/Travel/carbooking.png",
          p:"Car Booking Solution "
       },
       {
           img:"Images/Travel/booking.png",
           p:"Hotel Booking Solution"
        },
        {
           img:"Images/Travel/diverse.png",
           p:"Diverse Booking Solution"
        },
        {
           img:"Images/Travel/crm solution.png",
           p:"CRM Solutions "
        },
        {
           img:"Images/Travel/travelsolution.png",
           p:"Travel Planning Solution.png"
        },
        {
           img:"Images/Travel/travelportal.png",
           p:"Travel Portal Development"
        },
              
      ]
  return (
    <div className='travelsolutiondiv'>
        <div className='travelsubdiv'>
              <div className='travelsolutionleft'> 
                 <div>
              <h1>Solution</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta porro mollitia quisquam sed odio minima optio consectetur eligendi magnam explicabo eos debitis odit, ipsam adipisci animi error veritatis dolore hic.</p>
            </div>
              </div>
              <div className='travelsolutionright'>
              {
                 travelsolution.map((item) => {
               return (
                <div className='travelsolutiondocs'>
                <div className="traveldocimg" ><img src={item.img}/>  </div>
                <p>{item.p}</p> 
                </div>
                  )
               })
          }
              </div>
        </div>
    </div>
  )
}



// <div className='travelfeaturecontainer'>
      
// <div className='travelfeaturesub'>
   
//    <div className='travelfeatureleft'>

//     {
//   travelfeature.map((item) => {
//         return (
//             <div className='travelfeaturdocs'>
//                 <div className="traveldocimg" ><img src={item.img}/>  </div>
//                 <p>{item.p}</p> 
//                 </div>
//         )
//      })
//    }
 
//    </div>
//    <div className='travelfeatureright'>
//       <div>
//         <h1>Features</h1>
//         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta porro mollitia quisquam sed odio minima optio consectetur eligendi magnam explicabo eos debitis odit, ipsam adipisci animi error veritatis dolore hic.</p>
//       </div>
   
//    </div>
// </div>
// </div>