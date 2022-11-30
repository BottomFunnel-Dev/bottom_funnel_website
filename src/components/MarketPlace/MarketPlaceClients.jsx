import React, { useState } from 'react'
import "./MarketPlaceClient.css"

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
                Cphone: "Images/Marketplaceapp/Clientsappscreen/detailsofposts.png"
            },
            {
                img: "/Images/Marketplaceapp/icons/Component44.png",
                Htxt:"In-App-Chat",
                stxt: "Lorem ipsum dolor sit amet, consect in facilisis. Curabitur eget mauris",
                Cphone: "Images/Marketplaceapp/Clientsappscreen/inappchat.png"
            },
            {
                img: "/Images/Marketplaceapp/icons/Component46.png",
                Htxt:"Employee Details",
                stxt: "Lorem ipsum dolor sit amet, consect in facilisis. Curabitur eget mauris",
                Cphone: "Images/Marketplaceapp/Clientsappscreen/employeedetails.png"
            },
        
            {
                img: "/Images/Marketplaceapp/icons/Component45.png",
                Htxt:"List of Applicants",
                stxt: "Lorem ipsum dolor sit amet, consect in facilisis. Curabitur eget mauris",
                Cphone: "Images/Marketplaceapp/Clientsappscreen/people applied.png"
            }
        
        ]
        



  return (
    <div className='marketplaceclientmainboxing'>
      <div className='clientmarketplaceflexboxbig'>
      
      <div className='clientmarketplaceflexleft'>
      <div className='clientmarketplaceflexlefttxtbox'><h2>Client's Website & Site</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed nulla arcu. Integer hendrerit mauris nec justo tempor dapibus.</p></div>
    
      <div className='marketplaceclientsboxingfordoingflex'>
      <div className='marketplaceclientsflexboxing'>{marketplaceclientdata.map((el)=>{
   return (
       <div className='marketplaceclientflexboxingforimageandtxtcontain'
       
       key={el.Htxt} onMouseEnter={() => {
        console.log(el);
             handleImageChange(el.Cphone)
               }}
       
       >
       <div className='marketplaceclientsflexboxingforimagecontain'><img className='marketplaceadminlogo' src={el.img} alt="" /></div>
       <div className='marketplaceclientflexboxingfortxtcontain'><h5>{el.Htxt}</h5>
       <p>{el.stxt}</p>
       </div>
       
       </div>
   
   )
      })}
     
      </div>
      </div>
      
      
      </div>
      
















  <div className='clientmarketplaceflexright'>
      <div className='clientmarketplaceflexrightinsiderimagesthreebox'>
      
      
      <div className='clientflexingrightdiv1forimage'><img className='marketplaceimageclientimage1' src='Images/Marketplaceapp/Bannersandbackgrounds/Component44.png' alt='image1' /></div>
      <div className='clientflexingrightdiv2forimage'><img className='marketplaceimageclientimage1'  src={imageChange} alt='image2' /></div>
      <div className='clientflexingrightdiv3forimage'><img className='marketplaceimageclientimage1'  src='Images/Marketplaceapp/Bannersandbackgrounds/picture(2).png' alt='image2' /></div>      
      
      </div>
      
      
      </div>


      </div>

    </div>
  )
}

export default MarketPlaceClients



