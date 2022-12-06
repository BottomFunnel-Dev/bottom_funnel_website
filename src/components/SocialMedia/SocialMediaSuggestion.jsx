import React from 'react'
import "./SocialMediaSuggestion.css"




export const SocialMediaSuggestion = () => {

const socialmediasuggestiondata = [

{
    logo:"Images/socialmedia/bannesbackground/Socialtreecuate2.png",
    htxt:"Social networks",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis dui non augue rutrum, eu fringilla ante ultrices. Praesent id est porttitor purus hendrerit maximus vitae vel felis. Nulla eget molestie dui, ut consectetur felis. Aenean cursus mollis metus, ac varius augue"
},

{
    logo:"Images/socialmedia/bannesbackground/6240060 2.png",
    htxt:"Media Sharing Networks",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis dui non augue rutrum, eu fringilla ante ultrices. Praesent id est porttitor purus hendrerit maximus vitae vel felis. Nulla eget molestie dui, ut consectetur felis. Aenean cursus mollis metus, ac varius augue"
},


{
    logo:"Images/socialmedia/bannesbackground/8454 3.png",
    htxt:"Discussion Forums",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis dui non augue rutrum, eu fringilla ante ultrices. Praesent id est porttitor purus hendrerit maximus vitae vel felis. Nulla eget molestie dui, ut consectetur felis. Aenean cursus mollis metus, ac varius augue"
},


{
    logo:"Images/socialmedia/bannesbackground/8454 4.png",
    htxt:"eCommerce Networks",
    stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis dui non augue rutrum, eu fringilla ante ultrices. Praesent id est porttitor purus hendrerit maximus vitae vel felis. Nulla eget molestie dui, ut consectetur felis. Aenean cursus mollis metus, ac varius augue"
},



]



  return (
    <div className='SocialMediaSuggestionmainboxes'>
    <div className='socialmediasuggestionmainboxfortext'>
    <h1>APP SUGGESTIONS FOR DIFFERENT SOCIAL MEDIA APPLICATION</h1>
    <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis dui non augue rutrum, eu fringilla ante ultrices. Praesent id est porttitor</small></p>
    </div>
    
  <div className='socialmediaflexingbox'>{socialmediasuggestiondata.map((e)=>{
   return (
    <div className='socialmediaaftermappingbox'>
    <div className='logodivforsocialmediasuggestion'><img src={e.logo}  alt="img"/></div>
    <div><h4>{e.htxt}</h4></div>
    <div><p>{e.stxt}</p></div>
    
    
    </div>

   )
  })}</div>




    
    </div>
  )
}
