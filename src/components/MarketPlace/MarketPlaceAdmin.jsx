import React, { useState } from 'react'
import "./MarketPlaceAdmin.css"


const MarketPlaceAdmin = () => {
    const[imageChange,setImageChange] = useState("Images/Marketplaceapp/Adminappscreens/dashboard.png")

    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
     
     }


     const marketplaceAdminrData = [
                {
                                img: "/Images/Marketplaceapp/icons/Component41.png",
                                Htxt:"Dashboard",
                                stxt: "Lorem ipsum dolor sit amet, consect in facilisis. Curabitur eget mauris",
                                tablet:"Images/Marketplaceapp/Adminappscreens/dashboard.png"
                    
                            },
                            {
                                img: "/Images/Marketplaceapp/icons/Group339972.png",
                                Htxt:"Clients Management",
                                stxt: "Lorem ipsum dolor sit amet, consect in facilisis. Curabitur eget mauris",
                                tablet:"Images/Marketplaceapp/Adminappscreens/reports.png"
                            },
                            {
                                img: "/Images/Marketplaceapp/icons/Component43.png",
                                Htxt:"Reports",
                                stxt: "Lorem ipsum dolor sit amet, consect in facilisis. Curabitur eget mauris",
                                tablet:"Images/Marketplaceapp/Adminappscreens/reports.png"
                            },
                        
                            {
                                img: "/Images/Marketplaceapp/icons/icon.png",
                                Htxt:"Email Alerts",
                                stxt: "Lorem ipsum dolor sit amet, consect in facilisis. Curabitur eget mauris",
                                tablet:"Images/Marketplaceapp/Adminappscreens/emailalerts.png"
                            }
                        
                        ]
    return (
    <div className='marketplaceadminmainbox'>
    <div className='marketplaceflexboxforadmin'>
    <div className='marketplaceadminbackgroundimagebanner'>
   <div className='marketplaceadminbackgroundimagebannertextbox'>
   <h2>Admin's Website & App</h2>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed nulla arcu. Integer hendrerit mauris nec justo tempor dapibus.</p>
   </div>
   <div className='marketplaceadminboxingfordoingflex'>
   <div className='marketplaceadminflexboxing'>{marketplaceAdminrData.map((el)=>{
return (
    <div className='marketplaceadminflexboxingforimageandtxtcontain'
    
    key={el.Htxt} onMouseEnter={() => {
            
                handleImageChange(el.tablet)
            }}
    
    >
    <div className='marketplaceadminflexboxingforimagecontain'><img className='marketplaceadminlogo' src={el.img} alt="" /></div>
    <div className='marketplaceadminflexboxingfortxtcontain'><h5>{el.Htxt}</h5>
    <p>{el.stxt}</p>
    </div>
    
    </div>

)
   })}
  
   </div>
   
   
   
   </div>
    
    
    </div>





  
    <div className='marketplaceadminchangableimagecontent'><img className='imageboxmarketplaceadmin' src={imageChange} alt='marketplacebanner' /></div>
    
    
    
    
    </div>
    
    
    
    
    </div>
     
      )
    }

export default MarketPlaceAdmin



