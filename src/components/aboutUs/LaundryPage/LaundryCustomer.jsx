import React, { useState } from 'react'

const LaundryCustomer = () => {

  const[imageChange,setImageChange] = useState("Images/Laundrypage/Customerappscreens/Easytoplaceorder.png")



  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
    console.log(imagepath)
 }





const laundrycustomerdata = [
    {
        htxt:"Easy to Place Online Orders",
        stxt:"Laundry app development has gained a lot of popularity these days. Just like the on-demand food delivery app and grocery delivery app have become highly successful",
        img:"Images/Laundrypage/icons/shopping.png",
        bigimage:"Images/Laundrypage/Customerappscreens/Easytoplaceorder.png"
    },
    {
        htxt:"Real-Time Delivery Traking",
        stxt:"As the popularity of laundry apps has grown, several startups have invested in laundry app development. There are some that must be included in the app",
        img:"Images/Laundrypage/icons/track1.png",
        bigimage:"Images/Laundrypage/Customerappscreens/Realtimetracking.png"

      },

    {
        htxt:"Delivery Reminder Alerts",
        stxt:"These fantastic on-demand laundry mobile apps allow users to book their laundry services in a couple of seconds. The global dry cleaning service.",
        img:"Images/Laundrypage/icons/reminder.png",
        bigimage:"Images/Laundrypage/Customerappscreens/Deliveryreminders.png"
      },

    {
        htxt:"Store Locator and Easy navigation",
        stxt:" the market share of laundry and dry cleaning services in the U.s will reach $13.8 billion by 2025. revenue services is expected to hit $7,660 million  By 2024",
        img:"Images/Laundrypage/icons/compass.png",
        bigimage:"Images/Laundrypage/Customerappscreens/StorelocaterEasynavigate.png"
    }
]


  return (
    <div className='laundrycutomermaindiv'>
    <div className='laundrycustomerapptxtfront'>
      <h5><small>OUR ON DEMAND LAUNDRY APP DEVELOPMENT COMPANY</small></h5>
      <h2>Provide You With Robust Solution For Your Laundry Service Business</h2>
    </div>
<div className='laundrycustomerflexboxmaindiv'>
<div className='laundryflexboxleftdiv'>
<div className='laundryflexboxleftdivinsidertxt'><h2>Customer app</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula condimentum volutpat. Praesent efficitur tellus eu turpis cursus</p>
</div>
<div className='laundryflexboxleftdivflexboxx'>{laundrycustomerdata.map((e)=>{
  return (
  <div className='laundryflexboxleftdivflexbox' 
  key={e.htxt} onMouseEnter={() => {
    console.log(e);
    handleImageChange(e.bigimage)
}}
  
  >
  <div className='laundryflexboxleftdivflexboxicon'><img className='laundryiconleftboxinsider' src={e.img} alt="image" /></div>
  <div className='laundryflexboxleftdivflexboxicontxt'><h4>{e.htxt}</h4>
  <p><small>{e.stxt}</small></p>
  </div>
  
  
  </div>
  )
})}



</div>

</div>



<div className='laundryflexboxrightdiv'>
<img  src={imageChange} alt='' />

</div>




</div>





    </div>
  )
}

export default LaundryCustomer
