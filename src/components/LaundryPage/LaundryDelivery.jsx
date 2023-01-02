import React, { useState } from 'react'

const LaundryDelivery = () => {

  const[imageChange,setImageChange] = useState("Images/Laundrypage/Deliveryappscreens/Notifications.png")

  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
    console.log(imagepath)
 }

  const laundrydeliverydata = [
    {
      htxt:"Notification of Upcoming Orders",
      stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dictum neque. Quisqu",
      img:"Images/Laundrypage/icons/Rectangle4230.png",
      bigimg:"Images/Laundrypage/Deliveryappscreens/Notifications.png"

    },
    {
      htxt:"Daily Earning Report",
      stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dictum neque. Quisqu",
      img:"Images/Laundrypage/icons/report.png",
      bigimg:"Images/Laundrypage/Deliveryappscreens/Earningreports.png"
    },

    {
      htxt:"Order History",
      stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dictum neque. Quisqu",
      img:"Images/Laundrypage/icons/sandclock.png",
      bigimg:"Images/Laundrypage/Deliveryappscreens/Ohistory.png"
    }
  ]


  return (
    <div className='laundrydeliverymaindiv'>
    <div className='laundrydeliveryappflexbox'>
    <div className='laundrydeliveryappflexboxleft'>
    <div className='laundrydeliveryappflexboxleftimagesof'>
    <img className='laundryfleximage1o1' src='Images/Laundrypage/Bannersbackgrounds/Ellipse76.png'  alt='' />
    <img className='laundryfleximage1o2' src={imageChange} alt='' />

    </div>
    </div>


    <div className='laundryflexboxleftdivfordelivery'>
    <div className='laundryflexboxleftdivinsidertxt'><h2>Delivery Application</h2>
    <p>Get A Customized App With Advanced Delivery Managment Features</p>
    </div>
    <div className='laundryflexboxleftdivflexboxxdelivery'>{laundrydeliverydata.map((e)=>{
      return (
      <div className='laundryflexboxleftdivflexboxfordelivery'
      key={e.htxt} onMouseEnter={() => {
        console.log(e);
        handleImageChange(e.bigimg)
    }}
      
      >
      <div className='laundryflexboxleftdivflexboxicon'><img src={e.img} alt="image" /></div>
      <div className='laundryflexboxleftdivflexboxicontxt'><h4>{e.htxt}</h4>
      <p>{e.stxt}</p>
      </div>
      
      
      </div>
      )
    })}
    
    </div>
    
    </div>
    
    
    </div>
      
    </div>
  )
}

export default LaundryDelivery
