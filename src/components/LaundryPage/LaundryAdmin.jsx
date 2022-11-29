import React from 'react'
import { useState } from 'react'
import "./LaundryPage.css"

const LaundryAdmin = () => {


    const[imageChange,setImageChange] = useState("Images/Laundrypage/Adminpanelscreens/Admininterface.png")

    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
        console.log(imagepath)
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
        <div className='adminpannelLaundrydivmainbox'>
        <div className='marketplaceadmindisplayflex'>
        <div className='marketplaceadmindisplayfleximage1'> <img className='flexboximage1'  src='Images/Laundrypage/Bannersbackgrounds/Rectangle4231.png' alt='image' />
        </div>
    <div className='laundrypageadmindisplayfleximage2'><img className='laundrypageflexboximage2' src={imageChange} alt='image' /></div>
    </div>
    <div className='admintext3rdsection'>
    
    <div className='freelancerflexboxright2'>
    <h2>Admin Pannel</h2>
    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue facilisis nisi in facilisis. Curabitur eget mauris at tortor</h6>
    
    <div className='adminmaindivrightlaundryapp'>
    
    <div className='marketplaceadmin2ndchildlaundrypage'>{LaundryAdminrData.map((e)=>{
        return (
    
         
    <div className='flexboxadminagainlaundrypage'
    
    key={e.Htxt} onMouseEnter={() => {
        console.log(e);
        handleImageChange(e.tablet)
    }}
    
    >
    <div className='imageboxflexboxinsiderimagelaundry'><img className='smalllogomarketplaceinner' src={e.img} alt='' /></div>
    <div className='imageboxflexboxinsidertext'>
    <h3>{e.Htxt}</h3>
    <p>{e.stxt}</p>
    
    </div>
    
    </div>
    
        )
    })}</div>
    
    
    
    </div>
    
    
    
    
    
    </div>
    
    
    
    
    </div> 
     </div>
     
      )
    }

export default LaundryAdmin
