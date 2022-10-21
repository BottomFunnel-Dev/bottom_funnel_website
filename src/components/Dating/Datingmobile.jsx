import React from 'react'
import "./Datingmobile.css"

export default function Datingmobile() {
  return (
    <div className='szdatingmobilediv'>
    <div className='szdatingmobiledivflex'>

       <div className='szmobileimagecontainer'>
          <div className='szmobilebgcircle'><img src="Images/Dating/circle.png"/></div>
          <div className='szmobilepbonebg'><img src="Images/Dating/phone.png"/></div>
          <div className='szmobilemaches'><img src="Images/Dating/Matches.png"/></div>
          </div>
       {/* <div className='szmobiletext'></div> */}
       <div className='szcustomerapptext'>
                <h2> Customer App</h2>
            <div className='datingtextbg'><img src="Images/Dating/customertextbg.png"/> </div>
         <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius eligendi recusandae perferendis, praesentium labore doloremque reiciendis iure commodi dolor quo laudantium  </p></div>   
       
       <div className='textsecond'>  
         <div className='datingtextbg'><img src="Images/Dating/customertextsecond.png"/> </div>
         <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius eligendi recusandae perferendis, praesentium labore doloremque reiciendis iure commodi dolor quo laudantium  </p></div>   
         </div>

          <div className='textthird'>
          <div className='datingtextbg'><img src="Images/Dating/customertextbg.png"/> </div>
         <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius eligendi recusandae perferendis, praesentium labore doloremque reiciendis iure commodi dolor quo laudantium  </p></div>   
          </div>

          <div className='textfourth'>  
         <div className='datingtextbg'><img src="Images/Dating/customertextsecond.png"/> </div>
         <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius eligendi recusandae perferendis, praesentium labore doloremque reiciendis iure commodi dolor quo laudantium  </p></div>   
         </div>
         
            </div>
       </div>
    </div>
  )
}
