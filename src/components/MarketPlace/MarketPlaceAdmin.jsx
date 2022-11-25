import React, { useState } from 'react'
import "./MarketplaceBanner.css"

const MarketPlaceAdmin = () => {

    const[imageChange,setImageChange] = useState("Images/Marketplaceapp/Adminappscreens/dashboard.png")

    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
        console.log(imagepath)
     }



    const freelancerData = [
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
            tablet:"Images/Marketplaceapp/Adminappscreens/clientsmanageent.png"
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
    <div>
    <div className='marketplaceadmindisplayflex'>
    <div className='marketplaceadmindisplayfleximage1'> <img className='flexboximage1'  src='/Images/Marketplaceapp/Bannersandbackgrounds/Component43.png' alt='image' />
    </div>
<div className='marketplaceadmindisplayfleximage2'><img className='flexboximage2' src={imageChange} alt='image' /></div>
</div>
<div className='admintext3rdsection'>

<div className='freelancerflexboxright2'>
<h2>Admin Website & App</h2>
<h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue facilisis nisi in facilisis. Curabitur eget mauris at tortor</h6>

<div className='adminmaindivright'>

<div className='marketplaceadmin2ndchild'>{freelancerData.map((e)=>{
    return (

     
<div className='flexboxadminagain'

key={e.Htxt} onMouseEnter={() => {
    console.log(e);
    handleImageChange(e.tablet)
}}

>
<div className='imageboxflexboxinsiderimage'><img className='smalllogomarketplaceinner' src={e.img} alt='' /></div>
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

export default MarketPlaceAdmin
