import React from 'react'
import "./Travelfeature.css"

export default function Travelfeature() {

    const travelfeature=[
      
        {
          img:"Images/Travel/gps.png",
          p:"GPS based location services"
       },
       {
           img:"Images/Travel/hotdeals.png",
           p:"Hot deals"
        },
        {
           img:"Images/Travel/currency.png",
           p:"Currency Exchange"
        },
        {
           img:"Images/Travel/guide.png",
           p:"Complete travel guide"
        },
        {
           img:"Images/Travel/admin.png",
           p:"Easy to use admin control panel"
        },
        {
           img:"Images/Travel/Secure.png",
           p:"Secure payment"
        },
              
      ]
  return (
    <div className='travelfeaturecontainer'>
      
        <div className='travelfeaturesub'>
           
           <div className='travelfeatureleft'>
        
            {
          travelfeature.map((item) => {
                return (
                    <div className='travelfeaturdocs'>
                        <div className="traveldocimg" ><img src={item.img}/>  </div>
                        <p>{item.p}</p> 
                        </div>
                )
             })
           }
         
           </div>
           <div className='travelfeatureright'>
              <div>
                <h1>Features</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta porro mollitia quisquam sed odio minima optio consectetur eligendi magnam explicabo eos debitis odit, ipsam adipisci animi error veritatis dolore hic.</p>
              </div>
           
           </div>
        </div>
    </div>
  )
}


