import React from 'react'
import { useState } from 'react'
import "./LaundryAdmin.css"

const LaundryAdmin = () => {
    const[imageChange,setImageChange] = useState("Images/Marketplaceapp/Adminappscreens/dashboard.png")

    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
     
     }

  const LaundryAdminrData = [
        {
            img: "/Images/Laundrypage/icons/dashboard1.png",
            Htxt:"Easy to use Super Admin Interface",
            stxt: "An on-demand laundry app is exactly what it sounds like, an internet request on demand delivery of their laundry. ",
            tablet:"Images/Laundrypage/Adminpanelscreens/Admininterface.png"

        },
        {
            img: "/Images/Laundrypage/icons/group.png",
            Htxt:"Manage multiple users",
            stxt: " the app, labeling clothes with barcodes, processing garments in the factory, laundry PoS, to delivery at customers’ doorsteps.",
            tablet:"Images/Laundrypage/Adminpanelscreens/Multipleusers.png"
        },
        {
            img: "/Images/Laundrypage/icons/sales.png",
            Htxt:"Generate earnings & Sales Report",
            stxt: " the global laundry care market is expected to register 5% CAGR in terms of value between 2021 and 2031.",
            tablet:"Images/Laundrypage/Adminpanelscreens/Earningssalesreport.png"
        },
    
        {
            img: "/Images/Laundrypage/icons/tag.png",
            Htxt:"Manage Discount Coupons and Pomos",
            stxt: "Coupons can drive customers to business,existing customer engagement, and generate new revenue.",
            tablet:"Images/Laundrypage/Adminpanelscreens/Discountspromos.png"
        }
    
    ]
    return (
    <div className='laundrypageadminmainbox'>
    <div className='laundrypageflexboxforadmin'>
    <div className='laundrypageadminbackgroundimagebanner'>
   <div className='laundrypageadminbackgroundimagebannertextbox'>
   <h2>Admin's Pannel</h2>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed nulla arcu. Integer hendrerit mauris nec justo tempor dapibus.</p>
   </div>
   <div className='laundrypageadminboxingfordoingflex'>
   <div className='laundrypageadminflexboxing'>{LaundryAdminrData.map((el)=>{
return (
    <div className='laundrypageadminflexboxingforimageandtxtcontain'
    
    key={el.Htxt} onMouseEnter={() => {
            
                handleImageChange(el.tablet)
            }}
    
    >
    <div className='laundrypageadminflexboxingforimagecontain'><img className='marketplaceadminlogo' src={el.img} alt="" /></div>
    <div className='laundrypageadminflexboxingfortxtcontain'><h5>{el.Htxt}</h5>
    <p>{el.stxt}</p>
    </div>
    
    </div>

)
   })}
  
   </div>
   
   
   
   </div>
    
    
    </div>





  
    <div className='laundrypageadminchangableimagecontent'><img className='imageboxlaundrypageadmin' src={imageChange} alt='marketplacebanner' /></div>
    
    
    
    
    </div>
    
    
    
    
    </div>
     
      )
    }

export default LaundryAdmin

