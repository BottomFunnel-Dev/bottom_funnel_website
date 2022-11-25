import React, { useState } from 'react'
import "./MarketplaceBanner.css"

const MarketPlaceClients = () => {

    const[imageChange,setImageChange] = useState("Images/Marketplaceapp/Clientsappscreen/detailsofposts.png")



    const handleImageChange = (imagepath) => {
        setImageChange(() => imagepath)
        console.log(imagepath)
     }



    const marketplaceclientdata = [

    {
        img: "/Images/Marketplaceapp/icons/Component47.png",
        Htxt:"Details of Posts",
        stxt: "Lorem ipsum dolor sit amet, consect in facilisis. Curabitur eget mauris",
        Cphone: "/Images/Marketplaceapp/Clientsappscreen/detailsofposts.png"
    },
    {
        img: "/Images/Marketplaceapp/icons/Component44.png",
        Htxt:"In-App-Chat",
        stxt: "Lorem ipsum dolor sit amet, consect in facilisis. Curabitur eget mauris",
        Cphone: "/Images/Marketplaceapp/Clientsappscreen/inappchat.png"
    },
    {
        img: "/Images/Marketplaceapp/icons/Component46.png",
        Htxt:"Employee Details",
        stxt: "Lorem ipsum dolor sit amet, consect in facilisis. Curabitur eget mauris",
        Cphone: "/Images/Marketplaceapp/Clientsappscreen/employeedetails.png"
    },

    {
        img: "/Images/Marketplaceapp/icons/Component45.png",
        Htxt:"List of Applicants",
        stxt: "Lorem ipsum dolor sit amet, consect in facilisis. Curabitur eget mauris",
        Cphone: "/Images/Marketplaceapp/Clientsappscreen/people applied.png"
    }

]




return (
    <div className='marketplaceclientdiv'>
   
<div className='clienttext3rdsection'>

<div className='freelancerflexboxright2'>
<h2>Client's Website & Site</h2>
<h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue facilisis nisi in facilisis. Curabitur eget mauris at tortor</h6>

<div className='adminmaindivright'>

<div className='marketplaceadmin2ndchild'>{marketplaceclientdata.map((e)=>{
    return (

     
<div className='flexboxadminagain'
key={e.Htxt} onMouseEnter={() => {
    console.log(e);
    handleImageChange(e.Cphone)
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

<div className='flexboxforclientright'>
<img className='flexboxrightinnerimage1' src='/Images/Marketplaceapp/Bannersandbackgrounds/Component44.png' alt='image1' />
<img className='flexboxrightinnerimage2' src={imageChange} alt='image2' />
<img className='flexboxrightinnerimage3' src='/Images/Marketplaceapp/Bannersandbackgrounds/picture(2).png' alt='image2' />


</div>


 </div>
 
  )
}

export default MarketPlaceClients
