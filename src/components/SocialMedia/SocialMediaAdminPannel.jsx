import React from 'react'
import { useState } from 'react'
import "./SocialMediaAdminPannel.css"


export const SocialMediaAdminPannel = () => {

const socialmediadminpanneldata = [

{
  logo:"Images/socialmedia/bannesbackground/Component41.png",
  image:"Images/socialmedia/Adminpanelscreens/dashboard.png",
  htxt:"Dashboard",
  stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis dui non augue rutrum, eu fringilla"
},


{
  logo:"Images/socialmedia/bannesbackground/Group339972.png",
  image:"Images/socialmedia/Adminpanelscreens/Profile.png",
  htxt:"Profile Management",
  stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis dui non augue rutrum, eu fringilla"
},


{
  logo:"Images/socialmedia/bannesbackground/Component43.png",
  image:"Images/socialmedia/Adminpanelscreens/Reorts.png",
  htxt:"Reports",
  stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis dui non augue rutrum, eu fringilla"
},



{
  logo:"Images/socialmedia/bannesbackground/icon.png",
  image:"Images/socialmedia/Adminpanelscreens/Inshigts.png",
  htxt:"Insights",
  stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis dui non augue rutrum, eu fringilla"
},


]

const[imageChange,setImageChange] = useState("Images/socialmedia/Adminpanelscreens/dashboard.png")

const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
 
 }



  return (
    <div className='socialmediaadminmainboxing'>

<div className='socialmedialeftboxafterflexing'>
<h2>Admin Dashboard</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis dui non augue rutrum, eu fringilla ante ultrices. Praesent id est porttitor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis dui non augue rutrum, eu fringilla ante ultrices. Praesent id est porttitor</p>
<div className='socialmediainsiderflexboxadminpannel'>{socialmediadminpanneldata.map((e)=>{
  return (
    <div className='socialmediaadminmaperbox'
      
    key={e.htxt} onMouseEnter={() => {
            
      handleImageChange(e.image)
  }}

    
    >
    <div><img src={e.logo} alt = "logo" /></div>
    <div className='socialmeditxtmapperbox'><h4>{e.htxt}</h4>
    <p>{e.stxt}</p>
    
    </div>
    
    </div>
  )
})}</div>


</div>



<div className='afterflexingsocialmediarightbox'>
<img src={imageChange} alt='' />
</div>






    
    </div>
  )
}

