import React from 'react'
import { useState } from 'react'
import "./FlowerDeliveryPharmecy.css"

const FlowerDeliveryPharmecy = () => {
  const [imageChange , setImageChange] = useState("Images/Flowerdeliverypage/Easyregister.png")


  const handleImageChange = (imagepath) => {
    setImageChange(() => imagepath)
    console.log(imagepath)
 }


  const pharmecydata = [
    {
      htxt:"Easy registration",
      stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
      phone:"Images/Flowerdeliverypage/Easyregister.png"
    },

    {
      htxt:"Buy Flowers",
      stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
      phone:"Images/Flowerdeliverypage/Group339924.png"
    },

    {
      htxt:"Multiple payment options",
      stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
      phone:"Images/Flowerdeliverypage/Multiplepaymentoption.png"
    },


    {
      htxt:"Tracking Details",
      stxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
      phone:"Images/Flowerdeliverypage/Trackorder.png"
    },





  ]
 



  return (
    <div className='flowerdeliverypharmecyappdiv'>
   <div className='buttopn'> <button className='pharmecybutton'>Get Started</button>  </div>

<br></br>

<div className='texthavetocentre'><h5 className='pharmecytextupper'>A SNEAK-PEEK OF OUR</h5>
<h3 className='pharmecytextupper2'><h1><b>Flower Delivery App Solution</b></h1></h3>
</div>

<div className='pharmecydivflexandgrid'>
<div className='pharmecydivflexandgridleft'>
<h2 className='pharmecydivflexandgridlefttxt'>Customer app</h2>
<br></br><br></br>
<div>{pharmecydata.map((e)=>{
return (
  <div className='pharmecydivflexandgridleftbox' id='pharmecydivflexandgridleftbox1'
  
  key={e.htxt} onMouseEnter={() => {
    console.log(e);
    handleImageChange(e.phone)
}}
  
  
  >
<h5>{e.htxt}</h5>
<p><small>{e.stxt}</small></p>

</div>
)
})}</div>



</div>
<div className='pharmecydivflexandgridright'>
<div className='pharmecydivflexandgridrightbackgroundimg' >

<div className='pharmecydivflexandgridrightbackgroundimg2' >
<img className='pharmecyimagechanger' src={imageChange} alt="flowerimage1" />


</div>


</div>



</div>

</div>
    </div>
  )
}

export default FlowerDeliveryPharmecy
