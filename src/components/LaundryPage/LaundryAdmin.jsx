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
            stxt: "Lorem ipsum dolor sit amet, consect in facilisis. Curabitur eget mauris",
            tablet:"Images/Laundrypage/Adminpanelscreens/Admininterface.png"

        },
        {
            img: "/Images/Laundrypage/icons/group.png",
            Htxt:"Manage multiple users",
            stxt: "Lorem ipsum dolor sit amet, consect in facilisis. Curabitur eget mauris",
            tablet:"Images/Laundrypage/Adminpanelscreens/Multipleusers.png"
        },
        {
            img: "/Images/Laundrypage/icons/sales.png",
            Htxt:"Generate earnings & Sales Report",
            stxt: "Lorem ipsum dolor sit amet, consect in facilisis. Curabitur eget mauris",
            tablet:"Images/Laundrypage/Adminpanelscreens/Earningssalesreport.png"
        },
    
        {
            img: "/Images/Laundrypage/icons/tag.png",
            Htxt:"Manage Discount Coupons and Pomos",
            stxt: "Lorem ipsum dolor sit amet, consect in facilisis. Curabitur eget mauris",
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

